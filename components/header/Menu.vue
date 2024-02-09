<template>
  <nav>
    <ul class="menu" id="menuDesktop">
      <li v-for="(route, index) in props.routes" :key="index">
        <NuxtLink :to="route.path">
          <a href="#">{{ route.label }}</a>
        </NuxtLink>
      </li>
      <button @click="changeColor">
        <template v-if="colorMode.value == 'dark'">
          <Icon name="uil:sun" color="white" size="24" />
        </template>
        <template v-else>
          <Icon name="uil:moon" color="black" size="24" />
        </template>
      </button>
    </ul>
  </nav>
  <nav id="menuBar" ref="menuBar">
    <span
      id="menuIcon"
      ref="menuIcon"
      class="icon"
      @click="() => (showMenu = true)"
    >
      <Icon name="uil:align-justify" :color="colorControl" size="24" />
    </span>
    <span id="closeIcon" ref="closeIcon" @click="() => (showMenu = false)">
      <Icon name="uil:times" :color="colorControl" size="32" />
    </span>
    <ul class="menu">
      <button id="colorTheme" @click="changeColor">
        <Icon
          name="uil:sun"
          color="light"
          size="24"
          v-if="colorMode.preference == 'dark'"
        />
        <Icon name="uil:moon" color="light" size="24" v-else />
      </button>
      <span>Menu</span>

      <li v-for="(route, index) in props.routes" :key="index">
        <NuxtLink :to="route.path">
          <a href="#">{{ route.label }}</a>
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { watch, ref } from "vue";

const props = defineProps(["routes"]);

const showMenu = ref<boolean>(false);
const menuBar = ref<HTMLElement | null>(null);
const menuIcon = ref<HTMLElement | null>(null);
const closeIcon = ref<HTMLElement | null>(null);

watch(showMenu, () => {
  if (showMenu.value == true) {
    menuBar.value!.style.right = "0px";
    menuIcon.value!.style.display = "none";
    closeIcon.value!.style.display = "block";
  } else {
    menuBar.value!.style.right = "-100vw";
    closeIcon.value!.style.display = "none";
    setTimeout(() => {
      menuIcon.value!.style.display = "block";
    }, 300);
  }
});

const colorMode = useColorMode();
const changeColor = () =>
  (colorMode.preference = colorMode.preference === "dark" ? "light" : "dark");

const colorControl = computed(() =>
  colorMode.preference == "dark" ? "white" : "black"
);
</script>
