<template>
  <ul class="social-links">
    <li class="social-links__item">
      <a
        class="social-links__link"
        href="https://www.facebook.com/majesticreggae/"
        target="_blank"
      >
        <IconFacebook class="social-links__icon" />
      </a>
    </li>
    <li class="social-links__item">
      <a class="social-links__link" href="https://spotify.com/" target="_blank">
        <IconSpotify class="social-links__icon" />
      </a>
    </li>
    <li class="social-links__item">
      <a
        class="social-links__link"
        href="https://www.youtube.com/user/majesticreggae"
        target="_blank"
      >
        <IconYoutube class="social-links__icon" />
      </a>
    </li>
  </ul>
</template>

<script>
import IconFacebook from "@/assets/icons/facebook-square.svg";
import IconSpotify from "@/assets/icons/spotify.svg";
import IconYoutube from "@/assets/icons/youtube.svg";

export default {
  name: "SocialLinks",
  components: {
    IconFacebook,
    IconSpotify,
    IconYoutube
  }
};
</script>

<style lang="scss" scoped>
@import "src/styles/variables/colors";
@import "src/styles/variables/shadows";

.social-links {
  display: flex;
  width: 100%;
  margin: 4vh 0;
  padding: 4vh 0;
  border-top: 4px dashed $color-primary-dark;
  justify-content: space-around;

  &__link {
    text-decoration: none;
    transition: 0.4s;

    &:focus,
    &:hover {
      transition: 0.4s;
      animation: logo 0.4s forwards;
      filter: drop-shadow($hover-shadow-dark);

      .social-links__icon {
        fill: $color-accent-light;
      }
    }
  }

  &__icon {
    display: block;
    transition: 0.4s;
    fill: $color-primary-dark;
    min-height: 2rem;
    max-height: 4rem;
    height: 8vw;
    width: auto;
  }
}
</style>
