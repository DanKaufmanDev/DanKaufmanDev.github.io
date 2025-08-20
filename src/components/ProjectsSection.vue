<template>
  <section id="projects" class="projects-section">
    <h2 class="projects-title">My Projects</h2>
    <div class="projects-grid">
      <!-- Project 1 -->
      <div class="project-card">
        <img src="../assets/IconForgeScreenshot.webp" alt="Project 1" class="project-image">
        <div class="project-content">
          <h3 class="project-title">IconForge</h3>
          <p class="project-description">A brief description of the first project. Highlighting the technologies used and the problems solved.</p>
          <div class="project-links">
            <a href="#" class="project-link">Live<i class="if-link is-ml-2"></i></a>
            <a href="#" class="project-link">Code<i class="if-github is-ml-2"></i></a>
          </div>
        </div>
      </div>

      <!-- Project 2 -->
      <div class="project-card">
        <img src="../assets/ChiptunedScreenshot.webp" alt="Project 2" class="project-image">
        <div class="project-content">
          <h3 class="project-title">Chiptuned</h3>
          <p class="project-description">A brief description of the second project. Highlighting the technologies used and the problems solved.</p>
          <div class="project-links">
            <a href="#" class="project-link">Live<i class="if-link is-ml-2"></i></a>
            <a href="#" class="project-link">Code<i class="if-github is-ml-2"></i></a>
          </div>
        </div>
      </div>

      <!-- Project 3 -->
      <div class="project-card">
        <img src="https://placehold.co/400x250" alt="Project 3" class="project-image">
        <div class="project-content">
          <h3 class="project-title">Promptly</h3>
          <p class="project-description">A brief description of the third project. Highlighting the technologies used and the problems solved.</p>
          <div class="project-links">
            <a href="#" class="project-link">Live<i class="if-link is-ml-2"></i></a>
            <a href="#" class="project-link">Code<i class="if-github is-ml-2"></i></a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects-section {
  padding: 4rem 2rem;
  color: white;
  text-align: center;
}

.projects-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1280px;
  margin: 0 auto;
}

.project-card {
  background-color: rgba(16, 18, 27, 0.7);
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.05);
  border-radius: 24px;
  overflow: hidden;
  transition: box-shadow 0.3s ease;
  text-align: left;
}

.project-card:hover {
  box-shadow: 0 0 30px rgba(255, 255, 255, 0.15);
}

.project-image {
  width: 100%;
  height: auto;
}

.project-content {
  padding: 1.5rem;
}

.project-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.project-description {
  font-size: 1rem;
  margin-bottom: 1.5rem;
  font-weight: 200;
}

.project-links {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.project-links a {
  display: inline-flex; /* Use inline-flex for better alignment */
  align-items: center;
  padding: 0.5rem 1rem;
  color: #e2e8f0;
  text-decoration: none;
  font-weight: 300; 
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 999px; /* Pill-shaped links */
  transition: background-color 0.3s ease, color 0.3s ease;
}

.project-links a:hover {
  background-color: rgba(200, 200, 200, 0.1);
  color: #fff;
}

@media (max-width: 768px) {
  .projects-grid {
    justify-content: center;
  }
}
</style>