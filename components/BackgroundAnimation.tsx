import React, { useRef, useEffect, useState, useCallback } from 'react';

// Using arbitrary values for CSS properties that Tailwind doesn't have direct utilities for
// or would require extensive configuration that falls outside the scope of single file generation.

export const BackgroundAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameId = useRef<number | null>(null);
  const [parallaxOffset, setParallaxOffset] = useState(0);
  const [numberOfParticles, setNumberOfParticles] = useState(100);

  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      setNumberOfParticles(window.innerWidth > 768 ? 100 : 60);
    }
  }, []);

  useEffect(() => {
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    const handleScroll = () => {
      setParallaxOffset(window.pageYOffset * 0.5);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('scroll', handleScroll);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [resizeCanvas]);

  class Particle {
    x: number;
    y: number;
    size: number;
    speedX: number;
    speedY: number;
    brightness: number;

    constructor(canvas: HTMLCanvasElement) {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height * 0.4;
      this.size = Math.random() * 3 + 1;
      this.speedX = Math.random() * 0.5 - 0.25;
      this.speedY = Math.random() * 0.3 - 0.15;
      this.brightness = Math.random() * 0.05; // Reduced brightness range
    }

    update(canvas: HTMLCanvasElement) {
      this.x += this.speedX;
      this.y += this.speedY;
      if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
      if (this.y > canvas.height || this.y < 0) this.speedY *= -1;
    }

    draw(ctx: CanvasRenderingContext2D) {
      ctx.fillStyle = `rgba(0,255,255,${0.05 + this.brightness})`; // Reduced base opacity
      ctx.shadowBlur = 4; // Reduced shadow blur
      ctx.shadowColor = 'rgba(0,255,255,0.05)'; // Reduced shadow color
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  const particlesArray = useRef<Particle[]>([]);

  const initParticles = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    particlesArray.current = [];
    for (let i = 0; i < numberOfParticles; i++) {
      particlesArray.current.push(new Particle(canvas));
    }
  }, [numberOfParticles]);

  // drawMountainLayer function is no longer used, but kept for reference if needed in the future.
  const drawMountainLayer = useCallback(
    (
      ctx: CanvasRenderingContext2D,
      canvas: HTMLCanvasElement,
      offset: number,
      color: string,
      lineWidth: number,
      baseYRatio: number,
      amp: number,
      shadowColor: string,
    ) => {
      const baseY = canvas.height * baseYRatio;
      ctx.strokeStyle = color;
      ctx.lineWidth = lineWidth;
      ctx.shadowBlur = 15 + lineWidth * 3;
      ctx.shadowColor = shadowColor;

      const numPoints = 14;
      ctx.beginPath();
      ctx.moveTo(-100, canvas.height);

      for (let i = 0; i <= numPoints; i++) {
        const progress = i / numPoints;
        const centerDist = Math.abs(progress - 0.5);
        let sideHeight = centerDist * 2.4;
        sideHeight = Math.pow(sideHeight, 1.3);
        sideHeight += Math.sin(progress * Math.PI * 4) * 0.2;
        const y = baseY - amp * sideHeight + Math.sin(progress * 8 + offset) * 15;
        ctx.lineTo(progress * canvas.width - offset * 0.5, y);
      }

      ctx.lineTo(canvas.width + 100, canvas.height);
      ctx.lineTo(-100, canvas.height);
      ctx.closePath();
      ctx.stroke();

      ctx.lineWidth = lineWidth * 0.6;
      for (let i = 1; i < numPoints; i += 2) {
        const progress = i / numPoints;
        const x = progress * canvas.width - offset * 0.5;
        const centerDist = Math.abs(progress - 0.5);
        let sideHeight = centerDist * 2.4;
        sideHeight = Math.pow(sideHeight, 1.3);
        sideHeight += Math.sin(progress * Math.PI * 4) * 0.2;
        const peakY = baseY - amp * sideHeight + Math.sin(progress * 8 + offset) * 15;

        ctx.beginPath();
        ctx.moveTo(x, peakY);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
    },
    [],
  );

  const drawLake = useCallback(
    (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, offset: number) => {
      const lakeTop = canvas.height * 0.68;

      const waterGrad = ctx.createLinearGradient(0, lakeTop, 0, canvas.height);
      waterGrad.addColorStop(0, 'rgba(0,120,120,0.05)'); // Reduced opacity and brightness
      waterGrad.addColorStop(1, 'rgba(0,15,30,0.6)'); // Reduced brightness, slightly less opaque
      ctx.fillStyle = waterGrad;
      ctx.fillRect(0, lakeTop - 40, canvas.width, canvas.height - lakeTop + 80);

      ctx.strokeStyle = 'rgba(0,204,204,0.1)'; // Reduced opacity and brightness
      ctx.lineWidth = 2; // Reduced line width
      ctx.shadowBlur = 8; // Reduced shadow blur
      ctx.shadowColor = 'rgba(0,204,204,0.05)'; // Reduced shadow color
      ctx.beginPath();
      const waveAmp = 12;
      ctx.moveTo(0, lakeTop);
      for (let x = 0; x <= canvas.width; x += 10) {
        const y = lakeTop + Math.sin(x * 0.008 + offset * 0.05) * waveAmp;
        ctx.lineTo(x, y);
      }
      ctx.stroke();

      // Removed mountain reflection
    },
    [], // drawMountainLayer is no longer a dependency here
  );

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const skyGrad = ctx.createLinearGradient(0, 0, 0, canvas.height);
    skyGrad.addColorStop(0, '#010203'); // Darkened
    skyGrad.addColorStop(0.4, '#000102'); // Darkened
    skyGrad.addColorStop(1, '#000000'); // Darkened
    ctx.fillStyle = skyGrad;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Removed mountain layers
    // drawMountainLayer(ctx, canvas, parallaxOffset * 0.1, '#00cccc20', 1, 0.75, 100, '#00cccc');
    // drawMountainLayer(ctx, canvas, parallaxOffset * 0.3, '#00cccc40', 2, 0.58, 160, '#00cccc');
    // drawMountainLayer(ctx, canvas, parallaxOffset * 0.6, '#00cccc70', 3, 0.45, 220, '#00cccc');

    drawLake(ctx, canvas, parallaxOffset);

    particlesArray.current.forEach((p) => {
      p.update(canvas);
      p.draw(ctx);
    });

    animationFrameId.current = requestAnimationFrame(animate);
  }, [parallaxOffset, drawLake]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    initParticles();
    animationFrameId.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [initParticles, animate]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <canvas id="background" ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"></canvas>
  );
};