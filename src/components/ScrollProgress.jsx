import React, { useEffect, useState } from "react";

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePref = () => setReducedMotion(mq.matches);
    updatePref();
    mq.addEventListener("change", updatePref);

    const onScroll = () => {
      const { scrollTop, scrollHeight } = document.documentElement;
      const { innerHeight } = window;
      const total = scrollHeight - innerHeight;
      const value = total > 0 ? (scrollTop / total) * 100 : 0;
      setProgress(Math.min(100, Math.max(0, value)));
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      mq.removeEventListener("change", updatePref);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] pointer-events-none">
      <div className="h-1">
        <div
          className="h-1 bg-gradient-to-r from-primary-500 to-accent-500 shadow-[0_0_8px_rgba(14,165,233,0.4)]"
          style={{
            width: `${progress}%`,
            transition: reducedMotion ? "none" : "width 150ms ease-out",
          }}
        />
      </div>
    </div>
  );
};

export default ScrollProgress;
