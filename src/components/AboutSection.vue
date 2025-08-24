<template>
  <section id="about" class="about-section">
    <div class="about-content">
      <div class="about-text">
        <h2 class="about-title">About Me</h2>
        <p>I'm a software developer who's passionate about building clean, responsive, and user-friendly apps. I work with technologies like HTML, CSS, JavaScript, Typescript, React, Vue, Tailwind, Python, Node.js. Blending strong UI/UX with scalable, maintainable backend. I care deeply about good design, clean code, and building meaningful experiences that perform well and feel great to use.</p>
      </div>
      <div class="about-image">
        <img src="https://avatars.githubusercontent.com/u/47069556?v=4" alt="Dan Kaufman">
      </div>
      <h2 class="skills-title">Skills</h2>
      <div class="language-icons">
        <i class="if-html is-border-[1.5px] is-p-4 is-rounded-2xl" title="HTML5"></i>
        <i class="if-javascript is-border-[1.5px] is-p-4 is-rounded-2xl" title="JavaScript"></i>
        <i class="if-typescript is-border-[1.5px] is-p-4 is-rounded-2xl" title="TypeScript"></i>
        <i class="if-vuejs is-border-[1.5px] is-p-4 is-rounded-2xl" title="Vue.js"></i>
        <i class="if-react is-border-[1.5px] is-p-4 is-rounded-2xl" title="React"></i>
        <i class="if-python is-border-[1.5px] is-p-4 is-rounded-2xl" title="Python"></i>
        <i class="if-nodejs is-border-[1.5px] is-p-4 is-rounded-2xl" title="Node.js"></i>
        <i class="if-tailwindcss is-border-[1.5px] is-p-4 is-rounded-2xl" title="TailwindCSS"></i>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-section {
  padding: 4rem 2rem;
  color: white;
}

.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: center;
  justify-items: center;
  max-width: 1280px;
  margin: 0 auto;
  background-color: rgba(16, 18, 27, 0.25);
  backdrop-filter: blur(2px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.05);
  border-radius: 32px;
  padding: 4rem;
  animation: pulse-glow 3s infinite ease-in-out;
}

.about-text {
  text-align: left;
  font-weight: 200;
  font-size: 1.25rem;
}

.about-title {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.skills-title {
  grid-column: 1 / -1;
  font-size: 2.25rem;
  font-weight: 600;
  margin-top: 2rem;
  margin-bottom: 1rem;
}

.about-image img {
  max-width: 100%;
  border-radius: 50%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
}

.language-icons {
  grid-column: 1 / -1;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
}

.language-icons i {
  font-size: 2.5rem;
  color: #e2e8f0;
  transition: color 0.3s ease, text-shadow 0.3s ease;
}

.language-icons i:hover {
  color: #fff;
  text-shadow: 0 0 15px rgba(255, 255, 255, 0.3);
}

@keyframes pulse-glow {
    0%,100% {
        box-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
    }
    50% {
        box-shadow: 0 0 30px rgba(255, 255, 255, 0.2);
    }
}

@media (max-width: 768px) {
  .about-content {
    grid-template-columns: 1fr;
    padding: 2rem;
    gap: 2rem;
  }

  .language-icons {
    flex-wrap: wrap;
    gap: 1rem;
    margin-top: 1rem;
  }

  .skills-title {
    margin-top: 1rem;
  }
}
</style>