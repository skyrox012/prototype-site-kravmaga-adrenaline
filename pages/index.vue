<template>
  <section class="bg-[#030806] text-[#F8F5F7] min-h-screen font-mulish">
    <!-- Section parallax avec overlay et contenu dynamique -->
    <div class="relative w-full min-h-screen">
      <!-- Background avec parallax -->
      <div
        class="absolute inset-0 bg-cover bg-center bg-fixed z-0"
        style="background-image: url('images/image_back_1_black.jpg')"
      ></div>

      <!-- Contenu principal avec grid layout -->
      <div class="relative z-10 container mx-auto px-4 h-screen">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 h-full items-center">
          <!-- Colonne gauche avec texte -->
          <div class="space-y-8">
            <h1
              class="text-5xl md:text-7xl font-bold text-[#D20000] font-jura leading-tight animate-fadeIn"
            >
              Krav Maga
              <span class="block text-white text-3xl md:text-4xl mt-2"
                >Bruxelles & Wavre</span
              >
            </h1>
            <p class="text-xl text-gray-300 animate-slideUp max-w-xl">
              Découvrez l'art de l'autodéfense moderne avec nos instructeurs
              certifiés. Une approche pratique et efficace pour votre sécurité.
            </p>
            <div class="flex flex-wrap gap-4">
              <a
                href="/inscription"
                class="group relative overflow-hidden bg-[#D20000] px-8 py-4 text-lg font-bold"
              >
                <span class="relative z-10 text-white"
                  >Séance d'essai gratuite</span
                >
                <div
                  class="absolute inset-0 bg-red-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"
                ></div>
              </a>
              <a
                href="/inscription"
                class="group relative overflow-hidden bg-[#3A3A25] px-8 py-4 text-lg font-bold"
              >
                <span class="relative z-10 text-white">Inscription</span>
                <div
                  class="absolute inset-0 bg-[#2b2b1c] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"
                ></div>
              </a>
            </div>
          </div>

          <!-- Colonne droite avec image/logo -->
          <div class="hidden md:block">
            <img
              src="/images/kma-logo-small.png"
              alt="Krav Maga Logo"
              class="w-full max-w-md mx-auto transform hover:scale-105 transition-all duration-500"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Contenu principal -->
    <div class="py-12 mx-auto w-full">
      <!-- Dernières News avec animation au scroll -->
      <section
        v-scroll-animation
        class="mb-12 py-10 px-14 rounded-2xl transform transition-all duration-500 hover:shadow-2xl hover:shadow-red-900/20"
      >
        <h2
          class="text-3xl md:text-4xl text-[#D20000] font-jura font-bold mb-4"
        >
          Dernières News
        </h2>
        <p class="text-gray-300 text-lg">
          Restez informé des dernières actualités et événements de notre club.
        </p>
      </section>

      <!-- Qu'est-ce que le Krav Maga ? -->
      <section
       
        class="mb-12 px-12 py-10 bg-fixed"
        style="
          background-image: url('/images/Fond-motif1.jpg');
          background-size: cover;
          background-position: center;
        "
      >
        <h2  v-scroll-animation
          class="text-3xl md:text-5xl text-[#D20000] font-jura font-bold mb-6 animate-fadeIn"
        >
          Qu'est-ce que le Krav Maga ?
        </h2>
        <div  v-scroll-animation class="grid md:grid-cols-2 gap-8 items-center">
          <div class="space-y-4 animate-slideRight">
            <p class="text-gray-300 text-lg leading-relaxed">
              Le Krav Maga est un système d'autodéfense créé à l'origine pour le
              Mossad israélien. Cette discipline unique combine des techniques
              efficaces avec une philosophie de survie moderne.
            </p>
            <div class="flex space-x-8">
              <span
                class="px-4 py-2 bg-[#D20000]/20 text-[#D20000] rounded-full text-sm font-bold"
              >
                Auto-défense
              </span>
              <span
                class="px-4 py-2 bg-[#3A3A25]/20 text-gray-300 rounded-full text-sm font-bold"
              >
                Combat rapproché
              </span>
            </div>
          </div>
          <img
            src="/images/image21.jpg"
            alt="Krav Maga en action"
            class="w-full shadow-2xl transform hover:scale-105 transition-all duration-500 animate-slideLeft"
          />
        </div>
      </section>

      <!-- Les principes du Krav Maga -->
      <section  class="mb-12 py-10 px-12">
        <h2 v-scroll-animation
          class="text-3xl md:text-5xl text-[#D20000] font-jura font-bold mb-8 animate-fadeIn"
        >
          Les principes du Krav Maga
        </h2>
        <div v-scroll-animation class="grid md:grid-cols-3 gap-8">
          <div
            class="group bg-black/30 p-8 border-2 border-[#3A3A25] hover:border-[#D20000] transform hover:-translate-y-2 transition-all duration-500 animate-slideUp"
          >
            <h3
              class="text-2xl text-[#D20000] font-bold font-jura group-hover:scale-105 transition-transform"
            >
              Simplicité
            </h3>
            <p class="text-gray-300 mt-4 leading-relaxed">
              Basé sur les réflexes naturels du corps humain, le Krav Maga est
              facile et rapide à apprendre.
            </p>
          </div>
          <div
            class="group bg-black/30 p-8 border-2 border-[#3A3A25] hover:border-[#D20000] transform hover:-translate-y-2 transition-all duration-500 animate-slideUp delay-100"
          >
            <h3
              class="text-2xl text-[#D20000] font-bold font-jura group-hover:scale-105 transition-transform"
            >
              Rapidité
            </h3>
            <p class="text-gray-300 mt-4 leading-relaxed">
              Défense et contre-attaque simultanées pour une efficacité
              maximale.
            </p>
          </div>
          <div
            class="group bg-black/30 p-8 border-2 border-[#3A3A25] hover:border-[#D20000] transform hover:-translate-y-2 transition-all duration-500 animate-slideUp delay-200"
          >
            <h3
              class="text-2xl text-[#D20000] font-bold font-jura group-hover:scale-105 transition-transform"
            >
              Efficacité
            </h3>
            <p class="text-gray-300 mt-4 leading-relaxed">
              Techniques directes et puissantes pour neutraliser rapidement une
              menace.
            </p>
          </div>
        </div>
      </section>

      <!-- Histoire du Krav Maga -->
      <section
        
        class="mb-12 grid md:grid-cols-2 gap-8 items-center py-10 px-12 bg-fixed"
        style="
          background-image: url('/images/Fond-motif1.jpg');
          background-size: cover;
          background-position: center;
        "
      >
        <div>
          <h2 class="text-3xl text-[#D20000] font-jura font-bold mb-4">
            L'histoire du Krav Maga
          </h2>
          <p class="text-gray-300 mb-4">
            Le Krav Maga a été développé par <strong>Imi Lichtenfeld</strong>,
            un citoyen tchécoslovaque, fils d'un officier de police réputé de
            Bratislava. Passionné par la boxe, le judo et le ju-jitsu, il a dû
            fuir son pays avec sa famille et s'est réfugié en Israël.
          </p>
          <p class="text-gray-300 mb-4">
            Après la création de l'État d’Israël en 1948, Imi a été chargé de
            développer un système de combat rapproché pour les Forces de Défense
            Israéliennes (IDF). Son objectif était d'entraîner aussi bien les
            soldats expérimentés que les recrues sans formation martiale
            préalable.
          </p>
          <p class="text-gray-300">
            En 1964, après sa retraite militaire, il a commencé à enseigner le
            Krav Maga aux civils et aux forces de l’ordre internationales. En
            1978, il a fondé l'<strong>Association de Krav Maga</strong> pour
            structurer son enseignement à travers le monde.
          </p>
        </div>
        <img
          src="/images/image6.jpg"
          alt="Image Krav Maga"
          class="w-full rounded-lg shadow-lg"
        />
      </section>

      <!-- La Fédération Worldwide -->
      <section
        v-scroll-animation
        class="mb-12 grid md:grid-cols-2 gap-8 items-center px-12 py-10"
      >
        <img
          src="/images/kmw-logo.png"
          alt="Logo Krav Maga Worldwide"
          class="w-full rounded-lg shadow-lg"
        />
        <div>
          <h2 class="text-3xl text-[#D20000] font-jura font-bold mb-4">
            La fédération Worldwide
          </h2>
          <p class="text-gray-300 mb-4">
            En 1981, l’<strong>Association de Krav Maga</strong> en Israël a
            organisé le premier séminaire international pour instructeurs à
            l'Institut Wingate. Parmi les participants figurait
            <strong>Darren Levine</strong>, un passionné d'arts martiaux basé en
            Californie.
          </p>
          <p class="text-gray-300 mb-4">
            Sous la direction d’Imi Lichtenfeld, Levine et ses élèves ont adapté
            le Krav Maga aux forces de police et aux militaires américains. En
            1987, il a fondé l’<strong
              >Association américaine de Krav Maga</strong
            >, qui est rapidement devenue un centre d'entraînement de référence.
          </p>
          <p class="text-gray-300">
            Aujourd’hui, <strong>Krav Maga Worldwide</strong> continue de
            diffuser cet art martial aux États-Unis et à l’international. Il est
            enseigné à plus de 10 000 personnes et adopté par de nombreuses
            agences de police et unités spéciales, y compris le
            <strong>FBI</strong>, les
            <strong>services secrets américains</strong> et le
            <strong
              >Bureau de régulation des alcools, tabacs et armes à feu</strong
            >.
          </p>
        </div>
      </section>
      <!-- Section Contact -->
      <section
        
        id="contact"
        class="p-12 py-10 mb-12 bg-fixed"
        style="
          background-image: url('/images/Fond-motif1.jpg');
          background-size: cover;
          background-position: center;
        "
      >
        <h2 v-scroll-animation
          class="text-3xl md:text-4xl text-[#D20000] font-jura font-bold mb-6 text-center"
        >
          Nous contacter
        </h2>
        <form v-scroll-animation class="max-w-2xl mx-auto space-y-6">
          <div class="grid md:grid-cols-2 gap-6">
            <div>
              <label class="block text-gray-300 mb-2">Nom</label>
              <input
                type="text"
                class="w-full bg-[#1a1a1a] border-2 border-[#3A3A25] p-3 text-white focus:border-[#D20000] focus:outline-none transition-colors"
                placeholder="Votre nom"
              />
            </div>
            <div>
              <label class="block text-gray-300 mb-2">Email</label>
              <input
                type="email"
                class="w-full bg-[#1a1a1a] border-2 border-[#3A3A25] p-3 text-white focus:border-[#D20000] focus:outline-none transition-colors"
                placeholder="votre@email.com"
              />
            </div>
          </div>
          <div>
            <label class="block text-gray-300 mb-2">Message</label>
            <textarea
              rows="4"
              class="w-full bg-[#1a1a1a] border-2 border-[#3A3A25] p-3 text-white focus:border-[#D20000] focus:outline-none transition-colors"
              placeholder="Votre message"
            ></textarea>
          </div>
          <button
            type="submit"
            class="bg-[#D20000] text-white px-8 py-4 text-lg font-bold transform transition-all duration-300 hover:scale-105 hover:bg-red-700 hover:shadow-red-500/50 hover:shadow-lg"
          >
            Envoyer le message
          </button>
        </form>
        <div v-scroll-animation class="mt-12">
          <h3 class="text-2xl text-[#D20000] font-jura font-bold mb-6 text-center">
            Nos localisations
          </h3>
          <div class="grid md:grid-cols-2 gap-8">
            <!-- Bruxelles Location -->
            <div class="bg-black/30 p-6 rounded-lg">
              <h4 class="text-xl text-white font-bold mb-4">
                Bruxelles - SportCity
              </h4>
              <p class="text-gray-300 mb-4">
                Centre sportif de Woluwe-Saint-Pierre<br />
                2 avenue Salomé<br />
                1150 Woluwe-Saint-Pierre<br />
                Belgium
              </p>
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

            <!-- Grez-Doiceau Location -->
            <div class="bg-black/30 p-6 rounded-lg">
              <h4 class="text-xl text-white font-bold mb-4">Grez-Doiceau</h4>
              <p class="text-gray-300 mb-4">
                Ecole communale de Grez-Doiceau<br />
                22 rue du Pont au Lin<br />
                1390 Grez-Doiceau<br />
                Belgium
              </p>
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

          <div class="mt-6 text-center">
            <p class="text-gray-300">
              Email:
              <a
                href="mailto:info@kravmaga-adrenaline.be"
                class="text-[#D20000] hover:underline"
                >info@kravmaga-adrenaline.be</a
              >
            </p>
          </div>
        </div>
      </section>
    </div>
  </section>
</template>

<script>
import { scrollAnimation } from "../directives/scrollAnimation";

export default {
  name: "HomePage",
  directives: {
    "scroll-animation": scrollAnimation,
  },
};
</script>

<style>
/* Définition de la couleur kaki */
.border-kaki {
  border-color: #49440f;
}

.font-jura {
  font-family: "Jura", sans-serif;
}

.font-mulish {
  font-family: "Mulish", sans-serif;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeInUp {
  animation: fadeInUp 1s ease forwards;
}
</style>
