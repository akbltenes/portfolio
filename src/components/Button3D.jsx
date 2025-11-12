import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

const Button3D = ({
  children,
  className = "",
  onClick,
  href,
  target,
  rel,
  download,
  to,
  ...props
}) => {
  const [transform, setTransform] = useState("");
  const [isPressed, setIsPressed] = useState(false);
  const buttonRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!buttonRef.current) return;

    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;

    setTransform(
      `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`
    );
  };

  const handleMouseLeave = () => {
    setTransform(
      "perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)"
    );
    setIsPressed(false);
  };

  const handleMouseDown = () => {
    setIsPressed(true);
    setTransform((prev) => prev.replace("translateZ(10px)", "translateZ(5px)"));
  };

  const handleMouseUp = () => {
    setIsPressed(false);
  };

  const commonProps = {
    ref: buttonRef,
    className: `relative overflow-hidden transform-gpu transition-all duration-200 ease-out ${className}`,
    style: {
      transform,
      transformStyle: "preserve-3d",
    },
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    onMouseDown: handleMouseDown,
    onMouseUp: handleMouseUp,
    onClick,
    ...props,
  };

  const content = (
    <>
      <div
        className={`absolute inset-0 bg-gradient-to-r from-primary-600 to-purple-600 opacity-0 transition-opacity duration-300 ${
          isPressed ? "opacity-20" : "hover:opacity-10"
        }`}
      />
      <div className="relative z-10 flex items-center justify-center">
        {children}
      </div>
      <div
        className="absolute inset-0 bg-white opacity-0 transition-opacity duration-200 pointer-events-none"
        style={{
          background: `radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 70%)`,
          opacity: isPressed ? 0.1 : 0,
        }}
      />
    </>
  );

  // If it's a regular link
  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        download={download}
        {...commonProps}
      >
        {content}
      </a>
    );
  }

  // If it's a React Router Link (to prop)
  if (to) {
    return (
      <Link to={to} {...commonProps}>
        {content}
      </Link>
    );
  }

  // Regular button
  return <button {...commonProps}>{content}</button>;
};

export default Button3D;
