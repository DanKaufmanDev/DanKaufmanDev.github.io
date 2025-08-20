<script setup>
import { ref } from 'vue';

const isMenuOpen = ref(false);

function toggleMenu() {
    isMenuOpen.value = !isMenuOpen.value;
}
</script>

<template>
    <nav class="main-nav">
        <div class="nav-content" :class="{ 'is-open': isMenuOpen }">
            <a href="/" class="nav-link logo">DKD</a>
            
            <div class="nav-links desktop">
                <a href="#about" class="nav-link">About</a>
                <a href="#projects" class="nav-link">Projects</a>
                <a href="#contact" class="nav-link">Contact</a>
            </div>

            <button class="hamburger" @click="toggleMenu" aria-label="Menu">
                <i :class="isMenuOpen ? 'if-close-small' : 'if-appmenu'"></i>
            </button>

            <div class="nav-links mobile" v-if="isMenuOpen">
                <a href="#about" class="nav-link">About</a>
                <a href="#projects" class="nav-link">Projects</a>
                <a href="#contact" class="nav-link">Contact</a>
            </div>
        </div>
    </nav>
</template>

<style scoped>
* {
    box-sizing: border-box;
}

.main-nav {
    position: fixed;
    top: 24px;
    left: 0;
    width: 100%;
    z-index: 10;
    display: flex;
    justify-content: center;
    padding: 0 24px;
}

.nav-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 64px;
    padding: 0 24px;
    width: 100%;
    max-width: 550px;
    font-weight: bold;

    border-radius: 999px;
    background-color: rgba(16, 18, 27, 0.7);
    backdrop-filter: blur(2px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
    animation: pulse-glow 3s infinite ease-in-out;
    transition: height 0.3s ease, border-radius 0.3s ease;
}

.nav-links {
    display: flex;
    align-items: center;
    gap: 12px;
    font-weight: 200;
}

.nav-link,
.logo {
    color: #e2e8f0;
    text-decoration: none;
    text-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
    transition: color 0.3s ease, text-shadow 0.3s ease;
    flex-shrink: 0;
}

.nav-link:hover,
.logo:hover {
    color: #fff;
    text-shadow: 0 0 15px rgba(255, 255, 255, 0.5);
}

.logo {
    font-size: 1.125rem;
}

.hamburger {
    display: none;
    background: none;
    border: none;
    color: #e2e8f0;
    font-size: 1.5rem;
    cursor: pointer;
}

.nav-links.mobile {
    display: none;
}

@keyframes pulse-glow {
    0% {
        box-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
    }
    50% {
        box-shadow: 0 0 30px rgba(255, 255, 255, 0.2);
    }
    100% {
        box-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
    }
}

/* --- Mobile --- */
@media (max-width: 768px) {
    .nav-links.desktop {
        display: none;
    }

    .hamburger {
        display: block;
    }

    .nav-content {
        flex-wrap: wrap;
    }

    .nav-content.is-open {
        height: 120px;
        border-radius: 32px;
        transition: 0.225s;
    }

    .nav-links.mobile {
        display: flex;
        order: 3;
        width: 100%;
        justify-content: center;
        gap: 16px;
        padding-top: 10px;
    }
}
</style>