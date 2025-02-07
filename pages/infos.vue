<template>
  <section class="bg-black text-white min-h-screen py-12">
    <!-- Hero header -->
    <div class="mx-auto px-4 text-center relative py-16">
      <div class="absolute inset-0 bg-red-700/10 skew-y-3 transform -rotate-1"></div>
      <h1 class="text-5xl md:text-7xl font-jura text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800 uppercase mb-6 relative">
      Informations sur le Krav Maga
      </h1>
      <div class="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
      <h2 class="text-4xl md:text-5xl font-jura text-red-600 uppercase mb-6">
      Découvrez Notre Programme
      </h2>
      <p class="text-lg md:text-xl font-mulish text-gray-300">
      Découvrez notre approche du Krav Maga, les principes de nos cours et les compétences que vous développerez au fil de votre apprentissage.
      </p>
    </div>

    <!-- Section Le Cours -->
    <div class="container mx-auto px-4 mb-12">
      <h2 class="text-3xl font-jura text-red-600 mb-6">Le Cours</h2>
      <p class="font-mulish text-gray-300 mb-6">
      Le déroulement d'un cours de Krav Maga suit un schéma précis qui combine techniques, exercices et mises en situation pour garantir une progression optimale.
      </p>

      <!-- Grille des descriptions -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <!-- Renforcement musculaire -->
      <div class="group bg-black/30 p-8 border-2 border-[#3A3A25] hover:border-[#D20000] transform hover:-translate-y-2 transition-all duration-500" style="background-image: url('/images/Fond-motif1.jpg'); background-size: cover; background-position: center;">
        <h3 class="text-2xl font-jura text-red-600 mb-4 uppercase">Renforcement musculaire</h3>
        <p class="font-mulish text-gray-300 mb-4">
        Travaillez l'efficacité musculaire pour développer force, endurance et explosivité. Une préparation de 15 minutes, adaptée à votre rythme, pour maximiser vos performances.
        </p>
      </div>

      <!-- Les drills -->
      <div class="group bg-black/30 p-8 border-2 border-[#3A3A25] hover:border-[#D20000] transform hover:-translate-y-2 transition-all duration-500" style="background-image: url('/images/Fond-motif1.jpg'); background-size: cover; background-position: center;">
        <h3 class="text-2xl font-jura text-red-600 mb-4 uppercase">Les drills</h3>
        <p class="font-mulish text-gray-300 mb-4">
        Développez vos réflexes et votre explosivité grâce à des exercices ciblés. Chaque drill améliore une compétence spécifique, comme le déplacement, la frappe ou la défense.
        </p>
      </div>

      <!-- Combatives -->
      <div class="group bg-black/30 p-8 border-2 border-[#3A3A25] hover:border-[#D20000] transform hover:-translate-y-2 transition-all duration-500" style="background-image: url('/images/Fond-motif1.jpg'); background-size: cover; background-position: center;">
        <h3 class="text-2xl font-jura text-red-600 mb-4 uppercase">Les combatives</h3>
        <p class="font-mulish text-gray-300 mb-4">
        Apprenez les techniques de frappes pour neutraliser un adversaire ou vous dégager d'une saisie. Ces techniques sont la base même du Krav Maga.
        </p>
      </div>

      <!-- Self defense -->
      <div class="group bg-black/30 p-8 border-2 border-[#3A3A25] hover:border-[#D20000] transform hover:-translate-y-2 transition-all duration-500" style="background-image: url('/images/Fond-motif1.jpg'); background-size: cover; background-position: center;">
        <h3 class="text-2xl font-jura text-red-600 mb-4 uppercase">Self Defense</h3>
        <p class="font-mulish text-gray-300 mb-4">
        Maîtrisez des techniques pour contrer les saisies, les étranglements, ou les menaces armées. Un apprentissage progressif pour renforcer vos réflexes naturels.
        </p>
      </div>
      </div>
    </div>

    <!-- Instructeurs -->
    <!-- Titre Instructeurs -->
    <div class="mx-auto px-4 text-center relative py-16 m-10">
      <div class="absolute inset-0 bg-red-700/10 skew-y transform -rotate-2"></div>
      <h2 class="text-4xl md:text-5xl font-jura text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800 uppercase mb-6 relative">
      Nos Instructeurs
      </h2>
    </div>
    <div class="container mx-auto px-4 mb-12">
      <p class="font-mulish text-gray-300 mb-12 text-center max-w-3xl mx-auto text-lg">
      Nos instructeurs sont formés par les plus grandes écoles internationales de Krav Maga. Leur expérience et leur expertise garantissent un enseignement de haute qualité, axé sur la sécurité, la progression et la technique.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
      <!-- Laurent -->
      <div class="relative group bg-gradient-to-b from-black/40 to-black/60 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl">
        <div class="p-8 text-center border-2 border-red-800/20 backdrop-blur-sm">
        <img src="~/public/images/image16.jpg" alt="Laurent" class="rounded-full w-40 h-40 mx-auto mb-6 shadow-xl group-hover:scale-105 transition-transform duration-500 border-4 border-red-600/30">
        <h3 class="font-jura text-2xl text-red-600 mb-2">Laurent</h3>
        <p class="font-mulish text-gray-300 mb-4">Instructeur et Président du Club</p>
        <button @click="toggleDetails('laurent')" class="px-6 py-2 bg-red-600/10 hover:bg-red-600 text-red-600 hover:text-white rounded-full transition-all duration-300">
          Voir plus
        </button>
        <div v-if="activeInstructor === 'laurent'" class="mt-6 text-gray-300 text-left space-y-4 animate-fadeIn">
          <p><span class="text-red-600 font-semibold">Formé par :</span> Greg (Krav Maga Worldwide BXL), Thierry Viatour (Krav Maga Worldwide Europe), Jon Pascal (Krav Maga WorldWide Los Angeles)</p>
          <p><span class="text-red-600 font-semibold">Diplômes :</span> Instructeur certifié Krav Maga Worldwide Level 5, Expert I et II</p>
          <p><span class="text-red-600 font-semibold">Occupations :</span> Cours collectifs SPORTCITY & Grez-Doiceau, Personal trainings</p>
        </div>
        </div>
      </div>

      <!-- Lea -->
      <div class="relative group bg-gradient-to-b from-black/40 to-black/60  transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl">
        <div class="p-8 text-center border-2 border-red-800/20 backdrop-blur-sm">
        <img src="~/public/images/image16.jpg" alt="Lea" class="rounded-full w-40 h-40 mx-auto mb-6 shadow-xl group-hover:scale-105 transition-transform duration-500 border-4 border-red-600/30">
        <h3 class="font-jura text-2xl text-red-600 mb-2">Lea</h3>
        <p class="font-mulish text-gray-300 mb-4">Instructrice certifiée</p>
        <button @click="toggleDetails('lea')" class="px-6 py-2 bg-red-600/10 hover:bg-red-600 text-red-600 hover:text-white rounded-full transition-all duration-300">
          Voir plus
        </button>
        <div v-if="activeInstructor === 'lea'" class="mt-6 text-gray-300 text-left space-y-4 animate-fadeIn">
          <p><span class="text-red-600 font-semibold">Formée par :</span> Greg, Jon Pascal, Matt Romond</p>
          <p><span class="text-red-600 font-semibold">Diplômes :</span> Instructeur certifié Krav Maga Worldwide Level 1</p>
          <p><span class="text-red-600 font-semibold">Occupations :</span> Cours collectifs SPORTCITY & Grez-Doiceau</p>
        </div>
        </div>
      </div>

      <!-- Greg -->
      <div class="relative group bg-gradient-to-b from-black/40 to-black/60 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl">
        <div class="p-8 text-center border-2 border-red-800/20 backdrop-blur-sm">
        <img src="~/public/images/image16.jpg" alt="Greg" class="rounded-full w-40 h-40 mx-auto mb-6 shadow-xl group-hover:scale-105 transition-transform duration-500 border-4 border-red-600/30">
        <h3 class="font-jura text-2xl text-red-600 mb-2">Greg</h3>
        <p class="font-mulish text-gray-300 mb-4">Instructeur et Fondateur du Club</p>
        <button @click="toggleDetails('greg')" class="px-6 py-2 bg-red-600/10 hover:bg-red-600 text-red-600 hover:text-white rounded-full transition-all duration-300">
          Voir plus
        </button>
        <div v-if="activeInstructor === 'greg'" class="mt-6 text-gray-300 text-left space-y-4 animate-fadeIn">
          <p><span class="text-red-600 font-semibold">Formé par :</span> Younnes Madani, Grzesiek Adamzyk, Jon Pascal, Thierry Viatour</p>
          <p><span class="text-red-600 font-semibold">Diplômes :</span> Instructeur certifié Krav Maga Worldwide Level 5, Fit2Fight A</p>
          <p><span class="text-red-600 font-semibold">Occupations :</span> Cours collectifs SPORTCITY & Grez-Doiceau, Personal trainings</p>
        </div>
        </div>
      </div>
      </div>
    </div>

    <!-- FAQ -->
    <div class="mx-auto mb-12">
      <!-- Titre FAQ -->
      <div class="mx-auto px-4 text-center relative py-16 m-10">
        <div class="absolute inset-0 bg-red-700/10 skew-y-3 transform -rotate-2"></div>
        <h2 class="text-4xl md:text-5xl font-jura text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800 uppercase mb-6 relative">
          F.A.Q.
        </h2>
      </div>
      <div class="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <div
        v-for="(faq, index) in faqs.slice(0, Math.ceil(faqs.length/2))"
        :key="index"
        class="border-b border-gray-600 py-4"
        >
        <button
          class="w-full flex justify-between items-center text-left text-lg font-mulish text-gray-300 hover:text-red-600 focus:outline-none"
          @click="toggleFaq(index)"
        >
          <span>{{ faq.question }}</span>
          <svg
          :class="{ 'transform rotate-180': faq.open }"
          class="w-5 h-5 transition-transform duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          />
          </svg>
        </button>
        <div
          v-show="faq.open"
          class="overflow-hidden transition-all duration-300 ease-in-out"
          :style="{ maxHeight: faq.open ? '500px' : '0px' }"
        >
          <p class="mt-3 text-gray-400 font-mulish">
          {{ faq.answer }}
          </p>
        </div>
        </div>
      </div>
      <div>
        <div
        v-for="(faq, index) in faqs.slice(Math.ceil(faqs.length/2))"
        :key="index + Math.ceil(faqs.length/2)"
        class="border-b border-gray-600 py-4"
        >
        <button
          class="w-full flex justify-between items-center text-left text-lg font-mulish text-gray-300 hover:text-red-600 focus:outline-none"
          @click="toggleFaq(index + Math.ceil(faqs.length/2))"
        >
          <span>{{ faq.question }}</span>
          <svg
          :class="{ 'transform rotate-180': faq.open }"
          class="w-5 h-5 transition-transform duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          />
          </svg>
        </button>
        <div
          v-show="faq.open"
          class="overflow-hidden transition-all duration-300 ease-in-out"
          :style="{ maxHeight: faq.open ? '500px' : '0px' }"
        >
          <p class="mt-3 text-gray-400 font-mulish">
          {{ faq.answer }}
          </p>
        </div>
        </div>
      </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "InfosPage",
  data() {
    return {
      activeInstructor: null,
      faqs: [
        {
          question: "Puis-je commencer en plein milieu d'année ?",
          answer: "Oui, vous pouvez commencer à tout moment. Nos cours sont conçus pour accueillir les nouveaux arrivants à n'importe quelle période.",
          open: false,
        },
        {
          question: "Quel équipement dois-je avoir ?",
          answer: "Pour participer aux cours, vous aurez besoin d'une coquille, d'un t-shirt, d'un pantalon confortable et de gants pour les sparrings.",
          open: false,
        },
        {
          question: "Comment s'inscrire ?",
          answer: "L'inscription se fait en ligne via le formulaire accessible sur la page \"S'inscrire\". Il suffit de suivre les étapes indiquées.",
          open: false,
        },
        {
          question: "Comment payer les cotisations ?",
          answer:
            "Dans un premier temps, il faut un compte activé. Ensuite connectez-vous, allez dans la section \"MON COMPTE\", et cliquez sur le bouton bleu \"Commander\". Les paiements peuvent se faire via virement bancaire ou par carte de crédit depuis le site de Paypal.",
          open: false,
        },
        {
          question: "Comment se déroule un cours de Krav Maga ?",
          answer:
            "Reportez-vous à la section \"le Cours\", le déroulement du cours y est expliqué en détail.",
          open: false,
        },
        {
          question: "Fait-on des combats full contact au cours ?",
          answer:
            "Oui et Non. Le Krav Maga est destiné à un apprentissage de techniques de self defense réalistes face à des attaques réalistes. Cela ne veut pas dire que vous allez être blessé au cours. En effet, lors de l'entraînement, dans les niveaux avancés, qui entraînent plus de contacts, un matériel de protection spécifique est utilisé pour garantir la sécurité des élèves. Il serait bien entendu complètement idiot de se blesser à l'entraînement et d'être, à cause de cela, dans l'impossibilité de se défendre le lendemain.",
          open: false,
        },
        {
          question: "Ai-je besoin d'une expérience préalable en self defense pour apprendre le Krav Maga ?",
          answer:
            "Non. Le Krav Maga est destiné à tout un chacun et ne nécessite donc pas d'expérience antérieure. Le Krav Maga est un système complet englobant aussi bien le combat à mains nues qu'armées sans oublier le combat au sol.",
          open: false,
        },
        {
          question: "Y a-t-il une différence dans l'enseignement du Krav Maga aux hommes et aux femmes ?",
          answer:
            "Non. Les techniques visent avant tout l'efficacité maximale sans souci d'esthétique, il n'y a donc pas de différence dans l'enseignement. La seule différence qu'il pourrait y avoir serait dans les explications de certaines situations dont les tentatives de viol.",
          open: false,
        },
        {
          question: "Aurais-je besoin d'un kimono ou d'une tenue spécifique ?",
          answer:
            "Non. Des vêtements confortables et adéquats pour une pratique sportive suffisent. Les seuls investissements à prévoir seront pour l'achat d'une coquille et du T-shirt du club (souci d'uniformité de la classe). Lors des sessions de sparring (non obligatoires), il vous faudra apporter : gants de boxe, protège-dents, protège-tibias.",
          open: false,
        },
        {
          question: "Y a-t-il des règles dans la pratique du Krav Maga ?",
          answer:
            "A l'entraînement, OUI, dans son application dans la rue, NON. Bien entendu, il faut mettre certaines règles à l'entraînement, ne serait-ce que par respect du partenaire et par souci de son intégrité physique.",
          open: false,
        },
      ],
    };
  },
 methods: {
    toggleDetails(instructor) {
      // Toggle the instructor details, close if already active
      this.activeInstructor = this.activeInstructor === instructor ? null : instructor;
    },
  
    toggleFaq(index) {
      this.faqs[index].open = !this.faqs[index].open;
    }
  }
};
</script>

<style scoped>
/* Custom styles for the instructeurs' details */
.text-left {
  text-align: left;
}
button {
  background: none;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  transition: color 0.3s ease;
}
button:hover {
  color: #fff;
}

.shadow-xl {
  box-shadow: 0px 0px 50px rgba(255, 255, 255, 0.147);
}
.rounded-lg {
  border-radius: 0.5rem;
}
</style>
