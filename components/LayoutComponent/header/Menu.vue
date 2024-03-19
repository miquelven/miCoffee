<template>
  <nav>
    <ul class="menu" id="menuDesktop">
      <li v-for="(route, index) in props.routes" :key="index">
        <NuxtLink :to="route.path">
          <a href="#">{{ route.label }}</a>
        </NuxtLink>
      </li>
      <button @click="toggleDark()">
        <template v-show="isDark == true">
          <Icon name="uil:sun" color="light" size="24" />
        </template>
        <template v-show="isDark == false">
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
      <Icon name="uil:align-justify" color="white" size="24" />
    </span>
    <span id="closeIcon" ref="closeIcon" @click="() => (showMenu = false)">
      <Icon name="uil:times" color="white" size="32" />
    </span>
    <ul class="menu">
      <button id="colorTheme" @click="toggleDark()">
        <template v-show="isDark == true">
          <Icon name="uil:sun" color="light" size="24" />
        </template>

        <template v-show="isDark == false">
          <Icon name="uil:moon" color="black" size="24" />
        </template>
      </button>
      <span>Menu</span>

      <li
        v-for="(route, index) in props.routes"
        :key="index"
        @click="closeMenu()"
      >
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

const openMenu = () => {
  console.log("chamou");
  menuBar.value!.style.right = "0px";
  menuBar.value!.style.position = "fixed";
  menuIcon.value!.style.display = "none";
  closeIcon.value!.style.display = "block";
};

const closeMenu = () => {
  showMenu.value = false;
  console.log("chamoucloseMenu");
  menuBar.value!.style.right = "-100vw";
  menuBar.value!.style.position = "absolute";

  closeIcon.value!.style.display = "none";
  setTimeout(() => {
    menuIcon.value!.style.display = "block";
  }, 300);
};

const menuControl = () => (showMenu.value == true ? openMenu() : closeMenu());

watch(showMenu, () => {
  menuControl();
});

const isDark = useDark({
  selector: "html",
  attribute: "class",
  valueDark: "dark",
  valueLight: "light",
});
const toggleDark = useToggle(isDark);
</script>
