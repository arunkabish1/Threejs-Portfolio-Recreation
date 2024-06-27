import { useEffect, useRef } from "react";
import * as THREE from "three";

const ComputersCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    let renderer, scene, camera;
    let animationFrameId;

    const init = () => {
      renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.z = 5;

      // Example geometry
      const geometry = new THREE.BoxGeometry();
      const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
      const cube = new THREE.Mesh(geometry, material);

      scene.add(cube);

      // Debugging: Check geometry attributes
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

      const animate = () => {
        animationFrameId = requestAnimationFrame(animate);
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        renderer.render(scene, camera);
      };

      animate();
    };

    init();

    return () => {
      if (renderer) {
        renderer.dispose();
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} />;
};

export default ComputersCanvas;
