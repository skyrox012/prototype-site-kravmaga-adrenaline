
<template>
    <Navbar />
  <div>
    <Navbar />
    <main class="pt-[60px]">
      <NuxtPage />
    </main>
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>
