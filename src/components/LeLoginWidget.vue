<script setup lang="ts">
  import LeInput from './LeInput.vue'
  import LeDivider from './LeDivider.vue'
  import LeButton from './LeButton.vue'
</script>

<template>
  <div class="le-login-widget">
    <div class="le-login-widget__aside">
      <div class="le-login-widget__aside-overlay" />
      <svg class="le-login-widget__aside-logo">
        <use href="#logo" />
      </svg>
    </div>
    <div class="le-login-widget__main">
      <form class="le-login-widget__form">
        <div class="le-login-widget__card">
          <le-input
            id="login"
            label="Identifiant"
            type="email"
          />
          <le-divider />
          <le-input
            id="password"
            label="Mot de passe"
            type="password"
          />
        </div>
        <le-button
          type="text"
          label="Continuer"
        />
      </form>
    </div>
  </div>
</template>

<style lang="scss">
  .le-login-widget {
    display: flex;
    height: 100%;
    gap: var(--spacing-responsive-m);
    justify-content: center;
    width: 100%;

    &__aside {
      align-items: center;
      background: center / cover no-repeat url("/assets/login-background.png");
      border: var(--stroke-width) solid var(--foreground-neutral-alternative-base);
      border-radius: var(--radius-l);
      display: flex;
      flex: 1;
      justify-content: center;
      position: relative;
      overflow: hidden;
    }

    &__aside-logo {
      height: 170px;
      position: relative;
      width: 170px;
    }

    &__aside-overlay {
      background-color: var(--overlay-base);
      backdrop-filter: blur(6px);
      height: 100%;
      position: absolute;
      width: 100%;
    }

    &__main {
      display: flex;
      flex: 1;
      justify-content: center;
      align-items: center;
    }

    &__form {
      align-items: flex-end;
      display: flex;
      flex-direction: column;
      gap: var(--spacing-static-xxl);
      max-width: 480px;
      width: 100%;
    }

    &__card {
      background-color: var(--background-weak);
      border: var(--stroke-width) solid var(--foreground-neutral-alternative-base);
      border-radius: var(--radius-l);
      gap: var(--spacing-static-xxs);
      padding: var(--spacing-static-s);
      width: 100%;
    }

    @media (max-width: 800px) {
      flex-direction: column;

      &__main {
        flex: unset;
      }
    }
  }
</style>
