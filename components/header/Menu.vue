<template>
  <nav>
    <ul class="menu" id="menuDesktop">
      <li v-for="(route, index) in props.routes" :key="index">
        <NuxtLink :to="route.path">
          <a href="#">{{ route.label }}</a>
        </NuxtLink>
      </li>
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
      <span>Menu</span>
      <input type="text" id="input" />

      <li v-for="(route, index) in props.routes" :key="index">
        <NuxtLink :to="route.path">
          <a href="#">{{ route.label }}</a>
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { onMounted, watch, ref } from "vue";

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
    menuBar.value!.style.right = "-170px";
    closeIcon.value!.style.display = "none";
    setTimeout(() => {
      menuIcon.value!.style.display = "block";
    }, 300);
  }
});
</script>
