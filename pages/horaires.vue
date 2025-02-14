
<template>
  <section class="bg-black text-white min-h-screen py-12">
    <!-- Titre Horaires -->
    <div
      v-scroll-animation
      class="mx-auto px-4 text-center relative py-16 m-10"
    >
      <div
        class="absolute inset-0 bg-[#110303] opacity-100 skew transform -rotate-1"
      ></div>
      <div class="relative z-10">
        <h2 class="text-4xl md:text-5xl font-jura text-red-600 uppercase mb-6">
          Horaires et Lieux de Cours
        </h2>
      </div>
    </div>

    <!-- Section des horaires -->
    <div
      class="container mx-auto px-4 mt-12 grid grid-cols-1 md:grid-cols-2 gap-8"
    >
      <!-- Cours de Bruxelles -->
      <div
        v-scroll-animation
        class="border-2 border-[#3A3A25] p-6 shadow-lg bg-[#030806]/50"
        
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
          </p>
          <br />

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
          title="Map Google Brussels"
        >
        </iframe>
      </div>

      <!-- Cours de Grez-Doiceau -->
      <div
        v-scroll-animation
        class="border-2 border-[#3A3A25] p-6 shadow-lg bg-[#030806]/50"
        
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
          title="Map Google Grez-Doiceau"
        >
        </iframe>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "HorairesPage",
};
</script>
<style scoped>
/* Définition de la couleur kaki */
.border-kaki {
  border-color: #49440F;
}
</style>
