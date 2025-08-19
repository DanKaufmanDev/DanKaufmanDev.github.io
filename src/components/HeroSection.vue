<template>
  <section class="hero-section">
    <div class="hero-content">
      <h1 class="hero-title is-pb-[5rem]"></h1>
      <p class="hero-subtitle is-pt-[5rem]">Full-Stack Developer | Creative Technologist</p>
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
  margin-bottom: 2rem;
}

.hero-cta {
  display: inline-block;
  padding: 1rem 2rem;
  background-color: transparent;
  border: 2px solid white;
  color: white;
  text-decoration: none;
  font-weight: 700;
  border-radius: 5px;
  transition: background-color 0.3s, color 0.3s;
}

.hero-cta:hover {
  background-color: white;
  color: #0a0e1a;
}
</style>
