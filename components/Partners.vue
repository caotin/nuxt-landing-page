<template>
  <section id="partners" class="py-5">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-6">
          <img class="partner-image" src="/images/partners/partner-image.png" />
        </div>
        <div class="col-12 col-md-6 py-5">
          <div class="section-title text-left">
            {{ $t("partners.title") }}
          </div>
          <div class="section-subtitle text-left">
            {{ $t("partners.subtitle") }}
          </div>
          <div class="section-description text-left">
            {{ $t("partners.descriptions") }}
          </div>
          <div class="partners">
            <img
              v-for="(partner, index) in partners"
              :key="index"
              :src="partner"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      partners: [
        "/images/partners/sbtech.png",
        "/images/partners/iovation.png",
        "/images/partners/seon.png",
        "/images/partners/hogaming.png",
        "/images/partners/vivo.png"
      ]
    };
  }
};
</script>
<style>
#partners {
  background: url(/images/partners/vector.png);
  background-size: contain;
  background-repeat: no-repeat;
}
.partner-image {
  width: 100%;
  height: auto;
}
.partners {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.partners img {
  padding: 5px;
  width: 33.33%;
  height: auto;
}
</style>
