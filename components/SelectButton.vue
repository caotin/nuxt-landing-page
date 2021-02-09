<template>
  <div
    v-click-outside="hideSelect"
    class="main-select cursor-pointer"
    @click="toggleSelect"
    @blur="toggleSelect"
  >
    <div
      class="d-flex align-items-center justify-content-between selected-item"
    >
      <div class="d-flex">
        <img class="icon-select" :src="selected.icon" /> {{ selected.name }}
      </div>
      <div class="arrow down" />
    </div>

    <div class="list-items" :class="{ visible: show }">
      <div
        v-for="country in countries"
        :key="country.key"
        class="select-item d-flex align-items-center"
        @click="handleSelectItem(country)"
      >
        <div><img :src="country.icon" /> {{ country.name }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import ClickOutside from "vue-click-outside";

export default {
  directives: {
    ClickOutside
  },
  data() {
    return {
      selected: {
        key: "en",
        name: "ENG",
        icon: "/images/flags/ENG.png"
      },
      show: false,
      countries: [
        {
          key: "en",
          name: "ENG",
          icon: "/images/flags/ENG.png"
        }
      ]
    };
  },
  methods: {
    toggleSelect() {
      this.show = !this.show;
    },
    hideSelect() {
      this.show = false;
    },
    handleSelectItem(item) {
      this.selected = item;
      this.$i18n.setLocale(item.key);
    }
  }
};
</script>

<style scoped>
.main-select {
  border: 1px solid #fff;
  width: 130px;
  height: 48px;
  border-radius: 100px;
  padding: 10px;
  position: relative;
  transition: 300ms all;
}

@media screen and (max-width: 992px) {
  .main-select {
    width: 100px;
  }
}

.selected-item {
  height: 100%;
  color: #fff;
}

.arrow {
  border: solid #fff;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
}
.down {
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
}
.list-items {
  border: 1px solid #fff;
  border-radius: 2px;
  width: 130px;
  height: auto;
  transform: translate(0, 48px);
  transition: 300ms all;
  background: var(--bg-primary-color);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
  opacity: 0;
}
.select-item {
  height: 38px;
  width: 130px;
  color: #fff;
  padding: 5px 10px;
  transition: 300ms all;
}
.select-item:hover {
  height: 38px;
  width: 130px;
  background: #ddd;
}

.icon-select {
  height: 100%;
  width: auto;
  margin: auto 4px;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.visible {
  animation: fadeIn 300ms;
  opacity: 1;
}
</style>
