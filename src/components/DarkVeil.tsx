"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

interface DarkVeilProps {
  baseColor?: string;
  veilColor?: string;
  speed?: number;
  intensity?: number;
}

const DarkVeil: React.FC<DarkVeilProps> = ({
  baseColor = "#050505",
  veilColor = "#5227FF",
  speed = 0.5,
  intensity = 1.0,
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
    
    const uBaseColor = new THREE.Color(baseColor);
    const uVeilColor = new THREE.Color(veilColor);

    const geometry = new THREE.PlaneGeometry(2, 2);
    const material = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uResolution: { value: new THREE.Vector2() },
        uBaseColor: { value: uBaseColor },
        uVeilColor: { value: uVeilColor },
        uSpeed: { value: speed },
        uIntensity: { value: intensity },
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
        uniform vec2 uResolution;
        uniform vec3 uBaseColor;
        uniform vec3 uVeilColor;
        uniform float uSpeed;
        uniform float uIntensity;
        varying vec2 vUv;

        // Simplex 2D noise
        vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }
        float snoise(vec2 v){
          const vec4 C = vec4(0.211324865405187, 0.366025403784439,
                   -0.577350269189626, 0.024390243902439);
          vec2 i  = floor(v + dot(v, C.yy) );
          vec2 x0 = v -   i + dot(i, C.xx);
          vec2 i1;
          i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
          vec4 x12 = x0.xyxy + C.xxzz;
          x12.xy -= i1;
          i = mod(i, 289.0);
          vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
          + i.x + vec3(0.0, i1.x, 1.0 ));
          vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy),
            dot(x12.zw,x12.zw)), 0.0);
          m = m*m ;
          m = m*m ;
          vec3 x = 2.0 * fract(p * C.www) - 1.0;
          vec3 h = abs(x) - 0.5;
          vec3 a0 = x - floor(x + 0.5);
          float m0 = 1.0 - 0.5*(a0.x*a0.x + h.x*h.x);
          float m1 = 1.0 - 0.5*(a0.y*a0.y + h.y*h.y);
          float m2 = 1.0 - 0.5*(a0.z*a0.z + h.z*h.z);
          vec3 g = a0 * vec3(m0, m1, m2) + h * vec3(1.0-m0, 1.0-m1, 1.0-m2);
          vec3 l = vec3(dot(x0,g.xy), dot(x12.xy,g.yz), dot(x12.zw,g.zx));
          return 130.0 * dot(m, l);
        }

        void main() {
          vec2 uv = vUv;
          float time = uTime * uSpeed;
          
          float n1 = snoise(uv * 1.5 + time * 0.2) * 0.5 + 0.5;
          float n2 = snoise(uv * 2.5 - time * 0.15) * 0.5 + 0.5;
          float n3 = snoise(vec2(uv.y, uv.x) * 1.0 + time * 0.1) * 0.5 + 0.5;
          
          float veil = smoothstep(0.3, 0.7, n1 * n2 + n3 * 0.3);
          veil *= uIntensity;
          
          // Add a subtle gradient
          float grad = 1.0 - distance(uv, vec2(0.5)) * 0.5;
          
          vec3 color = mix(uBaseColor, uVeilColor, veil * grad);
          
          // Deepen the blacks
          color = pow(color, vec3(1.2));
          
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
      renderer.setSize(clientWidth, clientHeight, false);
      material.uniforms.uResolution.value.set(clientWidth, clientHeight);
    };

    window.addEventListener("resize", resize);
    resize();

    const animate = (time: number) => {
      material.uniforms.uTime.value = time / 1000;
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    const animId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animId);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
    };
  }, [baseColor, veilColor, speed, intensity]);

  return (
    <div ref={containerRef} className="absolute inset-0 w-full h-full pointer-events-none">
      <canvas ref={canvasRef} className="w-full h-full opacity-60" />
    </div>
  );
};

export default DarkVeil;