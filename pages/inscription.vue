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
    <div class="container mx-auto px-6 py-12">
      <form class="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl shadow-2xl max-w-3xl mx-auto border border-gray-700">
      <h2 class="text-4xl text-[#D20000] font-jura font-bold mb-8 text-center">Créez votre compte</h2>

      <div class="space-y-6 mb-8">
        <div class="p-4 bg-gray-800/50 rounded-lg hover:bg-gray-800/70 transition">
        <label class="flex items-center space-x-3 cursor-pointer">
          <input type="checkbox" class="w-5 h-5 accent-[#D20000]" id="trial" />
          <span class="text-lg text-white">Je souhaite suivre une séance d'essai</span>
        </label>
        <p class="text-gray-400 mt-2 ml-8">Je souhaite suivre une séance d'essai pour voir si cela me convient avant de m'inscrire</p>
        </div>

        <div class="p-4 bg-gray-800/50 rounded-lg hover:bg-gray-800/70 transition">
        <label class="flex items-center space-x-3 cursor-pointer">
          <input type="checkbox" class="w-5 h-5 accent-[#D20000]" id="full-registration" />
          <span class="text-lg text-white">Je souhaite créer mon compte</span>
        </label>
        <p class="text-gray-400 mt-2 ml-8">Je souhaite créer mon compte pour suivre régulièrement les cours</p>
        </div>
      </div>

      <div class="space-y-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="form-group">
          <label for="email" class="text-lg text-white mb-2 block">Email *</label>
          <input type="email" id="email" class="w-full p-4 rounded-lg bg-gray-800/50 border border-gray-700 text-white placeholder-gray-400 focus:border-[#D20000] focus:ring-1 focus:ring-[#D20000] transition" required placeholder="votre@email.com" />
        </div>
        <div class="form-group">
          <label for="last-name" class="text-lg text-white mb-2 block">Nom *</label>
          <input type="text" id="last-name" class="w-full p-4 rounded-lg bg-gray-800/50 border border-gray-700 text-white placeholder-gray-400 focus:border-[#D20000] focus:ring-1 focus:ring-[#D20000] transition" required placeholder="Votre nom" />
        </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="form-group">
          <label for="first-name" class="text-lg text-white mb-2 block">Prénom *</label>
          <input type="text" id="first-name" class="w-full p-4 rounded-lg bg-gray-800/50 border border-gray-700 text-white placeholder-gray-400 focus:border-[#D20000] focus:ring-1 focus:ring-[#D20000] transition" required placeholder="Votre prénom" />
        </div>
        <div class="form-group">
          <label for="dob" class="text-lg text-white mb-2 block">Date de naissance *</label>
          <input type="date" id="dob" class="w-full p-4 rounded-lg bg-gray-800/50 border border-gray-700 text-white focus:border-[#D20000] focus:ring-1 focus:ring-[#D20000] transition" required />
        </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="form-group">
          <label for="phone" class="text-lg text-white mb-2 block">GSM</label>
          <input type="tel" id="phone" class="w-full p-4 rounded-lg bg-gray-800/50 border border-gray-700 text-white placeholder-gray-400 focus:border-[#D20000] focus:ring-1 focus:ring-[#D20000] transition" placeholder="+32 XXX XX XX XX" />
        </div>
        <div class="form-group">
          <label for="address" class="text-lg text-white mb-2 block">Adresse</label>
          <input type="text" id="address" class="w-full p-4 rounded-lg bg-gray-800/50 border border-gray-700 text-white placeholder-gray-400 focus:border-[#D20000] focus:ring-1 focus:ring-[#D20000] transition" placeholder="Rue et numéro" />
        </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="form-group">
          <label for="postal-code" class="text-lg text-white mb-2 block">Code postal</label>
          <input type="text" id="postal-code" class="w-full p-4 rounded-lg bg-gray-800/50 border border-gray-700 text-white placeholder-gray-400 focus:border-[#D20000] focus:ring-1 focus:ring-[#D20000] transition" placeholder="1000" />
        </div>
        <div class="form-group">
          <label for="city" class="text-lg text-white mb-2 block">Localité</label>
          <input type="text" id="city" class="w-full p-4 rounded-lg bg-gray-800/50 border border-gray-700 text-white placeholder-gray-400 focus:border-[#D20000] focus:ring-1 focus:ring-[#D20000] transition" placeholder="Votre ville" />
        </div>
        </div>

        <div class="form-group">
        <label for="location" class="text-lg text-white mb-2 block">Lieu des cours *</label>
        <input type="text" id="location" class="w-full p-4 rounded-lg bg-gray-800/50 border border-gray-700 text-white placeholder-gray-400 focus:border-[#D20000] focus:ring-1 focus:ring-[#D20000] transition" required placeholder="Lieu de préférence" />
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="form-group">
          <label for="password" class="text-lg text-white mb-2 block">Mot de passe *</label>
          <input type="password" id="password" class="w-full p-4 rounded-lg bg-gray-800/50 border border-gray-700 text-white focus:border-[#D20000] focus:ring-1 focus:ring-[#D20000] transition" required placeholder="••••••••" />
        </div>
        <div class="form-group">
          <label for="confirm-password" class="text-lg text-white mb-2 block">Confirmation *</label>
          <input type="password" id="confirm-password" class="w-full p-4 rounded-lg bg-gray-800/50 border border-gray-700 text-white focus:border-[#D20000] focus:ring-1 focus:ring-[#D20000] transition" required placeholder="••••••••" />
        </div>
        </div>
      </div>

      <button type="submit" class="w-full mt-8 py-4 bg-[#D20000] text-white text-lg rounded-lg font-bold hover:bg-red-700 transition-all transform hover:scale-[1.02] focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-900">
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
