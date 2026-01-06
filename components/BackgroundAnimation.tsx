import React, { useRef, useEffect, useState, useCallback } from 'react';

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
    },
    [],
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