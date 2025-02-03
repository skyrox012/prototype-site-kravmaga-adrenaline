<template>
  <section class="bg-[#030806] text-[#F8F5F7] min-h-screen font-mulish">
    <!-- Bannière avec effet parallax -->
    <div class="relative w-full h-[80vh] bg-cover bg-center bg-fixed" 
       style="background-image: url('images/image6.jpg');">
      <div class="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40 flex flex-col justify-center items-center text-center p-6">
        <!-- Titre avec animation d'apparition -->
        <h1 class="text-4xl md:text-5xl font-bold text-[#D20000] font-jura animate-fadeIn">
          Krav Maga à Bruxelles et région de Wavre
        </h1>
        <!-- Sous-titre avec animation de slide -->
        <p class="text-xl md:text-2xl text-gray-300 mt-6 animate-slideUp">
          Apprenez l'art de l'autodéfense avec nos instructeurs qualifiés.
        </p>
        <!-- Boutons avec animations au hover -->
        <div class="mt-8 flex flex-col md:flex-row gap-4 md:gap-8 w-full md:w-auto px-6">
          <a href="/inscription" 
             class="bg-[#D20000] text-white px-8 py-4 rounded-xl text-lg font-bold transform transition-all duration-300 hover:scale-105 hover:bg-red-700 hover:shadow-red-500/50 hover:shadow-lg">
            Séance d'essai gratuite
          </a>
          <a href="/inscription" 
             class="bg-[#3A3A25] text-white px-8 py-4 rounded-xl text-lg font-bold transform transition-all duration-300 hover:scale-105 hover:bg-[#2b2b1c] hover:shadow-[#3A3A25]/50 hover:shadow-lg">
            Inscription
          </a>
        </div>
      </div>
    </div>

    <!-- Contenu principal -->
    <div class="py-12 mx-auto px-6 w-full">
      <!-- Dernières News avec animation au scroll -->
      <section class="mb-12 py-10 px-6 md:px-10 rounded-2xl transform transition-all duration-500 hover:shadow-2xl hover:shadow-red-900/20">
        <h2 class="text-3xl md:text-4xl text-[#D20000] font-jura font-bold mb-4">
          Dernières News
        </h2>
        <p class="text-gray-300 text-lg">
          Restez informé des dernières actualités et événements de notre club.
        </p>
      </section>

      <!-- Qu'est-ce que le Krav Maga ? -->
      <section class="mb-12 px-10 py-10 bg-fixed" style="background-image: url('/images/Fond-motif1.jpg'); background-size: cover; background-position: center;">
        <h2 class="text-3xl md:text-5xl text-[#D20000] font-jura font-bold mb-6 animate-fadeIn">
          Qu'est-ce que le Krav Maga ?
        </h2>
        <div class="grid md:grid-cols-2 gap-8 items-center">
          <div class="space-y-4 animate-slideRight">
        <p class="text-gray-300 text-lg leading-relaxed">
          Le Krav Maga est un système d'autodéfense créé à l'origine pour le Mossad israélien. 
          Cette discipline unique combine des techniques efficaces avec une philosophie de survie moderne.
        </p>
        <div class="flex space-x-4">
          <span class="px-4 py-2 bg-[#D20000]/20 text-[#D20000] rounded-full text-sm font-bold">
            Auto-défense
          </span>
          <span class="px-4 py-2 bg-[#3A3A25]/20 text-gray-300 rounded-full text-sm font-bold">
            Combat rapproché
          </span>
        </div>
          </div>
          <img 
        src="/images/image6.jpg" 
        alt="Krav Maga en action" 
        class="w-full rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-500 animate-slideLeft"
          >
        </div>
      </section>

      <!-- Les principes du Krav Maga -->
      <section class="mb-12 py-10 px-10">
        <h2 class="text-3xl md:text-5xl text-[#D20000] font-jura font-bold mb-8 animate-fadeIn">
          Les principes du Krav Maga
        </h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="group bg-black/30 p-8 rounded-xl border-2 border-[#3A3A25] hover:border-[#D20000] transform hover:-translate-y-2 transition-all duration-500 animate-slideUp">
        <h3 class="text-2xl text-[#D20000] font-bold font-jura group-hover:scale-105 transition-transform">
          Simplicité
        </h3>
        <p class="text-gray-300 mt-4 leading-relaxed">
          Basé sur les réflexes naturels du corps humain, le Krav Maga est facile et rapide à apprendre.
        </p>
          </div>
          <div class="group bg-black/30 p-8 rounded-xl border-2 border-[#3A3A25] hover:border-[#D20000] transform hover:-translate-y-2 transition-all duration-500 animate-slideUp delay-100">
        <h3 class="text-2xl text-[#D20000] font-bold font-jura group-hover:scale-105 transition-transform">
          Rapidité
        </h3>
        <p class="text-gray-300 mt-4 leading-relaxed">
          Défense et contre-attaque simultanées pour une efficacité maximale.
        </p>
          </div>
          <div class="group bg-black/30 p-8 rounded-xl border-2 border-[#3A3A25] hover:border-[#D20000] transform hover:-translate-y-2 transition-all duration-500 animate-slideUp delay-200">
        <h3 class="text-2xl text-[#D20000] font-bold font-jura group-hover:scale-105 transition-transform">
          Efficacité
        </h3>
        <p class="text-gray-300 mt-4 leading-relaxed">
          Techniques directes et puissantes pour neutraliser rapidement une menace.
        </p>
          </div>
        </div>
      </section>

      <!-- Histoire du Krav Maga -->
      <section class="mb-12 grid md:grid-cols-2 gap-8 items-center py-10 px-10 bg-fixed" style="background-image: url('/images/Fond-motif1.jpg'); background-size: cover; background-position: center;">
        <div>
          <h2 class="text-3xl text-[#D20000] font-jura font-bold mb-4">L'histoire du Krav Maga</h2>
          <p class="text-gray-300 mb-4">
            Le Krav Maga a été développé par <strong>Imi Lichtenfeld</strong>, un citoyen tchécoslovaque, fils d'un officier de police réputé de Bratislava.
            Passionné par la boxe, le judo et le ju-jitsu, il a dû fuir son pays avec sa famille et s'est réfugié en Israël.
          </p>
          <p class="text-gray-300 mb-4">
            Après la création de l'État d’Israël en 1948, Imi a été chargé de développer un système de combat rapproché pour les Forces de Défense Israéliennes (IDF).
            Son objectif était d'entraîner aussi bien les soldats expérimentés que les recrues sans formation martiale préalable.
          </p>
          <p class="text-gray-300">
            En 1964, après sa retraite militaire, il a commencé à enseigner le Krav Maga aux civils et aux forces de l’ordre internationales.
            En 1978, il a fondé l'<strong>Association de Krav Maga</strong> pour structurer son enseignement à travers le monde.
          </p>
        </div>
        <img src="/images/image6.jpg" alt="Imi Lichtenfeld" class="w-full rounded-lg shadow-lg">
      </section>

      <!-- La Fédération Worldwide -->
      <section class="mb-12 grid md:grid-cols-2 gap-8 items-center px-10 py-10">
        <img src="/images/kmw-logo.png" alt="Krav Maga Worldwide" class="w-full rounded-lg shadow-lg">
        <div>
          <h2 class="text-3xl text-[#D20000] font-jura font-bold mb-4">La fédération Worldwide</h2>
          <p class="text-gray-300 mb-4">
            En 1981, l’<strong>Association de Krav Maga</strong> en Israël a organisé le premier séminaire international pour instructeurs à l'Institut Wingate.
            Parmi les participants figurait <strong>Darren Levine</strong>, un passionné d'arts martiaux basé en Californie.
          </p>
          <p class="text-gray-300 mb-4">
            Sous la direction d’Imi Lichtenfeld, Levine et ses élèves ont adapté le Krav Maga aux forces de police et aux militaires américains.
            En 1987, il a fondé l’<strong>Association américaine de Krav Maga</strong>, qui est rapidement devenue un centre d'entraînement de référence.
          </p>
          <p class="text-gray-300">
            Aujourd’hui, <strong>Krav Maga Worldwide</strong> continue de diffuser cet art martial aux États-Unis et à l’international.
            Il est enseigné à plus de 10 000 personnes et adopté par de nombreuses agences de police et unités spéciales, y compris le <strong>FBI</strong>, les <strong>services secrets américains</strong> et le <strong>Bureau de régulation des alcools, tabacs et armes à feu</strong>.
          </p>
        </div>
      </section>
      <!-- Section Contact -->
      <section class="p-10 py-10 mb-12 bg-fixed" style="background-image: url('/images/Fond-motif1.jpg'); background-size: cover; background-position: center;">
        <h2 class="text-3xl md:text-4xl text-[#D20000] font-jura font-bold mb-6">
          Nous contacter
        </h2>
        <form class="max-w-2xl mx-auto space-y-6">
          <div class="grid md:grid-cols-2 gap-6">
            <div>
              <label class="block text-gray-300 mb-2">Nom</label>
              <input type="text" class="w-full bg-[#1a1a1a] border-2 border-[#3A3A25] rounded-lg p-3 text-white focus:border-[#D20000] focus:outline-none transition-colors">
            </div>
            <div>
              <label class="block text-gray-300 mb-2">Email</label>
              <input type="email" class="w-full bg-[#1a1a1a] border-2 border-[#3A3A25] rounded-lg p-3 text-white focus:border-[#D20000] focus:outline-none transition-colors">
            </div>
          </div>
          <div>
            <label class="block text-gray-300 mb-2">Message</label>
            <textarea rows="4" class="w-full bg-[#1a1a1a] border-2 border-[#3A3A25] rounded-lg p-3 text-white focus:border-[#D20000] focus:outline-none transition-colors"></textarea>
          </div>
          <button type="submit" class="bg-[#D20000] text-white px-8 py-4 rounded-xl text-lg font-bold transform transition-all duration-300 hover:scale-105 hover:bg-red-700 hover:shadow-red-500/50 hover:shadow-lg">
            Envoyer le message
          </button>
        </form>
      </section>
    </div>
  </section>
</template>

<script>
export default {
  name: "HomePage",
};
</script>

<style>
/* Définition de la couleur kaki */
.border-kaki {
  border-color: #49440F;
}

.font-jura {
  font-family: 'Jura', sans-serif;
}

.font-mulish {
  font-family: 'Mulish', sans-serif;
}
</style>
