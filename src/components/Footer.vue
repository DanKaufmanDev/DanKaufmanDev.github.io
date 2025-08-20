<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="social-links">
        <a href="https://github.com/DanKaufmanDev" target="_blank" aria-label="GitHub"><i class="if-github"></i></a>
        <a href="#" target="_blank" aria-label="LinkedIn"><i class="if-linkedin"></i></a>
        <a href="mailto:danielkaufman.dev@gmail.com" target="_blank" aria-label="Email"><i class="if-mail"></i></a>
      </div>
      <p>&copy; 2025 Dan Kaufman. All rights reserved.</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  padding: 4rem 2rem;
  color: #e2e8f0; /* slate-200 */
  text-align: center;
}

.footer-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

.social-links {
  display: flex;
  gap: 1.5rem;
}

.social-links a {
  display: inline-block;
  font-size: 1.75rem;
  color: #e2e8f0;
  transition: color 0.3s ease, text-shadow 0.3s ease;
}

.social-links a:hover {
  color: #fff;
  text-shadow: 0 0 15px rgba(255, 255, 255, 0.5);
}

.footer p {
    font-weight: 200;
    font-size: 0.9rem;
    opacity: 0.7;
}
</style>