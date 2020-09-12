<template>
  <ul class="social-links">
    <li class="social-links__item">
      <a
        class="social-links__link"
        href="https://www.facebook.com/majesticreggae/"
        target="_blank"
      >
        <g-image
          class="social-links__image"
          src="~/assets/icons/facebook-square.svg"
          alt="Facebook"
          title="Facebook"
        ></g-image>
      </a>
    </li>
    <li class="social-links__item">
      <a class="social-links__link" href="https://spotify.com/" target="_blank">
        <g-image
          class="social-links__image"
          src="~/assets/icons/spotify.svg"
          alt="Spotify"
          title="Spotify"
        ></g-image>
      </a>
    </li>
    <li class="social-links__item">
      <a
        class="social-links__link"
        href="https://www.youtube.com/user/majesticreggae"
        target="_blank"
      >
        <g-image
          class="social-links__image"
          src="~/assets/icons/youtube.svg"
          alt="Youtube"
          title="Youtube"
        ></g-image>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: "SocialLinks"
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

  &__item {
  }

  &__link {
    text-decoration: none;

    &:focus,
    &:hover {
      transition: 0.4s;
      animation: logo 0.4s forwards;
      filter: drop-shadow($hover-shadow-dark);
      fill: red;
    }

    &:last-of-type {
      padding-right: 0;
    }
  }

  &__image {
    min-height: 1rem;
    max-height: 3rem;
    height: 10vw;
    width: auto;
  }
}
</style>
