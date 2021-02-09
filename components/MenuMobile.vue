<template>
  <div>
    <div @click="toggleMenu">
      <MenuIcon class="d-block d-md-none cursor-pointer" />
    </div>
    <div class="menu-mobile" :class="{ active: isActive }">
      <div
        class="container py-3 d-flex align-items-center justify-content-between"
      >
        <SelectButton />
        <div @click="toggleMenu">
          <CloseButton class="close-button cursor-pointer" />
        </div>
      </div>
      <div class="list-menu container">
        <ul>
          <li @click="toggleMenu">
            <a href="#about">
              {{ $t("header.menu.about") }}
            </a>
          </li>
          <li @click="toggleMenu">
            <a href="#products">{{ $t("header.menu.products") }}</a>
          </li>
          <li @click="toggleMenu">
            <a href="#partners">{{ $t("header.menu.partners") }}</a>
          </li>
          <li @click="toggleMenu">
            <a href="#clients">{{ $t("header.menu.clients") }}</a>
          </li>
          <li @click="toggleMenu">
            <a href="#contact">{{ $t("header.menu.contact") }}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isActive: false
    };
  },
  methods: {
    toggleMenu() {
      this.isActive = !this.isActive;
    }
  }
};
</script>
<style>
.menu-mobile {
  width: 100vw;
  height: 100vh;
  background: var(--bg-primary-color);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1090;
  display: none;
}
.list-menu ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
.list-menu ul li {
  text-align: center;
  font-family: Raleway;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 1px;
  padding: 28px;
  border-bottom: 0.8px solid rgba(255, 255, 255, 0.1);
}
.list-menu ul li a {
  color: var(--secondary-color);
  text-transform: uppercase;
  transition: 300ms all;
}

.list-menu ul li a:hover {
  color: var(--primary-color);
}

@keyframes toLeft {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}

@keyframes toRight {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
}

.active {
  display: block !important;
  animation: toLeft 0.5s;
  transition: 500s all;
}
</style>
