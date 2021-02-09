<template>
  <section class="header-container">
    <header id="header" class="d-flex align-items-center">
      <div class="container">
        <div class="d-flex align-items-center justify-content-between">
          <a href="/" class="logo d-none d-md-block">
            <Logo />
          </a>

          <nav class="nav-menu d-none d-md-block">
            <ul>
              <li>
                <a href="#about">
                  {{ $t("header.menu.about") }}
                </a>
              </li>
              <li>
                <a href="#products">{{ $t("header.menu.products") }}</a>
              </li>
              <li>
                <a href="#partners">{{ $t("header.menu.partners") }}</a>
              </li>
              <li>
                <a href="#clients">{{ $t("header.menu.clients") }}</a>
              </li>
              <li>
                <a href="#contact">{{ $t("header.menu.contact") }}</a>
              </li>
            </ul>
          </nav>

          <SelectButton />

          <MenuMobile />
        </div>
      </div>
    </header>
    <section class="banner">
      <div class="container">
        <div class="header-title">
          <h1>CASINO PLAYGAME</h1>
        </div>
        <a class="header-scroll text-center" href="#about">
          <div class="text-white">
            Scroll
          </div>
          <ArrowDown />
        </a>
      </div>
    </section>
  </section>
</template>

<style>
.header-container {
  height: 100vh;
  background: url("/images/banner.png");
  background-size: cover;
  background-position: center bottom;
  background-repeat: no-repeat;
}

#header {
  width: 100%;
  transition: all 0.5s;
  height: 125px;
}

#header .logo {
  max-height: 50px;
  padding: 0;
}

#header .logo img {
  max-height: 50px;
}

#header a {
  text-decoration: none;
}

@media (max-width: 992px) {
  #header {
    border: 0;
    padding: 15px 0;
  }
}

.nav-menu {
  height: 100%;
}

.nav-menu ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

.nav-menu > ul {
  display: flex;
}

.nav-menu > ul > li {
  position: relative;
  white-space: nowrap;
  margin: 0 12px;
}

.nav-menu a {
  display: block;
  color: var(--secondary-color);
  transition: 0.3s;
  font-size: 1rem;
  padding: 11px 0;
  font-family: "Raleway", sans-serif;
  font-weight: bold;
  line-height: 19px;
  text-transform: uppercase;
}

@media screen and (max-width: 992px) {
  .nav-menu a {
    padding: 8px 0;
    line-height: 13px;
    font-size: 14px;
  }
  .nav-menu > ul > li {
    margin: 0 6px;
  }
}

.nav-menu > ul > li > a:before {
  content: "";
  position: absolute;
  width: 100%;
  height: 2px;
  bottom: -2px;
  left: 0;
  background-color: var(--primary-color);
  visibility: hidden;
  width: 0px;
  transition: all 0.3s ease-in-out 0s;
}

.nav-menu a:hover:before,
.nav-menu li:hover > a:before,
.nav-menu .active > a:before {
  visibility: visible;
  width: 100%;
}

.nav-menu a:hover,
.nav-menu .active > a,
.nav-menu li:hover > a {
  color: var(--primary-color);
}
.banner {
  position: relative;
  width: 100%;
  height: calc(100vh - 125px);
}

.header-title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, calc(-50% - 125px / 2));
}

.header-title h1 {
  font-family: Raleway;
  font-weight: 800;
  font-size: 96px;
  line-height: 113px;
  text-align: center;
  mix-blend-mode: normal;
  text-shadow: 0px 0px 50px rgba(0, 0, 0, 0.4);
  background-image: linear-gradient(#ffffff, #ffecbc);
  color: transparent;
  background-clip: text;
  width: min-content;
}

@media screen and (max-width: 992px) {
  .header-title h1 {
    font-size: 66px;
    line-height: 76px;
  }
}

@media screen and (max-width: 540px) {
  .header-title h1 {
    font-size: 36px;
    line-height: 42px;
  }
}

@keyframes arrowmove {
  0% {
    bottom: 80px;
  }
  50% {
    bottom: 50px;
  }
  0% {
    bottom: 80px;
  }
}
.header-scroll {
  position: absolute;
  cursor: pointer;
  font-size: 30px;
  bottom: 80px;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: arrowmove 2s infinite;
  text-decoration: none !important;
}
</style>
