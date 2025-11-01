import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const LiquidEther = ({
  colors = ['#5227FF', '#FF9FFC', '#B19EEF'],
  mouseForce = 20,
  cursorSize = 100,
  autoDemo = true,
  autoSpeed = 0.5,
  autoIntensity = 2.2,
}) => {
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setClearColor(0x000000, 0);
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Create liquid blobs
    const blobs = [];
    colors.forEach((color, index) => {
      const geometry = new THREE.SphereGeometry(1, 32, 32);
      const material = new THREE.MeshBasicMaterial({
        color: new THREE.Color(color),
        transparent: true,
        opacity: 0.6,
      });
      const blob = new THREE.Mesh(geometry, material);
      
      // Position blobs
      const angle = (index / colors.length) * Math.PI * 2;
      blob.position.x = Math.cos(angle) * 2;
      blob.position.y = Math.sin(angle) * 2;
      blob.userData.angle = angle;
      blob.userData.speed = 0.5 + Math.random() * 0.5;
      
      scene.add(blob);
      blobs.push(blob);
    });

    // Mouse move handler
    const handleMouseMove = (event) => {
      const rect = containerRef.current.getBoundingClientRect();
      mouseRef.current.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouseRef.current.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    };

    // Animation loop
    let time = 0;
    const animate = () => {
      requestAnimationFrame(animate);
      time += 0.01 * autoSpeed;

      blobs.forEach((blob, index) => {
        if (autoDemo) {
          // Auto animation
          const angle = blob.userData.angle + time * blob.userData.speed;
          blob.position.x = Math.cos(angle) * (2 + Math.sin(time * 0.5) * 0.5);
          blob.position.y = Math.sin(angle) * (2 + Math.cos(time * 0.5) * 0.5);
          blob.position.z = Math.sin(time + index) * 0.5;
          
          // Pulsating effect
          const scale = 1 + Math.sin(time * 2 + index) * 0.2 * autoIntensity;
          blob.scale.set(scale, scale, scale);
        }

        // Mouse interaction
        const dx = mouseRef.current.x * 5 - blob.position.x;
        const dy = mouseRef.current.y * 5 - blob.position.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < cursorSize / 50) {
          blob.position.x += dx * 0.01 * (mouseForce / 20);
          blob.position.y += dy * 0.01 * (mouseForce / 20);
        }

        // Rotation
        blob.rotation.x += 0.005;
        blob.rotation.y += 0.005;
      });

      renderer.render(scene, camera);
    };

    animate();

    // Event listeners
    window.addEventListener('mousemove', handleMouseMove);

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current) return;
      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      blobs.forEach(blob => {
        blob.geometry.dispose();
        blob.material.dispose();
      });
      renderer.dispose();
    };
  }, [colors, mouseForce, cursorSize, autoDemo, autoSpeed, autoIntensity]);

  return (
    <div
      ref={containerRef}
      style={{
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
      }}
    />
  );
};

export default LiquidEther;
