<template>
  <section class="bg-black text-white min-h-screen py-12">
    <!-- Titre de la page -->
    <div class="container mx-auto px-4 text-center">
      <h1 class="text-4xl md:text-5xl font-jura text-red-600 uppercase mb-6">
        Nos Formules et Tarifs
      </h1>
      <p class="text-lg md:text-xl font-mulish text-gray-300">
        Découvrez nos offres adaptées à tous les pratiquants. Simple, clair, et pensé pour votre progression.
      </p>
    </div>

    <!-- Section des tarifs -->
    <div class="container mx-auto px-4 mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <!-- Carte : Séance d'essai -->
      <div class="group bg-black/30 p-8 border-2 border-[#3A3A25] hover:border-[#D20000] transform hover:-translate-y-2 transition-all duration-500 animate-slideUp delay-100">
        <h3 class="text-2xl font-jura text-red-600 mb-4 uppercase">Séance d'essai</h3>
        <p class="font-mulish text-gray-300 mb-4">
          Profitez d'une séance d'essai gratuite pour découvrir notre club et nos cours. Réservez dès maintenant via le bouton
          <span class="text-red-600 font-bold">"S'inscrire"</span> en haut de la page.
        </p>
        <div class="mt-6">
          <span class="text-xl font-bold text-white uppercase">Gratuit</span>
        </div>
      </div>

      <!-- Carte : Abonnement 1 mois -->
      <div class="group bg-black/30 p-8 border-2 border-[#3A3A25] hover:border-[#D20000] transform hover:-translate-y-2 transition-all duration-500 animate-slideUp delay-100">
        <h3 class="text-2xl font-jura text-red-600 mb-4 uppercase">Abonnement 1 Mois</h3>
        <p class="font-mulish text-gray-300 mb-4">
          Engagez-vous pour un mois et profitez de 8 heures de cours par mois, au tarif attractif de :
        </p>
        <div class="mt-6">
          <span class="text-3xl font-bold text-white">40€</span>
          <span class="text-gray-300 text-sm"> / mois</span>
        </div>
      </div>

      <!-- Carte : Réductions -->
      <div class="group bg-black/30 p-8 border-2 border-[#3A3A25] hover:border-[#D20000] transform hover:-translate-y-2 transition-all duration-500 animate-slideUp delay-100">
        <h3 class="text-2xl font-jura text-red-600 mb-4 uppercase">Réductions</h3>
        <p class="font-mulish text-gray-300 mb-4">
          Bénéficiez de réductions allant de <span class="text-red-600 font-bold">5%</span> à <span class="text-red-600 font-bold">30%</span> pour tout abonnement
          supérieur à 4 mois. Partagez cette offre avec les membres liés à votre compte.
        </p>
      </div>

      <!-- Carte : Assurance -->
      <div class="group bg-black/30 p-8 border-2 border-[#3A3A25] hover:border-[#D20000] transform hover:-translate-y-2 transition-all duration-500 animate-slideUp delay-100">
        <h3 class="text-2xl font-jura text-red-600 mb-4 uppercase">Assurance</h3>
        <p class="font-mulish text-gray-300 mb-4">
          Une assurance annuelle est obligatoire pour tous les pratiquants. Cette assurance couvre les risques liés aux cours et aux stages.
        </p>
        <div class="mt-6">
          <span class="text-3xl font-bold text-white">30€</span>
          <span class="text-gray-300 text-sm"> / an</span>
        </div>
      </div>

      <!-- Carte : T-shirts -->
      <div class="group bg-black/30 p-8 border-2 border-[#3A3A25] hover:border-[#D20000] transform hover:-translate-y-2 transition-all duration-500 animate-slideUp delay-100">
        <h3 class="text-2xl font-jura text-red-600 mb-4 uppercase">T-shirts du Club</h3>
        <p class="font-mulish text-gray-300 mb-4">
          Commandez les t-shirts officiels du club directement depuis votre espace personnel. 
          <span class="text-red-600 font-bold">Un t-shirt offert</span> pour tout abonnement supérieur à 8 mois !
        </p>
      </div>

      <!-- Carte : Stages -->
      <div class="group bg-black/30 p-8 border-2 border-[#3A3A25] hover:border-[#D20000] transform hover:-translate-y-2 transition-all duration-500 animate-slideUp delay-100">
        <h3 class="text-2xl font-jura text-red-600 mb-4 uppercase">Stages</h3>
        <p class="font-mulish text-gray-300 mb-4">
          Des stages exclusifs sont organisés tout au long de l'année pour approfondir vos compétences et apprendre de nouvelles techniques.
        </p>
        <div class="mt-6">
          <span class="text-lg font-bold text-white">Dates et tarifs disponibles prochainement</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "TarifsPage",
};
</script>

<style scoped>
/* Définition de la couleur kaki */
.border-kaki {
  border-color: #49440F;
}
</style>
