<template>
  <section class="bg-[#030806] text-[#F8F5F7] min-h-screen font-mulish">
    <!-- Bannière -->
    <div class="relative w-full h-[400px] bg-cover bg-center" style="background-image: url('/images/image6.jpg');">
      <div class="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center p-6">
        <h1 class="text-4xl md:text-5xl font-bold text-[#D20000] font-jura">Inscrivez-vous</h1>
        <p class="text-lg md:text-xl text-gray-300 mt-4">Rejoignez notre club et apprenez l'art de l'autodéfense.</p>
      </div>
    </div>

    <!-- Formulaire d'inscription -->
    <div class="p-10 py-10 mb-12 bg-fixed" style="background-image: url('/images/Fond-motif1.jpg'); background-size: cover; background-position: center;">
      <form class="max-w-3xl mx-auto space-y-6">
      <h2 class="text-4xl text-[#D20000] font-jura font-bold mb-8 text-center">Créez votre compte</h2>

      <div class="space-y-6 mb-8">
        <div class="p-4 bg-[#1a1a1a] border-2 border-[#3A3A25] hover:border-[#D20000] transition-colors">
        <label class="flex items-center space-x-3 cursor-pointer">
          <input type="checkbox" class="w-5 h-5 accent-[#D20000]" id="trial" />
          <span class="text-lg text-gray-300">Je souhaite suivre une séance d'essai</span>
        </label>
        <p class="text-gray-400 mt-2 ml-8">Je souhaite suivre une séance d'essai pour voir si cela me convient avant de m'inscrire</p>
        </div>

        <div class="p-4 bg-[#1a1a1a] border-2 border-[#3A3A25] hover:border-[#D20000] transition-colors">
        <label class="flex items-center space-x-3 cursor-pointer">
          <input type="checkbox" class="w-5 h-5 accent-[#D20000]" id="full-registration" />
          <span class="text-lg text-gray-300">Je souhaite créer mon compte</span>
        </label>
        <p class="text-gray-400 mt-2 ml-8">Je souhaite créer mon compte pour suivre régulièrement les cours</p>
        </div>
      </div>

      <div class="grid md:grid-cols-2 gap-6">
        <div>
        <label class="block text-gray-300 mb-2">Email *</label>
        <input type="email" required class="w-full bg-[#1a1a1a] border-2 border-[#3A3A25] p-3 text-white focus:border-[#D20000] focus:outline-none transition-colors" placeholder="votre@email.com">
        </div>
        <div>
        <label class="block text-gray-300 mb-2">Nom *</label>
        <input type="text" required class="w-full bg-[#1a1a1a] border-2 border-[#3A3A25] p-3 text-white focus:border-[#D20000] focus:outline-none transition-colors" placeholder="Votre nom">
        </div>
      </div>

      <div class="grid md:grid-cols-2 gap-6">
        <div>
        <label class="block text-gray-300 mb-2">Prénom *</label>
        <input type="text" required class="w-full bg-[#1a1a1a] border-2 border-[#3A3A25] p-3 text-white focus:border-[#D20000] focus:outline-none transition-colors" placeholder="Votre prénom">
        </div>
        <div>
        <label class="block text-gray-300 mb-2">Date de naissance *</label>
        <input type="date" required class="w-full bg-[#1a1a1a] border-2 border-[#3A3A25] p-3 text-white focus:border-[#D20000] focus:outline-none transition-colors">
        </div>
      </div>

      <div class="grid md:grid-cols-2 gap-6">
        <div>
        <label class="block text-gray-300 mb-2">GSM</label>
        <input type="tel" class="w-full bg-[#1a1a1a] border-2 border-[#3A3A25] p-3 text-white focus:border-[#D20000] focus:outline-none transition-colors" placeholder="+32 XXX XX XX XX">
        </div>
        <div>
        <label class="block text-gray-300 mb-2">Adresse</label>
        <input type="text" class="w-full bg-[#1a1a1a] border-2 border-[#3A3A25] p-3 text-white focus:border-[#D20000] focus:outline-none transition-colors" placeholder="Rue et numéro">
        </div>
      </div>

      <div class="grid md:grid-cols-2 gap-6">
        <div>
        <label class="block text-gray-300 mb-2">Code postal</label>
        <input type="text" class="w-full bg-[#1a1a1a] border-2 border-[#3A3A25] p-3 text-white focus:border-[#D20000] focus:outline-none transition-colors" placeholder="1000">
        </div>
        <div>
        <label class="block text-gray-300 mb-2">Localité</label>
        <input type="text" class="w-full bg-[#1a1a1a] border-2 border-[#3A3A25] p-3 text-white focus:border-[#D20000] focus:outline-none transition-colors" placeholder="Votre ville">
        </div>
      </div>

      <div>
        <label class="block text-gray-300 mb-2">Lieu des cours *</label>
        <input type="text" required class="w-full bg-[#1a1a1a] border-2 border-[#3A3A25] p-3 text-white focus:border-[#D20000] focus:outline-none transition-colors" placeholder="Lieu de préférence">
      </div>

      <div class="grid md:grid-cols-2 gap-6">
        <div>
        <label class="block text-gray-300 mb-2">Mot de passe *</label>
        <input type="password" required class="w-full bg-[#1a1a1a] border-2 border-[#3A3A25] p-3 text-white focus:border-[#D20000] focus:outline-none transition-colors" placeholder="••••••••">
        </div>
        <div>
        <label class="block text-gray-300 mb-2">Confirmation *</label>
        <input type="password" required class="w-full bg-[#1a1a1a] border-2 border-[#3A3A25] p-3 text-white focus:border-[#D20000] focus:outline-none transition-colors" placeholder="••••••••">
        </div>
      </div>

      <button type="submit" class="w-full bg-[#D20000] text-white px-8 py-4 text-lg font-bold transform transition-all duration-300 hover:scale-105 hover:bg-red-700 hover:shadow-red-500/50 hover:shadow-lg">
        Créer mon compte
      </button>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: "SignupPage",
};
</script>

<style>

.font-jura {
  font-family: 'Jura', sans-serif;
}

.font-mulish {
  font-family: 'Mulish', sans-serif;
}
</style>
