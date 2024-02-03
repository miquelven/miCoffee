<template>
  <nav v-if="!props.mobile">
    <ul class="menu">
      <li v-for="(route, index) in props.routes" :key="index">
        <NuxtLink :to="route.path">
          <a href="#">{{ route.label }}</a>
        </NuxtLink>
      </li>
    </ul>
  </nav>
  <nav v-else id="menuBar" ref="menuBar">
    <span
      id="menuIcon"
      ref="menuIcon"
      class="icon"
      @click="() => (showMenu = true)"
    >
      <Icon name="uil:align-justify" color="white" size="24" />
    </span>
    <span id="closeIcon" ref="closeIcon" @click="() => (showMenu = false)">
      <Icon name="uil:times" color="red" size="32" />
    </span>
    <ul class="menu">
      <span>Menu</span>
      <input type="text" v-if="showInput" />

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

const props = defineProps(["mobile", "routes"]);

const showMenu = ref(false);
const menuBar = ref(null);
const menuIcon = ref(null);
const closeIcon = ref(null);
const showInput = ref(false);

watch(showMenu, () => {
  if (showMenu.value == true) {
    menuBar.value.style = "right: 0px;";
    menuIcon.value.style = "opacity: 0";
    closeIcon.value.style = "display: block";
  } else {
    menuBar.value.style = "right: -170px";
    closeIcon.value.style = "display: none";
    setTimeout(() => (menuIcon.value.style = "opacity: 1"), 300);
  }
});

// CONTROLE DA LARGURA DA TELA PARA MOSTRAR O INPUT NO MENU

function handleResize() {
  var screenWidth =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  if (screenWidth <= 440) {
    showInput.value = true;
  } else {
    showInput.value = false;
  }
}

if (typeof window !== "undefined") {
  window.addEventListener("resize", handleResize);

  // Lembre-se de usar .value aqui para acessar as propriedades reativas
  watch(showMenu, () => {
    handleResize();
  });

  onMounted(() => {
    // Configurar inicialmente o valor de handleResize()
    handleResize();
  });
}
</script>

<style lang="scss" scoped></style>
