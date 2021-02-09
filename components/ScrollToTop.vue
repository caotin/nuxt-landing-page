<template>
  <a class="scroll-container" :class="{ 'scroll-active': active }" href="#">
    <ArrowUp />
    <div class="text">Top</div>
  </a>
</template>

<script>
export default {
  data() {
    return {
      active: false
    };
  },
  created() {
    if (process.client) {
      // eslint-disable-next-line nuxt/no-globals-in-created
      window.addEventListener("scroll", this.handleScroll);
    }
  },
  destroyed() {
    // eslint-disable-next-line nuxt/no-env-in-hooks
    if (process.client) {
      window.removeEventListener("scroll", this.handleScroll);
    }
  },
  methods: {
    handleScroll() {
      if (window.scrollY > 400) {
        this.active = true;
      } else {
        this.active = false;
      }
    }
  }
};
</script>

<style>
.scroll-container {
  position: fixed;
  bottom: 30px;
  right: 30px;
  cursor: pointer;
  opacity: 0;
  text-decoration: none;
}

.scroll-container:hover {
  text-decoration: none;
}

@keyframes fadeInScroll {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.scroll-active {
  animation: fadeInScroll 400ms;
  opacity: 1;
}

.scroll-container .text {
  font-family: Raleway;
  font-size: 30px;
  line-height: 35px;
  text-align: center;
  letter-spacing: 1px;
  color: #ffffff;
  text-decoration: none;
  z-index: 9999;
}
</style>
