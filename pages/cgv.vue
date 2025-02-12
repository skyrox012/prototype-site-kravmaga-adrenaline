<template>
  <section class="bg-[#030806] text-[#F8F5F7] min-h-screen font-mulish overflow-x-hidden w-full">
    <!-- Hero header -->
    <div class="w-full text-center relative py-16">
      <div class="absolute inset-0 bg-[#110303] opacity-100 skew-y-3 transform -rotate-1"></div>
      <div class="relative z-10">
        <h1 class="text-5xl md:text-7xl font-jura text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800 uppercase mb-6">
          Conditions Générales de Vente
        </h1>
        <p class="text-gray-300">Dernière mise à jour : 12 février 2024</p>
      </div>
    </div>

    <!-- Contenu -->
<div class="w-full px-6 md:px-12 py-10">
  <div class="max-w-4xl mx-auto">
    <!-- Conditions Générales de Vente -->
    <div class="mb-12">
      <h2 class="text-2xl font-jura text-red-600 mb-6">1. Champ d’application</h2>
      <p class="text-gray-300 mb-4">
        Les présentes conditions générales de vente régissent les ventes de produits et services proposées par <strong>Krav Maga Adrenaline ASBL</strong>.
        En validant une commande sur le site, le client accepte sans réserve ces CGV.
      </p>

      <h2 class="text-2xl font-jura text-red-600 mt-8 mb-6">2. Produits et services</h2>
      <p class="text-gray-300 mb-4">
        Les produits et services proposés comprennent :<br>
        - L’inscription aux cours et stages de Krav Maga<br>
        - La vente de produits dérivés (t-shirts, sweats, équipements, etc.)
      </p>

      <h2 class="text-2xl font-jura text-red-600 mt-8 mb-6">3. Prix et modalités de paiement</h2>
      <p class="text-gray-300 mb-4">
        Les prix sont indiqués en euros (€), toutes taxes comprises (TTC).<br>
        Les moyens de paiement acceptés sont :<br>
        - Paiement en ligne sécurisé (PayPal ou virement bancaire)<br>
        - Paiement sur place (espèces ou virement préalable)
      </p>

      <h2 class="text-2xl font-jura text-red-600 mt-8 mb-6">4. Commandes</h2>
      <p class="text-gray-300 mb-4">
        Toute commande est validée après réception du paiement.<br>
        Krav Maga Adrenaline se réserve le droit d’annuler toute commande en cas de litige ou de stock indisponible.
      </p>

      <h2 class="text-2xl font-jura text-red-600 mt-8 mb-6">5. Livraison des produits</h2>
      <p class="text-gray-300 mb-4">
        Les commandes peuvent être :<br>
        - Remises en main propre lors d’un cours ou d’un stage<br>
        - Envoyées par courrier (avec frais de livraison indiqués lors de la commande)
      </p>

      <h2 class="text-2xl font-jura text-red-600 mt-8 mb-6">6. Droit de rétractation</h2>
      <p class="text-gray-300 mb-4">
        - Les produits physiques peuvent être retournés sous 14 jours après réception.<br>
        - Le droit de rétractation ne s’applique pas aux cours et stages déjà commencés.
      </p>

      <h2 class="text-2xl font-jura text-red-600 mt-8 mb-6">7. Responsabilité</h2>
      <p class="text-gray-300 mb-4">
        Krav Maga Adrenaline ne peut être tenu responsable des dommages résultant d’une mauvaise utilisation des produits ou d’un non-respect des consignes de sécurité.
      </p>

      <h2 class="text-2xl font-jura text-red-600 mt-8 mb-6">8. Protection des données personnelles</h2>
      <p class="text-gray-300 mb-4">
        Les données collectées sont utilisées uniquement pour le traitement des commandes et ne sont pas partagées avec des tiers.<br>
        Plus d'informations dans notre <NuxtLink to="/mentionslegales" class="text-red-600 hover:underline">Politique de confidentialité</NuxtLink>.
      </p>

      <h2 class="text-2xl font-jura text-red-600 mt-8 mb-6">9. Litiges et droit applicable</h2>
      <p class="text-gray-300 mb-4">
        En cas de litige, une solution à l’amiable sera recherchée en priorité. À défaut d’accord, les tribunaux belges seront seuls compétents.
      </p>
    </div>
  </div>
</div>

  </section>
</template>

<script>
export default {
  name: 'CGV'
}
</script>

<style scoped>
h2 {
  scroll-margin-top: 100px;
}

ul li {
  margin-bottom: 0.5rem;
}
</style>