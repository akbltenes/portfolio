import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";

const FloatingObject3D = ({ className = "" }) => {
  const mountRef = useRef(null);
  const meshRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });

    const size = Math.min(
      currentMount.clientWidth,
      currentMount.clientHeight,
      400
    );
    renderer.setSize(size, size);
    renderer.setClearColor(0x000000, 0);
    currentMount.appendChild(renderer.domElement);

    // Create geometry - Icosahedron (modern geometric shape)
    const geometry = new THREE.IcosahedronGeometry(1.5, 1);

    // Create wireframe geometry
    const wireframeGeometry = new THREE.WireframeGeometry(geometry);

    // Materials
    const material = new THREE.MeshPhongMaterial({
      color: 0x3b82f6,
      transparent: true,
      opacity: 0.8,
      shininess: 100,
    });

    const wireframeMaterial = new THREE.LineBasicMaterial({
      color: 0x60a5fa,
      transparent: true,
      opacity: 0.4,
    });

    // Create meshes
    const mesh = new THREE.Mesh(geometry, material);
    const wireframe = new THREE.LineSegments(
      wireframeGeometry,
      wireframeMaterial
    );

    // Group them together
    const group = new THREE.Group();
    group.add(mesh);
    group.add(wireframe);
    scene.add(group);
    meshRef.current = group;

    // Add lights
    const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    const pointLight = new THREE.PointLight(0x3b82f6, 0.8, 10);
    pointLight.position.set(-5, -5, 5);
    scene.add(pointLight);

    // Position camera
    camera.position.z = 5;

    // Mouse move handler
    const handleMouseMove = (event) => {
      const rect = currentMount.getBoundingClientRect();
      mouseRef.current.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouseRef.current.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    };

    // Resize handler
    const handleResize = () => {
      const newSize = Math.min(
        currentMount.clientWidth,
        currentMount.clientHeight,
        400
      );
      camera.aspect = 1;
      camera.updateProjectionMatrix();
      renderer.setSize(newSize, newSize);
    };

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      if (meshRef.current) {
        // Continuous rotation
        meshRef.current.rotation.x += 0.005;
        meshRef.current.rotation.y += 0.01;

        // Interactive mouse movement
        meshRef.current.rotation.x += mouseRef.current.y * 0.01;
        meshRef.current.rotation.y += mouseRef.current.x * 0.01;

        // Floating effect
        meshRef.current.position.y = Math.sin(Date.now() * 0.001) * 0.1;
      }

      renderer.render(scene, camera);
    };

    // Event listeners
    currentMount.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    // Start animation
    animate();
    setIsLoaded(true);

    // Cleanup
    return () => {
      currentMount.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      if (currentMount && renderer.domElement) {
        currentMount.removeChild(renderer.domElement);
      }
      renderer.dispose();
      geometry.dispose();
      wireframeGeometry.dispose();
      material.dispose();
      wireframeMaterial.dispose();
    };
  }, []);

  return (
    <div className={`relative ${className}`}>
      <div
        ref={mountRef}
        className={`w-80 h-80 md:w-96 md:h-96 mx-auto transition-opacity duration-1000 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        style={{
          filter: "drop-shadow(0 0 20px rgba(59, 130, 246, 0.3))",
        }}
      />
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
        </div>
      )}
    </div>
  );
};

export default FloatingObject3D;
