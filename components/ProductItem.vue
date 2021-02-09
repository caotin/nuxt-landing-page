<template>
  <div class="d-flex-col justify-content-center align-items-center py-3">
    <img :src="src" class="rounded product-image" />

    <div class="product-button py-3">
      <img src="/images/background-button.png" />
      <a href="#">
        <span>
          {{ title }}
        </span>
      </a>
    </div>

    <div class="section-description text-center">
      {{ description }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    },
    description: {
      type: String,
      default: ""
    }
  }
};
</script>

<style>
.product-image {
  border-radius: 5px;
  width: 100%;
  height: auto;
}

.product-button {
  position: relative;
}

.product-button img {
  width: 100%;
  height: auto;
}

.product-button span {
  font-family: Raleway;
  font-weight: bold;
  font-size: 30px;
  line-height: 35px;
  text-align: center;
  letter-spacing: 1px;
  color: #ffffff;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  white-space: nowrap;
  cursor: pointer;
  transition: 500ms all;
}

.product-button span:hover {
  color: var(--primary);
}

@media screen and (max-width: 960px) {
  .product-button span {
    font-size: 24px;
  }
}
</style>
