<template>
  <section id="about" class="pt-5">
    <div class="container">
      <div class="section-title">
        {{ $t("about.title") }}
      </div>
      <div class="section-subtitle">
        {{ $t("about.subtitle") }}
      </div>
      <div class="section-description mx-6 mt-2">
        {{ $t("about.description") }}
      </div>
      <img class="maps" src="/images/maps.png" />
    </div>
    <div class="about-banner">
      <div class="container">
        <div class="banner-content">
          <div class="title-banner">
            <div class="number mt-3">
              15
            </div>
            <div class="years">
              {{ $t("about.banner.years") }}
            </div>
            <div class="text">
              {{ $t("about.banner.text") }} <span>iGaming</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.maps {
  width: 100%;
  height: auto;
}

.about-banner {
  background: linear-gradient(
      180deg,
      #15161e 7.29%,
      rgba(21, 22, 30, 0.38) 100%
    ),
    url("/images/about-banner.png"), url("/images/about-banner.png"),
    url("/images/about-banner.png");
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 628px;
}

.about-banner img {
  transform: translate(0px, -20%);
  width: 100%;
  height: auto;
}

.about-banner .title-banner {
  width: 357px;
  height: 452px;
  background: rgba(21, 22, 30, 0.9);
  border-radius: 0px 0px 20px 20px;
}

@media screen and (max-width: 768px) {
  .about-banner .title-banner {
    margin: 0 auto;
  }
}

.title-banner .number {
  font-family: Roboto;
  font-weight: bold;
  font-size: 200px;
  line-height: 234px;
  text-align: center;
  color: var(--primary);
  text-transform: uppercase;
}

.title-banner .years {
  font-family: Mulish;
  font-weight: 600;
  font-size: 70px;
  line-height: 88px;
  text-align: center;
  text-transform: uppercase;
  color: var(--secondary-color);
}

.title-banner .text {
  font-family: Mulish;
  font-size: 30px;
  line-height: 38px;
  text-align: center;
  color: var(--secondary-color);
}

.title-banner .text span {
  color: var(--primary);
}

.about-banner .banner-content {
  position: relative;
}

@media screen and (max-width: 768px) {
  .about-banner .title-banner {
    width: 253px;
    height: 281px;
  }
  .title-banner .number {
    font-size: 96px;
    line-height: 112px;
  }
  .title-banner .years {
    font-size: 26px;
    line-height: 33px;
  }
  .title-banner .text {
    font-size: 18px;
    line-height: 23px;
    width: 50%;
    margin: 0 auto;
  }
}
</style>
