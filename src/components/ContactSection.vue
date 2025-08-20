<template>
  <section id="contact" class="contact-section">
    <h2 class="contact-title">Contact Me</h2>
    <form action="https://formsubmit.co/1ff2b9b962d5f50c526c27e4153b9fe0" method="POST" class="contact-form" :class="formClass">
      <input type="hidden" name="_captcha" value="false">
      <input  type="hidden" name="_next" value="http://localhost:5173/?form_submission=success#contact">
      <input type="hidden" name="_subject" value="New email from danielkaufman.dev!">
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" id="name" name="name" required v-model="name" @input="validateForm">
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" name="email" required v-model="email" @input="validateForm">
      </div>
      <div class="form-group">
        <label for="message">Message</label>
        <textarea id="message" name="message" rows="8" required v-model="message" @input="validateForm"></textarea>
      </div>
      <button type="submit" class="submit-button">Send Message</button>
    </form>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { showToast } from '@/lib/toast';

const name = ref('');
const email = ref('');
const message = ref('');
const validationState = ref('default');

const validateForm = () => {
    if (name.value === '' && email.value === '' && message.value === '') {
        validationState.value = 'default';
        return;
    }

    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value);
    if (name.value !== '' && isEmailValid && message.value !== '') {
        validationState.value = 'valid';
    } else {
        validationState.value = 'invalid';
    }
};

const formClass = computed(() => {
    if (validationState.value === 'valid') return 'is-valid';
    if (validationState.value === 'invalid') return 'is-invalid';
    return '';
});

onMounted(() => {
  const urlParams = new URLSearchParams(window.location.search);
  const formSubmission = urlParams.get('form_submission');

  if (formSubmission === 'success') {
    showToast('Message sent successfully!', 'success');
  }
});


</script>

<style scoped>
* {
    box-sizing: border-box;
}

.contact-section {
  padding: 4rem 2rem;
  color: white;
  text-align: center;
}

.contact-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
}

.contact-form {
  max-width: 600px;
  margin: 0 auto;
  text-align: left;
  
  background-color: rgba(16, 18, 27, 0.5);
  backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.05);
  border-radius: 32px;
  padding: 4rem;
  animation: pulse-glow 3s infinite ease-in-out;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 300;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background-color: rgba(16, 18, 27, 0.5);
  color: white;
  border-radius: 10px;
  transition: border-color 0.3s, box-shadow 0.3s;
  resize: none;
  font-size: large;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: rgba(255, 255, 255, 0.5);
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.1);
}

.submit-button {
  display: block;
  width: fit-content;
  margin: 1.5rem auto 0;
  padding: 0.75rem 1.5rem;
  color: #e2e8f0;
  text-decoration: none;
  font-weight: 300;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 999px;
  background-color: transparent;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.submit-button:hover {
  background-color: rgba(200, 200, 200, 0.1);
  color: #fff;
}

@keyframes pulse-glow {
    0% { box-shadow: 0 0 15px rgba(255, 255, 255, 0.1); }
    50% { box-shadow: 0 0 25px rgba(255, 255, 255, 0.2); }
    100% { box-shadow: 0 0 15px rgba(255, 255, 255, 0.1); }
}

@keyframes pulse-glow-valid {
    0% { box-shadow: 0 0 15px rgba(74, 222, 128, 0.2); }
    50% { box-shadow: 0 0 25px rgba(74, 222, 128, 0.4); }
    100% { box-shadow: 0 0 15px rgba(74, 222, 128, 0.2); }
}

@keyframes pulse-glow-invalid {
    0% { box-shadow: 0 0 15px rgba(248, 113, 113, 0.2); }
    50% { box-shadow: 0 0 25px rgba(248, 113, 113, 0.4); }
    100% { box-shadow: 0 0 15px rgba(248, 113, 113, 0.2); }
}

.contact-form.is-valid {
    animation-name: pulse-glow-valid;
}

.contact-form.is-invalid {
    animation-name: pulse-glow-invalid;
}

@media (max-width: 768px) {
  .contact-form {
    padding: 2rem;
  }
}
</style>