// ThreeScene.js

import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

export default function ThreeScene() {
    const textureImage = require('../Images/Children.png');
    const sceneRef = useRef();

    useEffect(() => {
        // Set up Three.js scene
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();


        const widthPercentage = 20;
        const heightPercentage = 10;

        const initialWidth = (widthPercentage / 100) * window.innerWidth;
        const initialHeight = (heightPercentage / 100) * window.innerHeight;

        renderer.setSize(initialWidth, initialHeight);
        sceneRef.current.appendChild(renderer.domElement);

        // Create a plane with an image texture
        const textureLoader = new THREE.TextureLoader();
        const imageTexture = textureLoader.load(textureImage); // Replace with the path to your image
        const geometry = new THREE.PlaneGeometry(5, 5); // Adjust the size of the plane
        const material = new THREE.MeshBasicMaterial({ map: imageTexture });
        const plane = new THREE.Mesh(geometry, material);
        scene.add(plane);


        // Set up mouse movement
        const onMouseMove = (event) => {
            const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
            const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;

            plane.rotation.x = -mouseY;
            plane.rotation.y = mouseX;
        };

        window.addEventListener('mousemove', onMouseMove);

        // Set up animation
        const animate = () => {
            requestAnimationFrame(animate);

            // Perform any additional animations here

            renderer.render(scene, camera);
        };

        // Set up camera position
        camera.position.z = 5;

        // Start animation loop
        animate();

        // Clean up event listener on component unmount
        return () => {
            window.removeEventListener('mousemove', onMouseMove);
        };
    }, []); // Only run the effect once on mount

    return <div ref={sceneRef} style={{ width: "20%", backgroundColor: 'red', borderRadius: '50%' }} />;
};