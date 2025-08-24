<template>
  <transition name="modal-fade">
    <div class="modal-overlay" @click.self="$emit('close')">
      <div class="modal-container">
        <button class="modal-close" @click="$emit('close')"><i class="if-close-small"></i></button>
        <img :src="project.image" :alt="project.title" class="modal-image">
        <div class="modal-content">
          <h3 class="modal-title">{{ project.title }}</h3>
          <p class="modal-description">{{ project.description }}</p>
          <div class="modal-links">
            <a :href="project.liveLink" target="_blank" class="modal-link">Live<i class="if-link is-ml-2"></i></a>
            <a :href="project.codeLink" target="_blank" class="modal-link">Code<i class="if-github is-ml-2"></i></a>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  project: {
    type: Object,
    required: true
  }
});

const emits = defineEmits(['close']);
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(5px);
}

.modal-container {
  background-color: rgba(16, 18, 27, 0.9);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 30px rgba(255, 255, 255, 0.2);
  border-radius: 24px;
  padding: 2rem;
  max-width: 65%;
  max-height: 90%;
  overflow-y: auto;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.modal-close {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  background: none;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  z-index: 10;
}

.modal-image {
  max-width: 100%;
  height: auto;
  border-radius: 14px;
  margin-bottom: 1.5rem;
}

.modal-content {
  text-align: center;
  color: white;
}

.modal-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.modal-description {
  font-size: 1.1rem;
  font-weight: 300;
  margin-bottom: 1.5rem;
}

.modal-links {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.modal-link {
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

.modal-link:hover {
  background-color: rgba(255, 255, 255, 0.1);
  color: #fff;
}

/* Transition styles */
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

@media (max-width: 768px) {
  .modal-container {
    padding: 1rem;
  }

  .modal-title {
    font-size: 1.5rem;
  }

  .modal-description {
    font-size: 0.9rem;
  }

  .modal-close {
    font-size: 1.5rem;
  }
}
</style>
