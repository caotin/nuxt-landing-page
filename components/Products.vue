<template>
  <div class="d-flex-col">
    <section id="products">
      <div class="container">
        <div class="pt-5">
          <div class="row">
            <div class="col-12 col-lg-5">
              <div class="section-title">
                {{ $t("products.title") }}
              </div>
              <div class="section-subtitle text-break">
                {{ $t("products.subtitle") }}
              </div>
            </div>
            <div class="col-12 col-lg-7 text-left section-description">
              {{ $t("products.descriptions") }}
            </div>
            <div class="row my-5">
              <ProductItem
                v-for="(product, index) in products"
                :key="index"
                class="d-none d-md-block col-12 col-md-6 col-lg-4"
                :title="product.title"
                :description="product.description"
                :src="product.src"
              />
            </div>
            <no-ssr>
              <Carousel
                v-bind="slickOptions"
                class="d-block d-md-none product-item m-4"
                :items="1"
                :dot="true"
              >
                <ProductItem
                  v-for="(product, index) in products"
                  :key="index"
                  class="w-100"
                  :title="product.title"
                  :description="product.description"
                  :src="product.src"
                />
              </Carousel>
            </no-ssr>
          </div>
        </div>
      </div>
    </section>
    <img class="product-image-bottom" src="/images/background-wave.png" />
  </div>
</template>

<script>
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export default {
  data() {
    return {
      slickOptions: {
        slidesToShow: 1,
        arrows: false
      },
      products: [
        {
          title: "Live Casino",
          description:
            "Vivo LiveCasino, HoGaming Live Casino, BPlay LiveCasino",
          src: "/images/products/product-1.png"
        },
        {
          title: "Fishing Game",
          description: "BPlay Fishing 2D, BPlay Fishing 3D",
          src: "/images/products/product-4.png"
        },
        {
          title: "Sport Book",
          description: "BTI Sportsbook, BPlay Sportsbook",
          src: "/images/products/product-5.png"
        },
        {
          title: "Quick Number",
          description: "Keno, Number Games, Lottery",
          src: "/images/products/product-8.png"
        },
        {
          title: "White Label",
          description: "Bplay White Label",
          src: "/images/products/product-2.png"
        },
        {
          title: "Slots",
          description: "BPlay Slots, Jackpot Slots",
          src: "/images/products/product-6.png"
        },
        {
          title: "Seamless API",
          description: "Seamless API",
          src: "/images/products/product-9.png"
        },
        {
          title: "Full Package",
          description: "Full Package",
          src: "/images/products/product-3.png"
        },
        {
          title: "Table Game",
          description: "Table Game",
          src: "/images/products/product-7.png"
        }
      ]
    };
  }
};
</script>

<style>
#products {
  background: url("/images/background-product.png");
  min-height: 100vh;
  width: 100%;
  background-size: 100% auto;
  background-position: top center;
  background-repeat: no-repeat;
  background-color: var(--bg-secondary-color);
}

.product-image-bottom {
  width: 100%;
  height: auto;
}

.product-item {
  overflow: hidden;
}
</style>
