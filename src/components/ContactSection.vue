<template>
  <section id="contact" class="contact-section">
    <h2 class="contact-title">Contact Me</h2>
    <form class="contact-form" @submit.prevent="submitForm">
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" id="name" name="name" required>
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" name="email" required>
      </div>
      <div class="form-group">
        <label for="message">Message</label>
        <textarea id="message" name="message" rows="5" required></textarea>
      </div>
      <button type="submit" class="submit-button">Send Message</button>
    </form>
  </section>
</template>

<script setup>
const submitForm = () => {
  // Handle form submission logic here
  alert('Form submitted!');
};
</script>

<style scoped>
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
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #4a5568;
  background-color: #2d3748;
  color: white;
  border-radius: 5px;
}

.submit-button {
  display: inline-block;
  padding: 1rem 2rem;
  background-color: transparent;
  border: 2px solid white;
  color: white;
  text-decoration: none;
  font-weight: 700;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
}

.submit-button:hover {
  background-color: white;
  color: #0a0e1a;
}
</style>
