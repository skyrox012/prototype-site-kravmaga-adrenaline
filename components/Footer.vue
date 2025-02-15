<template>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  />
  <footer class="bg-[#030806] text-white py-8 border-t border-white/30">
    <div class="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
      <!-- Logo et Description -->
      <div class="flex flex-col items-start">
        <img
          src="/images/logo-km-adrenaline.png"
          alt="Logo Krav Maga Adrenaline"
          class="h-12 w-auto mb-4"
        />
        <p class="text-sm font-mulish">
          Bienvenue au Krav Maga Adrenaline, où nous enseignons l'art de la
          self-défense dans un environnement sûr et motivant.
        </p>
      </div>

      <!-- Liens rapides -->
      <div>
        <h3
          class="text-lg font-jura mb-4 border-b-2 border-red-600 inline-block"
        >
          Liens rapides
        </h3>
        <ul>
          <li class="py-1">
            <NuxtLink to="/" class="hover:text-red-600 transition-colors py-2"
              >Accueil</NuxtLink
            >
          </li>
          <li class="py-1">
            <NuxtLink to="/tarifs" class="hover:text-red-600 transition-colors"
              >Tarifs/Horaires</NuxtLink
            >
          </li>
          <li class="py-1">
            <NuxtLink to="/infos" class="hover:text-red-600 transition-colors"
              >Infos</NuxtLink
            >
          </li>
          <li class="py-1">
            <NuxtLink
              to="/#contact"
              class="hover:text-red-600 transition-colors"
              >Contact</NuxtLink
            >
          </li>
          <li class="py-1">
            <NuxtLink
              to="/inscription"
              class="hover:text-red-600 transition-colors"
              >Inscription</NuxtLink
            >
          </li>
        </ul>
      </div>

      <!-- Contact -->
      <div>
        <h3
          class="text-lg font-jura mb-4 border-b-2 border-red-600 inline-block"
        >
          Contact
        </h3>
        <ul class="">
          <li class="py-1">
            <span class="font-bold"><i class="fa fa-map-marker mr-2 text-red-600"></i>Bruxelles:</span> SportCity : Centre
            sportif de Woluwe-Saint-Pierre 2 avenue Salomé, 1150
            Woluwe-Saint-Pierre, Belgium
          </li>
          <li class="py-1">
            <span class="font-bold"><i class="fa fa-map-marker mr-2 text-red-600"></i>Grez-Doiceau:</span> Ecole communale
            de Grez-Doiceau 22 rue du Pont au Lin, 1390 Grez-Doiceau, Belgium
          </li>

          <li class="py-1">
            <span class="font-bold"><i class="fa fa-envelope mr-2 text-red-600"></i></span>
            <a
              href="mailto:contact@kravmaga-adrenaline.fr"
              class="hover:text-red-600"
              > info@kravmaga-adrenaline.be</a
            >
          </li>
          <li class="flex mt-4">
            <a
              href="https://www.facebook.com/krav.maga.adrenaline.bruxelles"
              class="text-white hover:text-red-600 transition-colors pr-5" target="_blank"
              title="Facebook"
              alt="Facebook"
            >
              <i class="fa fa-facebook-f"></i>
            </a>
            <a
              href="#"
              class="text-white hover:text-red-600 transition-colors px-5"
              title="Instagram"
              alt="Instagram"
            >
              <i class="fa fa-instagram"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>

    <!-- Copyright -->
    <div
      class="text-center text-sm mt-8 font-mulish border-t border-gray-700 pt-4"
    >
      &copy; 2025 Krav Maga Adrenaline. Tous droits réservés |
      <NuxtLink
        to="/mentionslegales"
        class="hover:text-red-600 transition-colors"
        >Mentions légales</NuxtLink
      >
      |
      <NuxtLink to="/cgv" class="hover:text-red-600 transition-colors"
        >Conditions générales de ventes</NuxtLink
      >
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
/* Ajout d'espaces entre les icônes pour un look propre */
footer i {
  font-size: 1.25rem;
}
</style>
