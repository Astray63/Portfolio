import React, { useEffect, useRef } from 'react';

const MatrixRain: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationIdRef = useRef<number | null>(null); // Stocke l'ID de l'animation
  const dropsRef = useRef<number[]>([]); // Stocke les gouttes pour éviter de les réinitialiser
  const dimensionsRef = useRef({ width: window.innerWidth, height: window.innerHeight }); // Stocke les dimensions actuelles

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const fontSize = 14;
    const binary = '01';
    const speed = 0.5; // Contrôle la vitesse de la pluie

    // Initialisation des dimensions
    let { width, height } = dimensionsRef.current;
    canvas.width = width;
    canvas.height = height;

    let columns = Math.ceil(width / fontSize); // Utilisation de `Math.ceil` pour garantir que toute la largeur est couverte

    // Initialiser les gouttes si nécessaire
    if (dropsRef.current.length === 0) {
      dropsRef.current = new Array(columns).fill(1);
    }

    const drops = dropsRef.current;

    const draw = () => {
      ctx.fillStyle = 'rgba(10, 25, 47, 0.05)';
      ctx.fillRect(0, 0, width, height);

      ctx.fillStyle = '#64FFDA';
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const char = binary[Math.floor(Math.random() * binary.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        ctx.fillText(char, x, y);

        if (y > height && Math.random() > 0.975) {
          drops[i] = 0; // Réinitialisation de la goutte
        }

        drops[i] += speed;
      }

      animationIdRef.current = requestAnimationFrame(draw);
    };

    const handleResize = () => {
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;

      // Ajuster uniquement si les dimensions changent réellement
      if (newWidth !== dimensionsRef.current.width || newHeight !== dimensionsRef.current.height) {
        dimensionsRef.current = { width: newWidth, height: newHeight };
        canvas.width = newWidth;
        canvas.height = newHeight;

        // Ajuster les colonnes sans réinitialiser complètement
        const newColumns = Math.ceil(newWidth / fontSize);
        if (newColumns > drops.length) {
          drops.push(...new Array(newColumns - drops.length).fill(1));
        } else if (newColumns < drops.length) {
          drops.splice(newColumns);
        }
      }
    };

    window.addEventListener('resize', handleResize);
    draw();

    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none opacity-10"
      style={{ zIndex: 0 }}
    />
  );
};

export default MatrixRain;
