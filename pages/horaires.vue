<template>
  <section class="bg-black text-white min-h-screen py-12">
    <!-- Titre de la page -->
    <div class="container mx-auto px-4 text-center">
      <h1 class="text-4xl md:text-5xl font-jura text-red-600 uppercase mb-6">
        Horaires et Lieux de Cours
      </h1>
      <p class="text-lg md:text-xl font-mulish text-gray-300 mb-12">
        Découvrez nos différents lieux de pratique et les horaires des cours adaptés à tous les niveaux.
      </p>
    </div>

    <!-- Section des horaires -->
    <div class="container mx-auto px-4 mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">

      <!-- Cours de Bruxelles -->
      <div class="border-2 border-[#3A3A25] p-6 shadow-lg">
        <h3 class="text-2xl font-jura text-red-600 mb-4 uppercase">Cours de Bruxelles</h3>
        <p class="font-mulish text-gray-300 mb-4">
          Les cours sont donnés dans le dojo du centre sportif de Woluwe-Saint-Pierre. Prenez les escaliers pour descendre juste en face de la caisse de la piscine (salle Judo/arts martiaux, niveau -1). Tous les derniers dimanches du mois, sparring. N'oubliez pas d'apporter votre équipement complet !
        </p>

        <div class="mt-6">
          <h4 class="text-xl font-jura text-red-600 mb-2 ">Horaires</h4>
          <p class="font-mulish text-gray-300 mb-4">Dimanches : 17:00 à 19:00 (Ados/adultes uniquement)</p>
          
          <h4 class="text-xl font-jura text-red-600 mb-2">Adresse</h4>
          <p class="font-mulish text-gray-300 mb-4">Sport City : Avenue Salomé 2 - 1150 Woluwe-Saint-Pierre</p>

          <h4 class="text-xl font-jura text-red-600 mb-2">Email</h4>
          <p class="font-mulish text-gray-300 mb-4">info@kravmaga-adrenaline.be</p>
        </div>
      </div>

      <!-- Cours de Grez-Doiceau -->
      <div class="border-2 border-[#3A3A25] p-6 shadow-lg">
        <h3 class="text-2xl font-jura text-red-600 mb-4 uppercase">Cours de Grez-Doiceau</h3>
        <p class="font-mulish text-gray-300 mb-4">
          Les cours sont donnés dans la salle de gymnastique de l'école communale de Grez-Doiceau. Un parking est accessible rue du Pont au Lin. Tous les derniers vendredis du mois, sparring pour le cours ados/adultes. N'oubliez pas d'apporter votre équipement complet !
        </p>

        <div class="mt-6">
          <h4 class="text-xl font-jura text-red-600 mb-2">Horaires</h4>
          <p class="font-mulish text-gray-300 mb-4">Cours enfants : Vendredis de 18:00 à 20:00</p>
          <p class="font-mulish text-gray-300 mb-4">Cours ados/adultes : Vendredis de 20:00 à 22:00</p>

          <h4 class="text-xl font-jura text-red-600 mb-2">Adresse</h4>
          <p class="font-mulish text-gray-300 mb-4">Ecole communale de Grez-Doiceau : Rue du Pont au Lin 22 - 1390 Grez-Doiceau</p>

          <h4 class="text-xl font-jura text-red-600 mb-2">Email</h4>
          <p class="font-mulish text-gray-300 mb-4">info@kravmaga-adrenaline.be</p>
        </div>
      </div>
    </div>

    <!-- Formulaire de contact sans fond kaki -->
    <div class="container mx-auto px-4 mt-12 p-8 rounded-lg shadow-lg">
      <h2 class="text-3xl font-jura text-white mb-6">Nous Contacter</h2>
      <form action="#" method="POST">
        <div class="mb-4">
          <label for="name" class="text-white font-mulish">Votre nom</label>
          <input type="text" id="name" class="w-full p-3 mt-2 rounded-lg border-2 border-gray-300 bg-black text-white" placeholder="Votre nom" />
        </div>
        <div class="mb-4">
          <label for="email" class="text-white font-mulish">Votre adresse email</label>
          <input type="email" id="email" class="w-full p-3 mt-2 rounded-lg border-2 border-gray-300 bg-black text-white" placeholder="Votre adresse email" />
        </div>
        <div class="mb-4">
          <label for="message" class="text-white font-mulish">Votre message</label>
          <textarea id="message" class="w-full p-3 mt-2 rounded-lg border-2 border-gray-300 bg-black text-white" placeholder="Votre message" rows="5"></textarea>
        </div>
        <button type="submit" class="w-full bg-red-600 hover:bg-red-700 text-white p-3 rounded-lg font-jura">
          Envoyer mon message
        </button>
      </form>
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
