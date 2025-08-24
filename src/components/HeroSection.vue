<template>
  <section class="hero-section">
    <div class="hero-content">
      <h1 class="hero-title is-pb-[6rem]"></h1>
      <p class="hero-subtitle is-pt-[6rem]">Software Developer | Creative Engineering</p>
      <a href="#projects" class="hero-cta">View My Work</a>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 95dvh;
  text-align: center;
  color: white;
  position: relative;
  overflow: hidden;
}

.hero-content {
  z-index: 1;
}

.hero-subtitle {
  font-size: 1.5rem;
  font-weight: 300;
  margin-bottom: 1rem;
}

.hero-cta {
  display: inline-block;
  padding: 1rem 1.5rem;
  background-color: rgba(16, 18, 27, 0.7);
  backdrop-filter: blur(2px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.1);
  animation: pulse-glow 3s infinite ease-in-out;
  color: white;
  text-decoration: none;
  font-weight: 300;
  border-radius: 999px;
  transition: all 0.3s ease;
}

.hero-cta:hover {
  background-color: rgba(200, 200, 200, 0.1);
}

@keyframes pulse-glow {
    0%,100% {
        box-shadow: 0 0 15px rgba(255, 255, 255, 0.1);
    }
    50% {
        box-shadow: 0 0 25px rgba(255, 255, 255, 0.2);
    }
}
</style>
