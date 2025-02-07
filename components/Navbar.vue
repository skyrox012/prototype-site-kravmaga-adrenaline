<template>
  <nav class="fixed top-0 left-0 w-full bg-black text-white shadow-lg z-50">
    <div class="container mx-auto flex justify-between items-center px-4 py-3">
      <!-- Logo -->
      <div class="flex items-center">
        <NuxtLink to="/">
          <img
        src="/images/logo-km-adrenaline.png"
        alt="Logo"
        class="h-10 w-auto mr-3"
          />
        </NuxtLink>
      </div>

      <!-- Hamburger Icon -->
      <button
        class="lg:hidden text-white focus:outline-none"
        @click="toggleMenu"
      >
        <span v-if="!isMenuOpen" class="text-2xl">☰</span>
        <span v-else class="text-2xl">✖</span>
      </button>

      <!-- Navigation Links -->
      <transition name="menu-slide" mode="out-in">
        <ul
          v-if="isMenuOpen || isLargeScreen"
          :class="[
            'lg:flex lg:space-x-6 font-mulish items-center',
            isMenuOpen ? 'block' : 'hidden',
          ]"
          class="absolute lg:relative top-16 lg:top-0 left-0 w-full lg:w-auto bg-black lg:bg-transparent text-center lg:text-left"
        >
          <li class="py-2 lg:py-0 px-5">
            <NuxtLink to="/" class="block hover:text-red-600 transition-colors"
              >Accueil</NuxtLink
            >
          </li>
          <li class="py-2 lg:py-0 px-5">
            <NuxtLink
              to="/tarifs"
              class="block hover:text-red-600 transition-colors"
              >Tarifs/Horaires</NuxtLink
            >
          </li>
          <li class="py-2 lg:py-0 px-5">
            <NuxtLink
              to="/infos"
              class="block hover:text-red-600 transition-colors"
              >Infos</NuxtLink
            >
          </li>
          <li class="py-2 lg:py-0 px-5">
            <NuxtLink
              to="/#contact"
              class="block hover:text-red-600 transition-colors"
              >Contact</NuxtLink
            >
          </li>
          <li class="py-2 lg:py-0 px-5">
            <NuxtLink
              to="/inscription"
              class="block hover:text-red-600 transition-colors"
              >Inscription</NuxtLink
            >
          </li>
          <li class="py-2 lg:py-0 px-5">
            <NuxtLink
              to="#"
              class="block bg-red-600 p-2 hover:bg-red-700 transition-colors"
              >Connexion</NuxtLink
            >
          </li>
        </ul>
      </transition>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      isMenuOpen: false, // État du menu hamburger
      isLargeScreen: false, // Détecte les écrans larges
    };
  },
  mounted() {
    // Détecter les changements de taille d'écran pour afficher correctement le menu sur desktop
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    handleResize() {
      this.isLargeScreen = window.innerWidth >= 1024;
      if (this.isLargeScreen) this.isMenuOpen = false; // Désactiver le menu hamburger sur grands écrans
    },
  },
};
</script>

<style scoped>
/* Animation Tailwind */
.menu-slide-enter-active,
.menu-slide-leave-active {
  transition: all 0.3s ease-in-out;
}
.menu-slide-enter-from {
  opacity: 0;
  transform: translateY(-20%);
}
.menu-slide-enter-to {
  opacity: 1;
  transform: translateY(0);
}
.menu-slide-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.menu-slide-leave-to {
  opacity: 0;
  transform: translateY(-20%);
}
</style>
