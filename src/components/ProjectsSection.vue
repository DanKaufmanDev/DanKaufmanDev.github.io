<template>
  <section id="projects" class="projects-section">
    <h2 class="projects-title">My Projects</h2>
    <div class="projects-grid">
      <!-- Project 1 -->
      <div class="project-card">
        <img src="https://placehold.co/400x250" alt="Project 1" class="project-image">
        <div class="project-content">
          <h3 class="project-title">Project One</h3>
          <p class="project-description">A brief description of the first project. Highlighting the technologies used and the problems solved.</p>
          <div class="project-links">
            <a href="#" class="project-link">Live Demo</a>
            <a href="#" class="project-link">Source Code</a>
          </div>
        </div>
      </div>

      <!-- Project 2 -->
      <div class="project-card">
        <img src="https://placehold.co/400x250" alt="Project 2" class="project-image">
        <div class="project-content">
          <h3 class="project-title">Project Two</h3>
          <p class="project-description">A brief description of the second project. Highlighting the technologies used and the problems solved.</p>
          <div class="project-links">
            <a href="#" class="project-link">Live Demo</a>
            <a href="#" class="project-link">Source Code</a>
          </div>
        </div>
      </div>

      <!-- Project 3 -->
      <div class="project-card">
        <img src="https://placehold.co/400x250" alt="Project 3" class="project-image">
        <div class="project-content">
          <h3 class="project-title">Project Three</h3>
          <p class="project-description">A brief description of the third project. Highlighting the technologies used and the problems solved.</p>
          <div class="project-links">
            <a href="#" class="project-link">Live Demo</a>
            <a href="#" class="project-link">Source Code</a>
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
  background-color: #1a202c;
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.3s;
}

.project-card:hover {
  transform: translateY(-5px);
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
}

.project-links a {
  margin-right: 1rem;
  color: white;
  text-decoration: none;
  font-weight: 600;
}

.project-links a:hover {
  text-decoration: underline;
}
</style>
