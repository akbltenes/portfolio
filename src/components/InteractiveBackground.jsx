import React, { useRef, useEffect } from "react";
import * as THREE from "three";

const InteractiveBackground = () => {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const particlesRef = useRef(null);
  const codeRainRef = useRef(null);
  const connectionsRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    currentMount.appendChild(renderer.domElement);

    sceneRef.current = scene;

    // Create main particles (connection nodes)
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 80;
    const posArray = new Float32Array(particlesCount * 3);
    const particlesPositions = [];

    for (let i = 0; i < particlesCount; i++) {
      const x = (Math.random() - 0.5) * 20;
      const y = (Math.random() - 0.5) * 15;
      const z = (Math.random() - 0.5) * 10;

      posArray[i * 3] = x;
      posArray[i * 3 + 1] = y;
      posArray[i * 3 + 2] = z;

      particlesPositions.push({ x, y, z });
    }

    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(posArray, 3)
    );

    // Create particle material with glow
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.08,
      color: "#00ff41",
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });

    const particlesMesh = new THREE.Points(
      particlesGeometry,
      particlesMaterial
    );
    scene.add(particlesMesh);
    particlesRef.current = particlesMesh;

    // Create connection lines between particles
    const connectionGeometry = new THREE.BufferGeometry();
    const connectionPositions = [];

    for (let i = 0; i < particlesPositions.length; i++) {
      for (let j = i + 1; j < particlesPositions.length; j++) {
        const distance = Math.sqrt(
          Math.pow(particlesPositions[i].x - particlesPositions[j].x, 2) +
            Math.pow(particlesPositions[i].y - particlesPositions[j].y, 2) +
            Math.pow(particlesPositions[i].z - particlesPositions[j].z, 2)
        );

        if (distance < 4) {
          connectionPositions.push(
            particlesPositions[i].x,
            particlesPositions[i].y,
            particlesPositions[i].z,
            particlesPositions[j].x,
            particlesPositions[j].y,
            particlesPositions[j].z
          );
        }
      }
    }

    connectionGeometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(connectionPositions, 3)
    );

    const connectionMaterial = new THREE.LineBasicMaterial({
      color: "#00ff41",
      transparent: true,
      opacity: 0.2,
      blending: THREE.AdditiveBlending,
    });

    const connectionLines = new THREE.LineSegments(
      connectionGeometry,
      connectionMaterial
    );
    scene.add(connectionLines);
    connectionsRef.current = connectionLines;

    // Create code rain effect
    const codeRainGroup = new THREE.Group();
    const codeSymbols = [
      "0",
      "1",
      "{",
      "}",
      "[",
      "]",
      "(",
      ")",
      ";",
      ":",
      "<",
      ">",
      "/",
      "\\",
      "=",
      "+",
      "-",
      "*",
      "&",
      "|",
      "const",
      "let",
      "var",
      "function",
      "return",
      "if",
      "else",
      "class",
      "import",
      "export",
      "async",
      "await",
      "=>",
      "console.log",
      "useState",
      "useEffect",
      "React",
    ];

    const codeRainCount = 50;
    const codeElements = [];

    for (let i = 0; i < codeRainCount; i++) {
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");
      canvas.width = 128;
      canvas.height = 64;

      context.fillStyle = "#00ff41";
      context.font = '12px "Courier New", monospace';
      context.textAlign = "center";
      context.fillText(
        codeSymbols[Math.floor(Math.random() * codeSymbols.length)],
        64,
        32
      );

      const texture = new THREE.CanvasTexture(canvas);
      const material = new THREE.SpriteMaterial({
        map: texture,
        transparent: true,
        opacity: 0.6,
        blending: THREE.AdditiveBlending,
      });

      const sprite = new THREE.Sprite(material);
      sprite.scale.set(0.5, 0.25, 1);
      sprite.position.set(
        (Math.random() - 0.5) * 25,
        Math.random() * 15 + 5,
        (Math.random() - 0.5) * 8
      );

      codeElements.push({
        sprite,
        fallSpeed: Math.random() * 0.02 + 0.01,
        opacity: Math.random() * 0.6 + 0.3,
      });

      codeRainGroup.add(sprite);
    }

    scene.add(codeRainGroup);
    codeRainRef.current = { group: codeRainGroup, elements: codeElements };

    // Create binary matrix background
    const binaryGroup = new THREE.Group();
    const binaryCount = 30;

    for (let i = 0; i < binaryCount; i++) {
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");
      canvas.width = 64;
      canvas.height = 64;

      context.fillStyle = "#003300";
      context.font = '20px "Courier New", monospace';
      context.textAlign = "center";
      context.fillText(Math.random() > 0.5 ? "1" : "0", 32, 40);

      const texture = new THREE.CanvasTexture(canvas);
      const material = new THREE.SpriteMaterial({
        map: texture,
        transparent: true,
        opacity: 0.3,
      });

      const sprite = new THREE.Sprite(material);
      sprite.scale.set(1, 1, 1);
      sprite.position.set(
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 20,
        -5
      );

      binaryGroup.add(sprite);
    }

    scene.add(binaryGroup);

    // Position camera
    camera.position.z = 8;

    // Mouse move handler with enhanced interactivity
    const handleMouseMove = (event) => {
      mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    // Resize handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    // Animation loop with enhanced effects
    let time = 0;
    const animate = () => {
      requestAnimationFrame(animate);
      time += 0.01;

      // Animate main particles with wave motion
      if (particlesRef.current) {
        particlesRef.current.rotation.y += 0.001;

        const positions =
          particlesRef.current.geometry.attributes.position.array;
        for (let i = 0; i < positions.length; i += 3) {
          positions[i + 1] += Math.sin(time + positions[i] * 0.1) * 0.002;
        }
        particlesRef.current.geometry.attributes.position.needsUpdate = true;

        // Interactive mouse movement
        particlesRef.current.rotation.y += mouseRef.current.x * 0.0005;
        particlesRef.current.rotation.x += mouseRef.current.y * 0.0005;
      }

      // Animate connections with pulsing effect
      if (connectionsRef.current) {
        connectionsRef.current.material.opacity =
          0.2 + Math.sin(time * 2) * 0.1;
        connectionsRef.current.rotation.y += 0.0005;
      }

      // Animate code rain
      if (codeRainRef.current) {
        codeRainRef.current.elements.forEach((element, index) => {
          element.sprite.position.y -= element.fallSpeed;

          // Reset position when falling out of view
          if (element.sprite.position.y < -8) {
            element.sprite.position.y = 15;
            element.sprite.position.x = (Math.random() - 0.5) * 25;

            // Update text occasionally
            if (Math.random() < 0.1) {
              const canvas = document.createElement("canvas");
              const context = canvas.getContext("2d");
              canvas.width = 128;
              canvas.height = 64;

              context.fillStyle = "#00ff41";
              context.font = '12px "Courier New", monospace';
              context.textAlign = "center";
              context.fillText(
                codeSymbols[Math.floor(Math.random() * codeSymbols.length)],
                64,
                32
              );

              element.sprite.material.map = new THREE.CanvasTexture(canvas);
            }
          }

          // Pulsing opacity
          element.sprite.material.opacity =
            element.opacity + Math.sin(time * 3 + index) * 0.2;
        });
      }

      // Animate binary background
      binaryGroup.rotation.z += 0.0002;

      // Glitch effect occasionally
      if (Math.random() < 0.01) {
        camera.position.x += (Math.random() - 0.5) * 0.02;
        camera.position.y += (Math.random() - 0.5) * 0.02;
        setTimeout(() => {
          camera.position.x = 0;
          camera.position.y = 0;
        }, 50);
      }

      renderer.render(scene, camera);
    };

    // Event listeners
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    // Start animation
    animate();

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      if (currentMount && renderer.domElement) {
        currentMount.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{
        background: "transparent",
      }}
    />
  );
};

export default InteractiveBackground;
