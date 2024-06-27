import { useEffect, useRef } from "react";
import * as THREE from "three";

const ComputersCanvas = () => {
  const canvasRef = useRef(null);
  let renderer, scene, camera;
  let animationFrameId;

  useEffect(() => {
    const init = () => {
      // Initialize Three.js components
      renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });
      renderer.setSize(window.innerWidth, window.innerHeight); // Set initial size

      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.z = 5;

      const geometry = new THREE.BoxGeometry();
      const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
      const cube = new THREE.Mesh(geometry, material);
      scene.add(cube);

      // Debugging: Check geometry attributes for NaN
      if (geometry.attributes.position.array.some(isNaN)) {
        console.error("Position attribute contains NaN values:", geometry.attributes.position.array);
      }

      // Handle context loss
      renderer.domElement.addEventListener("webglcontextlost", (event) => {
        event.preventDefault();
        console.error("WebGL context lost");
        cancelAnimationFrame(animationFrameId);
      });

      renderer.domElement.addEventListener("webglcontextrestored", init);

      // Animation loop
      const animate = () => {
        animationFrameId = requestAnimationFrame(animate);
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        renderer.render(scene, camera);
      };

      animate();
    };

    // Initialize Three.js on mount
    init();

    // Cleanup function
    return () => {
      // Dispose of renderer and clean up animation frame
      if (renderer) {
        renderer.dispose();
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, []); // Empty dependency array ensures useEffect runs only on mount and unmount

  // Return canvas element
  return <canvas ref={canvasRef} />;
};

export default ComputersCanvas;
