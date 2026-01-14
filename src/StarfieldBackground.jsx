import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';

// ============================================
// ANIMATED STARS WITH SLOW ROTATION
// ============================================
const AnimatedStars = () => {
    const starsRef = useRef();

    useFrame((state, delta) => {
        if (starsRef.current) {
            starsRef.current.rotation.x += delta * 0.015;
            starsRef.current.rotation.y += delta * 0.008;
        }
    });

    return (
        <Stars
            ref={starsRef}
            radius={100}
            depth={50}
            count={3000}
            factor={4}
            saturation={0}
            fade
            speed={1}
        />
    );
};

// ============================================
// THREE.JS SCENE CONTENT
// ============================================
const SceneContent = () => {
    return (
        <>
            <ambientLight intensity={0.1} />
            <AnimatedStars />
        </>
    );
};

// ============================================
// ERROR BOUNDARY FOR THREE.JS
// ============================================
class ThreeErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.error('Three.js Error:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div
                    className="fixed inset-0 z-0 pointer-events-none"
                    style={{
                        background: 'radial-gradient(ellipse at center, #0a0a1a 0%, #050505 100%)',
                    }}
                />
            );
        }
        return this.props.children;
    }
}

// ============================================
// MAIN STARFIELD BACKGROUND COMPONENT
// ============================================
const StarfieldBackground = () => {
    return (
        <ThreeErrorBoundary>
            <div className="three-canvas">
                <Canvas
                    camera={{ position: [0, 0, 1], fov: 60 }}
                    gl={{
                        antialias: true,
                        alpha: true,
                        powerPreference: 'default',
                        failIfMajorPerformanceCaveat: false
                    }}
                    style={{ background: 'transparent' }}
                    dpr={1}
                >
                    <Suspense fallback={null}>
                        <SceneContent />
                    </Suspense>
                </Canvas>
            </div>

            <div
                className="three-fallback fixed inset-0 z-0 pointer-events-none"
                aria-hidden="true"
            />
        </ThreeErrorBoundary>
    );
};

export default StarfieldBackground;

