<template>
  <section id="clients" class="pt-5">
    <div class="container">
      <div class="section-title">
        {{ $t("clients.title") }}
      </div>
      <div class="section-subtitle">
        {{ $t("clients.subtitle") }}
      </div>
      <div class="d-flex client-images my-5">
        <img v-for="(client, index) in clients" :key="index" :src="client" />
      </div>
    </div>
    <Footer />
  </section>
</template>
<script>
export default {
  data() {
    return {
      clients: [
        "/images/clients/1.png",
        "/images/clients/2.png",
        "/images/clients/5.png",
        "/images/clients/6.png",
        "/images/clients/9.png",
        "/images/clients/12.png",
        "/images/clients/16.png",
        "/images/clients/bet365.png",
        "/images/clients/betfair.png",
        "/images/clients/betway.png",
        "/images/clients/bwin.png",
        "/images/clients/williamhill.png"
      ]
    };
  }
};
</script>
<style>
#clients {
  width: 100%;
  background: url(/images/background-footer.png);
  background-size: 100% auto;
  background-position: bottom;
  background-repeat: no-repeat;
}

.client-images {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.client-images img {
  padding: 10px;
  width: 33.33%;
  height: auto;
}

@media screen and (min-width: 768px) {
  .client-images img {
    width: auto;
    height: auto;
  }
}
</style>
