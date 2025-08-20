<template>
  <transition name="toast-fade">
    <div v-if="toastState.show" :class="['toast', toastState.type]">
      <p>{{ toastState.message }}</p>
    </div>
  </transition>
</template>

<script setup>
import { toastState } from '@/lib/toast';
</script>

<style scoped>
.toast {
  position: fixed;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  padding: 1rem 1.5rem;
  border-radius: 999px;
  color: white;
  z-index: 1000;
  
  /* Themed styles */
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  font-weight: 600;
}

.toast.success {
  background-color: rgba(16, 18, 27, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.1);
  animation: pulse-glow-success 3s infinite ease-in-out;
}

@keyframes pulse-glow-success {
    0% {
        box-shadow: 0 0 20px rgba(74, 222, 128, 0.2);
    }
    50% {
        box-shadow: 0 0 30px rgba(74, 222, 128, 0.4);
    }
    100% {
        box-shadow: 0 0 20px rgba(74, 222, 128, 0.2);
    }
}

.toast.fail {
  background-color: rgba(16, 18, 27, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.1);
  animation: pulse-glow-fail 3s infinite ease-in-out;
}

@keyframes pulse-glow-fail {
    0% {
        box-shadow: 0 0 20px rgba(248, 113, 113, 0.2);
    }
    50% {
        box-shadow: 0 0 30px rgba(248, 113, 113, 0.4);
    }
    100% {
        box-shadow: 0 0 20px rgba(248, 113, 113, 0.2);
    }
}

.toast-fade-enter-active,
.toast-fade-leave-active {
  transition: all 0.5s ease;
}

.toast-fade-enter-from,
.toast-fade-leave-to {
  opacity: 0;
  transform: translate(-50%, 20px);
}
</style>