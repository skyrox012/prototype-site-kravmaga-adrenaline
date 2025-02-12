<template>
  <nav
    class="fixed top-0 left-0 w-full bg-[#030806] text-white shadow-lg z-50 transition-transform duration-300"
    :class="{ '-translate-y-full': !showNavbar }"
  >
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
            <NuxtLink
              to="/"
              class="block hover:text-red-600 transition-colors"
              @click="closeMenu"
              >Accueil</NuxtLink
            >
          </li>
          <li class="py-2 lg:py-0 px-5">
            <NuxtLink
              to="/tarifs"
              class="block hover:text-red-600 transition-colors"
              @click="closeMenu"
              >Tarifs/Horaires</NuxtLink
            >
          </li>
          <li class="py-2 lg:py-0 px-5">
            <NuxtLink
              to="/infos"
              class="block hover:text-red-600 transition-colors"
              @click="closeMenu"
              >Infos</NuxtLink
            >
          </li>
          <li class="py-2 lg:py-0 px-5">
            <NuxtLink
              to="/#contact"
              class="block hover:text-red-600 transition-colors"
              @click="closeMenu"
              >Contact</NuxtLink
            >
          </li>
          <li class="py-2 lg:py-0 px-5">
            <NuxtLink
              to="/inscription"
              class="block hover:text-red-600 transition-colors"
              @click="closeMenu"
              >Inscription</NuxtLink
            >
          </li>
          <li class="py-2 lg:py-0 px-5">
            <NuxtLink
              to="#"
              class="block bg-red-600 p-2 hover:bg-red-700 transition-colors"
              @click="closeMenu"
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
      isMenuOpen: false,
      isLargeScreen: false,
      lastScrollPosition: 0,
      showNavbar: true,
    };
  },
  mounted() {
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.handleResize);
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    closeMenu() {
      this.isMenuOpen = false;
    },
    handleResize() {
      this.isLargeScreen = window.innerWidth >= 1024;
      if (this.isLargeScreen) this.isMenuOpen = false; // Désactiver le menu hamburger sur grands écrans
    },
    handleScroll() {
      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;

      // Ne rien faire si on est en haut de la page
      if (currentScrollPosition < 60) {
        this.showNavbar = true;
        return;
      }

      // Déterminer la direction du scroll
      this.showNavbar = currentScrollPosition < this.lastScrollPosition;

      // Mettre à jour la dernière position
      this.lastScrollPosition = currentScrollPosition;
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

nav {
  will-change: transform;
}
</style>
