import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Edges } from '@react-three/drei';

function CubeMesh({ rotationSpeed = 0.01, size = 1 }) {
    const meshRef = useRef();

    // Har frame par rotate karne ke liye logic
    useFrame((state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.x += rotationSpeed;
            meshRef.current.rotation.y += rotationSpeed;
        }
    });

    return (
        <mesh ref={meshRef}>
            {/* Box Geometry: Ye cube ki shape hai */}
            <boxGeometry args={[size, size, size]} />

            {/* MeshBasicMaterial: Transparent rakha hai taki sirf edges dikhein */}
            <meshBasicMaterial transparent opacity={0} />

            {/* Edges: Ye wireframe look deta hai jaisa image mein hai */}
            <Edges
                threshold={15} // Kitne angle par line dikhegi
                color="#00f0ff" // Neon Cyan color
                className="glow"
            />
        </mesh>
    );
}

const HeroCube = ({ className, size, speed }) => {
    return (
        <div className={className} style={{ pointerEvents: 'none' }}>
            <Canvas camera={{ position: [0, 0, 3] }}>
                <ambientLight intensity={0.5} />
                <CubeMesh size={size} rotationSpeed={speed} />
            </Canvas>
        </div>
    );
};

export default HeroCube;