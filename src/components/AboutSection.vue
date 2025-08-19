<template>
  <section id="about" class="about-section">
    <div class="about-content">
      <div class="about-text">
        <h2 class="about-title">About Me</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
      <div class="about-image">
        <img src="https://placehold.co/300" alt="Dan Kaufman">
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
  gap: 4rem;
  align-items: center;
  max-width: 1280px;
  margin: 0 auto;
}

.about-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.about-image img {
  max-width: 100%;
  border-radius: 10px;
}

@media (max-width: 768px) {
  .about-content {
    grid-template-columns: 1fr;
  }
}
</style>
