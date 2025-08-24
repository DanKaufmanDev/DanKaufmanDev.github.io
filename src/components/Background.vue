<template>
  <div class="is-fixed-bg is-bg-coal-10">
    <canvas ref="canvas"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const canvas = ref(null);

let handleScroll = () => {};

onMounted(() => {
  const ctx = canvas.value.getContext('2d', { willReadFrequently: true });
  canvas.value.width = window.innerWidth;
  canvas.value.height = window.innerHeight;

  let particles = [];
  let mouse = {
    x: undefined,
    y: undefined,
    radius: 150
  }
  let animationState = 'text';

  window.addEventListener('mousemove', (event) => {
    mouse.x = event.x;
    mouse.y = event.y;
  });

  class Particle {
    constructor(x, y) {
      this.x = Math.random() * canvas.value.width;
      this.y = Math.random() * canvas.value.height;
      this.size = 2;
      this.baseX = x;
      this.baseY = y;
      this.density = (Math.random() * 40) + 5;
      this.vx = 0;
      this.vy = 0;
      this.targetVx = Math.random() * 1 - 0.5;
      this.targetVy = Math.random() * 1 - 0.5;
    }

    update() {
      if (animationState === 'text') {
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        let forceDirectionX = dx / distance;
        let forceDirectionY = dy / distance;
        let maxDistance = mouse.radius;
        let force = (maxDistance - distance) / maxDistance;
        let directionX = forceDirectionX * force * this.density;
        let directionY = forceDirectionY * force * this.density;

        if (distance < mouse.radius) {
          this.x -= directionX;
          this.y -= directionY;
        } else {
          if (this.x !== this.baseX) {
            let dx = this.x - this.baseX;
            this.x -= dx / 10;
          }
          if (this.y !== this.baseY) {
            let dy = this.y - this.baseY;
            this.y -= dy / 10;
          }
        }
      } else {
        this.vx += (this.targetVx - this.vx) * 0.05;
        this.vy += (this.targetVy - this.vy) * 0.05;

        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.value.width) {
            this.vx *= -1;
            this.targetVx *= -1;
        }
        if (this.y < 0 || this.y > canvas.value.height) {
            this.vy *= -1;
            this.targetVy *= -1;
        }
      }
    }

    draw() {
      if (animationState === 'text') {
        ctx.fillStyle = 'white';
      } else {
        ctx.fillStyle = 'rgba(255, 255, 255, 0.25)';
      }
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.closePath();
      ctx.fill();
    }
  }

  function initTextParticles() {
    particles = [];
    ctx.clearRect(0, 0, canvas.value.width, canvas.value.height);
    ctx.fillStyle = 'white';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    const isMobile = window.innerWidth < 768;

    if (isMobile) {
      ctx.font = 'bold 4rem sans-serif';
      const lineHeight = 64;
      ctx.fillText('Dan', canvas.value.width / 2, canvas.value.height / 2 - lineHeight / 2);
      ctx.fillText('Kaufman', canvas.value.width / 2, canvas.value.height / 2 + lineHeight / 2);
    } else {
      ctx.font = 'bold 5rem sans-serif';
      ctx.fillText('Dan Kaufman', canvas.value.width / 2, canvas.value.height / 2);
    }

    const textCoordinates = ctx.getImageData(0, 0, canvas.value.width, canvas.value.height);
    const gap = isMobile ? 7 : 5;
    for (let y = 0; y < textCoordinates.height; y += gap) {
      for (let x = 0; x < textCoordinates.width; x += gap) {
        if (textCoordinates.data[(y * 4 * textCoordinates.width) + (x * 4) + 3] > 128) {
          particles.push(new Particle(x, y));
        }
      }
    }
  }

  function initNetworkParticles(count) {
    particles = [];
    const particleCount = count || 50;
    for (let i = 0; i < particleCount; i++) {
        const p = new Particle(Math.random() * canvas.value.width, Math.random() * canvas.value.height);
        p.vx = p.targetVx;
        p.vy = p.targetVy;
        particles.push(p);
    }
  }

  function connect() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 100) {
          ctx.strokeStyle = `rgba(255, 255, 255, ${1 - distance / 100})`;
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.value.width, canvas.value.height);
    particles.forEach(p => {
      p.update();
      p.draw();
    });
    if (animationState === 'network') {
      connect();
    }
    requestAnimationFrame(animate);
  }

  handleScroll = () => {
    if (window.scrollY > 10 && animationState === 'text') {
      animationState = 'network';
      particles.forEach(p => {
          p.vx = Math.random() * 8 - 4;
          p.vy = Math.random() * 8 - 4;
      });

      const isMobile = window.innerWidth < 768;
      const targetParticleCount = isMobile ? 60 : 100;

      if (particles.length > targetParticleCount) {
          const reductionTimer = setInterval(() => {
              if (particles.length <= targetParticleCount) {
                  clearInterval(reductionTimer);
                  return;
              }
              const toRemoveCount = Math.max(1, Math.floor((particles.length - targetParticleCount) * 0.05));
              for (let i = 0; i < toRemoveCount; i++) {
                  if (particles.length > targetParticleCount) {
                      const randomIndex = Math.floor(Math.random() * particles.length);
                      particles.splice(randomIndex, 1);
                  }
              }
          }, 16);
      }
      window.removeEventListener('scroll', handleScroll);
    }
  };

  window.addEventListener('scroll', handleScroll);

  initTextParticles();
  animate();

  window.addEventListener('resize', () => {
    canvas.value.width = window.innerWidth;
    canvas.value.height = window.innerHeight;
    if (animationState === 'text') {
        initTextParticles();
    } else {
        initNetworkParticles(particles.length);
    }
  });

});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
canvas {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}
</style>