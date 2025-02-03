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
      <form class="border-2 border-[#3A3A25] p-6 shadow-lg max-w-3xl mx-auto">
        <h2 class="text-3xl text-[#D20000] font-jura font-bold mb-6 text-center">Créez votre compte</h2>

        <div class="mb-4">
          <label for="trial" class="block text-lg text-white">Je souhaite suivre une séance d'essai</label>
          <input type="checkbox" id="trial" class="mt-2" />
          <p class="text-gray-300 mt-1">Je souhaite suivre une séance d'essai pour voir si cela me convient avant de m'inscrire</p>
        </div>

        <div class="mb-6">
          <label for="full-registration" class="block text-lg text-white">Je souhaite créer mon compte</label>
          <input type="checkbox" id="full-registration" class="mt-2" />
          <p class="text-gray-300 mt-1">Je souhaite créer mon compte pour suivre régulièrement les cours</p>
        </div>

        <!-- Form Fields -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
          <div>
            <label for="email" class="block text-lg text-white">Votre adresse email *</label>
            <input type="email" id="email" name="email" placeholder="Votre email" class="w-full p-4 mt-2 rounded-lg bg-[#F8F5F7] text-black placeholder-gray-500" required />
          </div>
          <div>
            <label for="last-name" class="block text-lg text-white">Votre nom *</label>
            <input type="text" id="last-name" name="last-name" placeholder="Votre nom" class="w-full p-4 mt-2 rounded-lg bg-[#F8F5F7] text-black placeholder-gray-500" required />
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
          <div>
            <label for="first-name" class="block text-lg text-white">Votre prénom *</label>
            <input type="text" id="first-name" name="first-name" placeholder="Votre prénom" class="w-full p-4 mt-2 rounded-lg bg-[#F8F5F7] text-black placeholder-gray-500" required />
          </div>
          <div>
            <label for="dob" class="block text-lg text-white">Date de naissance *</label>
            <input type="date" id="dob" name="dob" class="w-full p-4 mt-2 rounded-lg bg-[#F8F5F7] text-black" required />
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
          <div>
            <label for="phone" class="block text-lg text-white">Numéro de GSM</label>
            <input type="text" id="phone" name="phone" placeholder="Votre numéro" class="w-full p-4 mt-2 rounded-lg bg-[#F8F5F7] text-black placeholder-gray-500" />
          </div>
          <div>
            <label for="address" class="block text-lg text-white">Votre adresse</label>
            <input type="text" id="address" name="address" placeholder="Votre adresse" class="w-full p-4 mt-2 rounded-lg bg-[#F8F5F7] text-black placeholder-gray-500" />
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
          <div>
            <label for="postal-code" class="block text-lg text-white">Votre code postal</label>
            <input type="text" id="postal-code" name="postal-code" placeholder="Code postal" class="w-full p-4 mt-2 rounded-lg bg-[#F8F5F7] text-black placeholder-gray-500" />
          </div>
          <div>
            <label for="city" class="block text-lg text-white">Votre localité</label>
            <input type="text" id="city" name="city" placeholder="Votre ville" class="w-full p-4 mt-2 rounded-lg bg-[#F8F5F7] text-black placeholder-gray-500" />
          </div>
        </div>

        <div class="mb-4">
          <label for="location" class="block text-lg text-white">Lieu où vous souhaitez suivre le(s) cours *</label>
          <input type="text" id="location" name="location" placeholder="Lieu de préférence" class="w-full p-4 mt-2 rounded-lg bg-[#F8F5F7] text-black placeholder-gray-500" required />
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
          <div>
            <label for="password" class="block text-lg text-white">Votre mot de passe *</label>
            <input type="password" id="password" name="password" placeholder="Mot de passe" class="w-full p-4 mt-2 rounded-lg bg-[#F8F5F7] text-black" required />
          </div>
          <div>
            <label for="confirm-password" class="block text-lg text-white">Confirmez le mot de passe *</label>
            <input type="password" id="confirm-password" name="confirm-password" placeholder="Confirmer le mot de passe" class="w-full p-4 mt-2 rounded-lg bg-[#F8F5F7] text-black" required />
          </div>
        </div>

        <button type="submit" class="w-full py-4 bg-[#D20000] text-white text-lg rounded-lg font-bold hover:bg-red-700 transition">Valider</button>
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
