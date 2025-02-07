<template>
  <section class="bg-[#030806] text-[#F8F5F7] min-h-screen font-mulish py-12">
    <!-- Hero header -->
    <div v-scroll-animation class="mx-auto px-4 text-center relative py-16">
      <div
        class="absolute inset-0 bg-red-700/10 skew-y-3 transform -rotate-1"
      ></div>
      <h1
        class="text-5xl md:text-7xl font-jura text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800 uppercase mb-6 relative"
      >
        Inscription
      </h1>
      <div class="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
      <h2 class="text-4xl md:text-5xl font-jura text-red-600 uppercase mb-6">
        Créez votre compte
      </h2>
      <p class="text-lg md:text-xl font-mulish text-gray-300">
        Rejoignez notre club et commencez votre parcours dans l'art de
        l'autodéfense.
      </p>
    </div>

    <!-- Formulaire d'inscription -->
    <div
      class="p-10 py-10 bg-fixed mt-6"
      style="
        background-image: url('/images/Fond-motif1.jpg');
        background-size: cover;
        background-position: center;
      "
    >
      <form v-scroll-animation class="max-w-3xl mx-auto space-y-6">
        <h2
          v-scroll-animation
          class="text-4xl text-[#D20000] font-jura font-bold mb-8 text-center"
        >
          Créez votre compte
        </h2>

        <div v-scroll-animation class="space-y-6 mb-8">
          <div
            class="p-4 bg-[#1a1a1a] border-2 border-[#3A3A25] hover:border-[#D20000] transition-colors"
          >
            <label class="flex items-center space-x-3 cursor-pointer">
              <input
                type="checkbox"
                class="w-5 h-5 accent-[#D20000]"
                id="trial"
              />
              <span class="text-lg text-gray-300"
                >Je souhaite suivre une séance d'essai</span
              >
            </label>
            <p class="text-gray-400 mt-2 ml-8">
              Je souhaite suivre une séance d'essai pour voir si cela me
              convient avant de m'inscrire
            </p>
          </div>

          <div
            class="p-4 bg-[#1a1a1a] border-2 border-[#3A3A25] hover:border-[#D20000] transition-colors"
          >
            <label class="flex items-center space-x-3 cursor-pointer">
              <input
                type="checkbox"
                class="w-5 h-5 accent-[#D20000]"
                id="full-registration"
              />
              <span class="text-lg text-gray-300"
                >Je souhaite créer mon compte</span
              >
            </label>
            <p class="text-gray-400 mt-2 ml-8">
              Je souhaite créer mon compte pour suivre régulièrement les cours
            </p>
          </div>
        </div>

        <div v-scroll-animation class="grid md:grid-cols-2 gap-6">
          <div>
            <label class="block text-gray-300 mb-2">Email *</label>
            <input
              type="email"
              required
              class="w-full bg-[#1a1a1a] border-2 border-[#3A3A25] p-3 text-white focus:border-[#D20000] focus:outline-none transition-colors"
              placeholder="votre@email.com"
            />
          </div>
          <div>
            <label class="block text-gray-300 mb-2">Nom *</label>
            <input
              type="text"
              required
              class="w-full bg-[#1a1a1a] border-2 border-[#3A3A25] p-3 text-white focus:border-[#D20000] focus:outline-none transition-colors"
              placeholder="Votre nom"
            />
          </div>
        </div>

        <div v-scroll-animation class="grid md:grid-cols-2 gap-6">
          <div>
            <label class="block text-gray-300 mb-2">Prénom *</label>
            <input
              type="text"
              required
              class="w-full bg-[#1a1a1a] border-2 border-[#3A3A25] p-3 text-white focus:border-[#D20000] focus:outline-none transition-colors"
              placeholder="Votre prénom"
            />
          </div>
          <div>
            <label class="block text-gray-300 mb-2">Date de naissance *</label>
            <input
              type="date"
              required
              class="w-full bg-[#1a1a1a] border-2 border-[#3A3A25] p-3 text-white focus:border-[#D20000] focus:outline-none transition-colors"
            />
          </div>
        </div>

        <div v-scroll-animation class="grid md:grid-cols-2 gap-6">
          <div>
            <label class="block text-gray-300 mb-2">GSM</label>
            <input
              type="tel"
              class="w-full bg-[#1a1a1a] border-2 border-[#3A3A25] p-3 text-white focus:border-[#D20000] focus:outline-none transition-colors"
              placeholder="+32 XXX XX XX XX"
            />
          </div>
          <div>
            <label class="block text-gray-300 mb-2">Adresse</label>
            <input
              type="text"
              class="w-full bg-[#1a1a1a] border-2 border-[#3A3A25] p-3 text-white focus:border-[#D20000] focus:outline-none transition-colors"
              placeholder="Rue et numéro"
            />
          </div>
        </div>

        <div v-scroll-animation class="grid md:grid-cols-2 gap-6">
          <div>
            <label class="block text-gray-300 mb-2">Code postal</label>
            <input
              type="text"
              class="w-full bg-[#1a1a1a] border-2 border-[#3A3A25] p-3 text-white focus:border-[#D20000] focus:outline-none transition-colors"
              placeholder="1000"
            />
          </div>
          <div>
            <label class="block text-gray-300 mb-2">Localité</label>
            <input
              type="text"
              class="w-full bg-[#1a1a1a] border-2 border-[#3A3A25] p-3 text-white focus:border-[#D20000] focus:outline-none transition-colors"
              placeholder="Votre ville"
            />
          </div>
        </div>

        <div v-scroll-animation>
          <label class="block text-gray-300 mb-2">Lieu des cours *</label>
          <input
            type="text"
            required
            class="w-full bg-[#1a1a1a] border-2 border-[#3A3A25] p-3 text-white focus:border-[#D20000] focus:outline-none transition-colors"
            placeholder="Lieu de préférence"
          />
        </div>

        <div v-scroll-animation class="grid md:grid-cols-2 gap-6">
          <div>
            <label class="block text-gray-300 mb-2">Mot de passe *</label>
            <input
              type="password"
              required
              class="w-full bg-[#1a1a1a] border-2 border-[#3A3A25] p-3 text-white focus:border-[#D20000] focus:outline-none transition-colors"
              placeholder="••••••••"
            />
          </div>
          <div>
            <label class="block text-gray-300 mb-2">Confirmation *</label>
            <input
              type="password"
              required
              class="w-full bg-[#1a1a1a] border-2 border-[#3A3A25] p-3 text-white focus:border-[#D20000] focus:outline-none transition-colors"
              placeholder="••••••••"
            />
          </div>
        </div>

        <button
          v-scroll-animation
          type="submit"
          class="w-full bg-[#D20000] text-white px-8 py-4 text-lg font-bold transform transition-all duration-300 hover:scale-105 hover:bg-red-700 hover:shadow-red-500/50 hover:shadow-lg"
        >
          Créer mon compte
        </button>
      </form>
    </div>
  </section>
</template>

<script>
import { scrollAnimation } from "../directives/scrollAnimation";

export default {
  name: "SignupPage",
  directives: {
    "scroll-animation": scrollAnimation,
  },
};
</script>

<style scoped>
.font-jura {
  font-family: "Jura", sans-serif;
}

.font-mulish {
  font-family: "Mulish", sans-serif;
}

[v-scroll-animation] {
  will-change: opacity, transform;
}
</style>
