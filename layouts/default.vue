<template>
  <Nuxt />
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;800&family=Mulish:wght@400;600&family=Raleway:wght@400;800&display=swap");

:root {
  --primary-color: #ff3232;
  --secondary-color: #fdfdfd;
  --bg-primary-color: #15161e;
  --bg-secondary-color: #1a1c25;
  --primary: #ff3232;
}

html {
  font-family: Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  scroll-behavior: smooth;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

body {
  background: var(--bg-primary-color);
}

@media (min-width: 1450px) {
  .container {
    max-width: 1400px;
    padding: 0;
    margin: 0 auto;
  }
}

.section-title {
  font-family: Raleway;
  font-size: 24px;
  line-height: 28px;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 10px;
  color: var(--primary);
  mix-blend-mode: normal;
}

.section-subtitle {
  font-family: Raleway;
  font-weight: 800;
  font-size: 48px;
  line-height: 56px;
  text-align: center;
  text-transform: uppercase;
  color: var(--secondary-color);
  mix-blend-mode: normal;
}

.section-description {
  font-family: Mulish;
  font-size: 16px;
  line-height: 32px;
  text-align: center;
  color: #e6e6e6;
}

@media screen and (max-width: 540px) {
  .section-title {
    font-size: 12px;
    line-height: 14px;
  }
  .section-subtitle {
    font-size: 26px;
    line-height: 31px;
  }
  .section-description {
    font-size: 16px;
    line-height: 32px;
  }
}

.owl-nav {
  display: none;
}

.cursor-pointer {
  cursor: pointer;
}

.owl-theme .owl-dots {
  display: flex;
  justify-content: center;
}
</style>
