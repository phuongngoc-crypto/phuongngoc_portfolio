/**
 * Magical Night Sky & Golden Stardust Particle System
 * Creates floating golden dust, twinkling stars, and mystical embers
 */

(function () {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  const particles = [];
  const particleCount = Math.min(Math.floor(width * 0.08), 85); // Responsive density

  const mouse = {
    x: width / 2,
    y: height / 2,
    radius: 120
  };

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  class Particle {
    constructor() {
      this.reset(true);
    }

    reset(initial = false) {
      this.x = Math.random() * width;
      this.y = initial ? Math.random() * height : height + 10;
      this.size = Math.random() * 2.2 + 0.6; // Golden ember size
      this.speedY = Math.random() * 0.6 + 0.15; // Floating upwards like enchanted embers
      this.speedX = (Math.random() - 0.5) * 0.4;
      this.opacity = Math.random() * 0.6 + 0.2;
      this.pulseSpeed = Math.random() * 0.02 + 0.005;
      this.pulse = Math.random() * Math.PI;
      // Palette: glowing gold, antique brass, mystical white star
      const hues = [
        'rgba(255, 215, 0, ',   // Pure Gold
        'rgba(212, 175, 55, ',  // Antique Brass
        'rgba(255, 248, 220, ', // Starlight
        'rgba(238, 187, 85, '   // Warm Amber
      ];
      this.colorBase = hues[Math.floor(Math.random() * hues.length)];
    }

    update() {
      this.y -= this.speedY;
      this.x += this.speedX;
      this.pulse += this.pulseSpeed;

      // Mouse gentle repulsion/deflection
      const dx = mouse.x - this.x;
      const dy = mouse.y - this.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < mouse.radius) {
        const force = (mouse.radius - dist) / mouse.radius;
        this.x -= (dx / dist) * force * 1.5;
        this.y -= (dy / dist) * force * 1.5;
      }

      // Reset when particle floats off the top or sides
      if (this.y < -10 || this.x < -10 || this.x > width + 10) {
        this.reset(false);
      }
    }

    draw() {
      const currentOpacity = Math.max(0.05, this.opacity * (0.6 + 0.4 * Math.sin(this.pulse)));
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = this.colorBase + currentOpacity + ')';
      ctx.shadowBlur = this.size > 1.8 ? 10 : 4;
      ctx.shadowColor = '#ffd700';
      ctx.fill();
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);
    particles.forEach((p) => {
      p.update();
      p.draw();
    });
    requestAnimationFrame(animate);
  }

  animate();
})();
