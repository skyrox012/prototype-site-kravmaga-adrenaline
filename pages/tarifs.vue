<template>
  <section class="bg-black text-white min-h-screen py-12">
    <!-- Hero header -->
    <div v-scroll-animation class="mx-auto px-4 text-center relative py-16">
      <div
        class="absolute inset-0 bg-red-700/10 skew-y-3 transform -rotate-1"
      ></div>
      <h1
        class="text-5xl md:text-7xl font-jura text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800 uppercase mb-6 relative"
      >
        Tarifs et Horaires
      </h1>
      <div class="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
      <h2 class="text-4xl md:text-5xl font-jura text-red-600 uppercase mb-6">
        Nos Formules et Tarifs
      </h2>
      <p class="text-lg md:text-xl font-mulish text-gray-300">
        Découvrez nos offres adaptées à tous les pratiquants. Simple, clair, et
        pensé pour votre progression.
      </p>
    </div>

    <!-- Section des tarifs -->
    <div
      class="container mx-auto px-4 mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      <!-- Carte : Séance d'essai -->
      <div
        v-scroll-animation
        class="group bg-black/30 p-8 border-2 border-[#3A3A25] hover:border-[#D20000] transform hover:-translate-y-2 transition-all duration-500 animate-slideUp delay-100"
        style="
          background-image: url('/images/Fond-motif1.jpg');
          background-size: cover;
          background-position: center;
        "
      >
        <h3 class="text-2xl font-jura text-red-600 mb-4 uppercase">
          Séance d'essai
        </h3>
        <p class="font-mulish text-gray-300 mb-4">
          Profitez d'une séance d'essai gratuite pour découvrir notre club et
          nos cours. Réservez dès maintenant via le bouton
          <span class="text-red-600 font-bold"
            ><a href="/inscription">"Inscription"</a></span
          >
          en haut de la page.
        </p>
        <div class="mt-6">
          <span class="text-xl font-bold text-white uppercase">Gratuit</span>
        </div>
      </div>

      <!-- Carte : Abonnement 1 mois -->
      <div
        v-scroll-animation
        class="group bg-black/30 p-8 border-2 border-[#3A3A25] hover:border-[#D20000] transform hover:-translate-y-2 transition-all duration-500 animate-slideUp delay-100"
        style="
          background-image: url('/images/Fond-motif1.jpg');
          background-size: cover;
          background-position: center;
        "
      >
        <h3 class="text-2xl font-jura text-red-600 mb-4 uppercase">
          Abonnement 1 Mois
        </h3>
        <p class="font-mulish text-gray-300 mb-4">
          Engagez-vous pour un mois et profitez de 8 heures de cours par mois,
          au tarif attractif de :
        </p>
        <div class="mt-6">
          <span class="text-3xl font-bold text-white">40€</span>
          <span class="text-gray-300 text-sm"> / mois</span>
        </div>
      </div>

      <!-- Carte : Réductions -->
      <div
        v-scroll-animation
        class="group bg-black/30 p-8 border-2 border-[#3A3A25] hover:border-[#D20000] transform hover:-translate-y-2 transition-all duration-500 animate-slideUp delay-100"
        style="
          background-image: url('/images/Fond-motif1.jpg');
          background-size: cover;
          background-position: center;
        "
      >
        <h3 class="text-2xl font-jura text-red-600 mb-4 uppercase">
          Réductions
        </h3>
        <p class="font-mulish text-gray-300 mb-4">
          Bénéficiez de réductions allant de
          <span class="text-red-600 font-bold">5%</span> à
          <span class="text-red-600 font-bold">30%</span> pour tout abonnement
          supérieur à 4 mois. Partagez cette offre avec les membres liés à votre
          compte.
        </p>
      </div>

      <!-- Carte : Assurance -->
      <div
        v-scroll-animation
        class="group bg-black/30 p-8 border-2 border-[#3A3A25] hover:border-[#D20000] transform hover:-translate-y-2 transition-all duration-500 animate-slideUp delay-100"
        style="
          background-image: url('/images/Fond-motif1.jpg');
          background-size: cover;
          background-position: center;
        "
      >
        <h3 class="text-2xl font-jura text-red-600 mb-4 uppercase">
          Assurance
        </h3>
        <p class="font-mulish text-gray-300 mb-4">
          Une assurance annuelle est obligatoire pour tous les pratiquants.
          Cette assurance couvre les risques liés aux cours et aux stages.
        </p>
        <div class="mt-6">
          <span class="text-3xl font-bold text-white">30€</span>
          <span class="text-gray-300 text-sm"> / an</span>
        </div>
      </div>

      <!-- Carte : T-shirts -->
      <div
        v-scroll-animation
        class="group bg-black/30 p-8 border-2 border-[#3A3A25] hover:border-[#D20000] transform hover:-translate-y-2 transition-all duration-500 animate-slideUp delay-100"
        style="
          background-image: url('/images/Fond-motif1.jpg');
          background-size: cover;
          background-position: center;
        "
      >
        <h3 class="text-2xl font-jura text-red-600 mb-4 uppercase">
          T-shirts du Club
        </h3>
        <p class="font-mulish text-gray-300 mb-4">
          Commandez les t-shirts officiels du club directement depuis votre
          espace personnel.
          <span class="text-red-600 font-bold">Un t-shirt offert</span> pour
          tout abonnement supérieur à 8 mois !
        </p>
      </div>

      <!-- Carte : Stages -->
      <div
        v-scroll-animation
        class="group bg-black/30 p-8 border-2 border-[#3A3A25] hover:border-[#D20000] transform hover:-translate-y-2 transition-all duration-500 animate-slideUp delay-100"
        style="
          background-image: url('/images/Fond-motif1.jpg');
          background-size: cover;
          background-position: center;
        "
      >
        <h3 class="text-2xl font-jura text-red-600 mb-4 uppercase">Stages</h3>
        <p class="font-mulish text-gray-300 mb-4">
          Des stages exclusifs sont organisés tout au long de l'année pour
          approfondir vos compétences et apprendre de nouvelles techniques.
        </p>
        <div class="mt-6">
          <span class="text-lg font-bold text-white"
            >Dates et tarifs disponibles prochainement</span
          >
        </div>
      </div>
    </div>

    <!-- Titre Horaires -->
    <div
      v-scroll-animation
      class="mx-auto px-4 text-center relative py-16 m-10"
    >
      <div
        class="absolute inset-0 bg-red-700/10 skew-y- transform -rotate-1"
      ></div>
      <h2
        class="text-4xl md:text-5xl font-jura text-red-600 uppercase mb-6 relative"
      >
        Horaires et Lieux de Cours
      </h2>
    </div>

    <!-- Section des horaires -->
    <div
      class="container mx-auto px-4 mt-12 grid grid-cols-1 md:grid-cols-2 gap-8"
    >
      <!-- Cours de Bruxelles -->
      <div
        v-scroll-animation
        class="border-2 border-[#3A3A25] p-6 shadow-lg"
        style="
          background-image: url('/images/Fond-motif1.jpg');
          background-size: cover;
          background-position: center;
        "
      >
        <h3 class="text-2xl font-jura text-red-600 mb-4 uppercase">
          Cours de Bruxelles
        </h3>
        <p class="font-mulish text-gray-300 mb-4">
          Les cours sont donnés dans le dojo du centre sportif de
          Woluwe-Saint-Pierre. Prenez les escaliers pour descendre juste en face
          de la caisse de la piscine (salle Judo/arts martiaux, niveau -1). Tous
          les derniers dimanches du mois, sparring. N'oubliez pas d'apporter
          votre équipement complet !
        </p>

        <div class="mt-6">
          <h4 class="text-xl font-jura text-red-600 mb-2">Horaires</h4>
          <p class="font-mulish text-gray-300 mb-4">
            Dimanches : 17:00 à 19:00 (Ados/adultes uniquement)
          </p><br>

          <h4 class="text-xl font-jura text-red-600 mb-2">Adresse</h4>
          <p class="font-mulish text-gray-300 mb-4">
            Sport City : Avenue Salomé 2 - 1150 Woluwe-Saint-Pierre
          </p>

          <h4 class="text-xl font-jura text-red-600 mb-2">Email</h4>
          <p class="font-mulish text-gray-300 mb-4">
            info@kravmaga-adrenaline.be
          </p>
        </div>
        
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2520.039827366306!2d4.456488300000001!3d50.8304262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3db9d7a5e8761%3A0xf0cf230484aabe26!2sSportcity!5e0!3m2!1sen!2sbe!4v1738937805306!5m2!1sen!2sbe"
          class="w-full h-64"
          style="
            border: 0;
            filter: grayscale(100%) contrast(90%) brightness(90%);
            
          "
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        >
        </iframe>
      </div>

      <!-- Cours de Grez-Doiceau -->
      <div
        v-scroll-animation
        class="border-2 border-[#3A3A25] p-6 shadow-lg"
        style="
          background-image: url('/images/Fond-motif1.jpg');
          background-size: cover;
          background-position: center;
        "
      >
        <h3 class="text-2xl font-jura text-red-600 mb-4 uppercase">
          Cours de Grez-Doiceau
        </h3>
        <p class="font-mulish text-gray-300 mb-4">
          Les cours sont donnés dans la salle de gymnastique de l'école
          communale de Grez-Doiceau. Un parking est accessible rue du Pont au
          Lin. Tous les derniers vendredis du mois, sparring pour le cours
          ados/adultes. N'oubliez pas d'apporter votre équipement complet !
        </p>

        <div class="mt-6">
          <h4 class="text-xl font-jura text-red-600 mb-2">Horaires</h4>
          <p class="font-mulish text-gray-300 mb-4">
            Cours enfants : Vendredis de 18:00 à 20:00
          </p>
          <p class="font-mulish text-gray-300 mb-4">
            Cours ados/adultes : Vendredis de 20:00 à 22:00
          </p>

          <h4 class="text-xl font-jura text-red-600 mb-2">Adresse</h4>
          <p class="font-mulish text-gray-300 mb-4">
            Ecole communale de Grez-Doiceau : Rue du Pont au Lin 22 - 1390
            Grez-Doiceau
          </p>

          <h4 class="text-xl font-jura text-red-600 mb-2">Email</h4>
          <p class="font-mulish text-gray-300 mb-4">
            info@kravmaga-adrenaline.be
          </p>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2524.9669118155!2d4.694621576239233!3d50.73910256653875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c17b599027bb81%3A0x8ceebab12d128cc3!2sCommunity%20School%20of%20Grez-Doiceau!5e0!3m2!1sen!2sbe!4v1738937953042!5m2!1sen!2sbe"
          class="w-full h-64"
          style="
            border: 0;
            filter: grayscale(100%) contrast(90%) brightness(90%);
          "
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        >
        </iframe>
      </div>
    </div>
  </section>
</template>

<script>
import { scrollAnimation } from "../directives/scrollAnimation";

export default {
  name: "TarifsPage",
  directives: {
    "scroll-animation": scrollAnimation,
  },
};
</script>

<style scoped>
/* Définition de la couleur kaki */
.border-kaki {
  border-color: #49440f;
}

/* Animation styles */
[v-scroll-animation] {
  will-change: opacity, transform;
}
</style>
