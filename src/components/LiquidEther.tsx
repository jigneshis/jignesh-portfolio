"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

interface LiquidEtherProps {
  colors?: string[];
  mouseForce?: number;
  cursorSize?: number;
  isViscous?: boolean;
  viscous?: number;
  resolution?: number;
  autoDemo?: boolean;
  autoSpeed?: number;
  autoIntensity?: number;
}

const LiquidEther: React.FC<LiquidEtherProps> = ({
  colors = ["#5227FF", "#7B5CFF", "#B19EEF"],
  mouseForce = 15,
  cursorSize = 90,
  isViscous = true,
  viscous = 30,
  resolution = 0.5,
  autoDemo = true,
  autoSpeed = 0.4,
  autoIntensity = 2,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    const canvas = canvasRef.current;
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
    });

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    
    const threeColors = colors.map(c => new THREE.Color(c));

    const geometry = new THREE.PlaneGeometry(2, 2);
    const material = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uMouse: { value: new THREE.Vector2(0, 0) },
        uResolution: { value: new THREE.Vector2() },
        uColor1: { value: threeColors[0] },
        uColor2: { value: threeColors[1] },
        uColor3: { value: threeColors[2] },
        uMouseForce: { value: mouseForce / 100 },
        uCursorSize: { value: cursorSize / 500 },
        uViscosity: { value: isViscous ? viscous / 100 : 0 },
        uAutoSpeed: { value: autoSpeed },
        uAutoIntensity: { value: autoIntensity / 10 },
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float uTime;
        uniform vec2 uMouse;
        uniform vec2 uResolution;
        uniform vec3 uColor1;
        uniform vec3 uColor2;
        uniform vec3 uColor3;
        uniform float uMouseForce;
        uniform float uCursorSize;
        uniform float uViscosity;
        uniform float uAutoSpeed;
        uniform float uAutoIntensity;
        varying vec2 vUv;

        void main() {
          vec2 uv = vUv;
          float aspect = uResolution.x / uResolution.y;
          vec2 mouse = uMouse;
          
          float dist = distance(vec2(uv.x * aspect, uv.y), vec2(mouse.x * aspect, mouse.y));
          float mouseEffect = smoothstep(uCursorSize, 0.0, dist) * uMouseForce;
          
          float time = uTime * uAutoSpeed;
          
          // Smoother flow without sharp noise
          vec2 flow = vec2(
            sin(uv.y * 2.0 + time) * uAutoIntensity,
            cos(uv.x * 2.0 + time) * uAutoIntensity
          );
          
          vec2 finalUv = uv + flow + (mouse - uv) * mouseEffect * (1.0 - uViscosity);
          
          // Ultra-smooth gradient blending
          float mix1 = sin(finalUv.x * 1.5 + finalUv.y * 1.0 + time) * 0.5 + 0.5;
          float mix2 = cos(finalUv.x * 1.0 - finalUv.y * 1.5 + time * 0.7) * 0.5 + 0.5;
          
          vec3 color = mix(uColor1, uColor2, mix1);
          color = mix(color, uColor3, mix2);
          
          // Soft ambient lighting effect
          color *= 0.9 + 0.1 * sin(finalUv.x * 5.0 + time);
          
          gl_FragColor = vec4(color, 1.0);
        }
      `,
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const resize = () => {
      const container = containerRef.current;
      if (!container) return;
      const { clientWidth, clientHeight } = container;
      renderer.setSize(clientWidth * resolution, clientHeight * resolution, false);
      material.uniforms.uResolution.value.set(clientWidth, clientHeight);
    };

    window.addEventListener("resize", resize);
    resize();

    const onMouseMove = (e: MouseEvent) => {
      const container = containerRef.current;
      if (!container) return;
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = 1.0 - (e.clientY - rect.top) / rect.height;
      material.uniforms.uMouse.value.set(x, y);
    };

    window.addEventListener("mousemove", onMouseMove);

    const animate = (time: number) => {
      material.uniforms.uTime.value = time / 1000;
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    const animId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animId);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
    };
  }, [colors, mouseForce, cursorSize, isViscous, viscous, resolution, autoSpeed, autoIntensity]);

  return (
    <div ref={containerRef} className="absolute inset-0 w-full h-full pointer-events-none">
      <canvas ref={canvasRef} className="w-full h-full opacity-70" />
    </div>
  );
};

export default LiquidEther;