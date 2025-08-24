<template>
  <section id="projects" class="projects-section">
    <h2 class="projects-title">My Projects</h2>
    <div class="projects-grid">
      <div class="project-card" v-for="project in projects" :key="project.id" @click="openProjectModal(project)">
        <img :src="project.image" :alt="project.title" class="project-image">
        <div class="project-content">
          <h3 class="project-title">{{ project.title }}</h3>
          <p class="project-description">{{ project.description }}</p>
          <div class="project-links">
            <a :href="project.liveLink" target="_blank" class="project-link" @click.stop>Live<i class="if-link is-ml-2"></i></a>
            <a :href="project.codeLink" target="_blank" class="project-link" @click.stop>Code<i class="if-github is-ml-2"></i></a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <ProjectModal v-if="showModal" :project="selectedProject" @close="closeProjectModal" />
</template>

<script setup>
import { ref } from 'vue';
import ProjectModal from './ProjectModal.vue';
import IconForgeScreenshot from '../assets/IconForgeScreenshot.webp';
import ChiptunedScreenshot from '../assets/ChiptunedScreenshot.webp';
import SmarkdownScreenshot from '../assets/SmarkdownScreenshot.webp';

const selectedProject = ref(null);
const showModal = ref(false);

const projects = ref([
  {
    id: 1,
    image: IconForgeScreenshot,
    title: 'IconForge',
    description: 'IconForge is a performance-focused, utility-style icon library. Powered by a JIT compiler, IconForge tree-shakes unused icons, dynamically injects at runtime, and delivers fast performance whether you use it via CDN or IconForge CLI.',
    liveLink: 'https://dankaufmandev.github.io/IconForge-Frontend/',
    codeLink: 'https://github.com/DanKaufmanDev/IconForge'
  },
  {
    id: 2,
    image: ChiptunedScreenshot,
    title: 'Chiptuned',
    description: 'A retro-inspired, browser-based 8-bit step sequencer and DAW built with vanilla JavaScript and the Web Audio API. Originally developed as an in-house tool for designing retro soundtracks and sound effects for indie video game projects.',
    liveLink: 'https://dankaufmandev.github.io/Chiptuned/',
    codeLink: 'https://github.com/DanKaufmanDev/Chiptuned'
  },
  {
    id: 3,
    image: SmarkdownScreenshot,
    title: 'Smarkdown',
    description: 'Smarkdown is a modern markdown note-taking application designed for users who want to streamline their writing and organization process. It combines a clean, intuitive interface with a powerful suite of AI-powered tools to help.',
    liveLink: 'https://smarkdown-indol.vercel.app/',
    codeLink: 'https://github.com/DanKaufmanDev/Smarkdown'
  }
]);

function openProjectModal(project) {
  selectedProject.value = project;
  showModal.value = true;
}

function closeProjectModal() {
  showModal.value = false;
  selectedProject.value = null;
}
</script>

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
  cursor: pointer;
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
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 1rem;
  color: #e2e8f0;
  text-decoration: none;
  font-weight: 300; 
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 999px;
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
