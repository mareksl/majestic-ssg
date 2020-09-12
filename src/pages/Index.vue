<template>
  <Layout>
    <Hero />
    <Parallax image="img-1.jpg" />
    <About />
    <Parallax image="img-2.jpg" />
    <Gallery />
    <Parallax image="img-3.jpg" />
    <Concerts />
    <Parallax image="img-4.jpg" />
    <MusicAndVideo />
    <Parallax image="img-5.jpg" />
    <Contact />
    <Footer />
  </Layout>
</template>

<script>
import Parallax from "@/components/Parallax/Parallax";
import Hero from "@/components/sections/Hero/Hero";
import About from "@/components/sections/About/About";
import Gallery from "@/components/sections/Gallery/Gallery";
import Concerts from "@/components/sections/Concerts/Concerts";
import MusicAndVideo from "@/components/sections/MusicAndVideo/MusicAndVideo";
import Contact from "@/components/sections/Contact/Contact";
import Footer from "@/components/Footer/Footer";

export default {
  components: {
    Footer,
    Contact,
    MusicAndVideo,
    Concerts,
    Gallery,
    About,
    Parallax,
    Hero
  },
  metaInfo() {
    return {
      titleTemplate: "%s",
      title: this.$i18n.t("meta.fullTitle")
    };
  }
};
</script>

<style></style>
