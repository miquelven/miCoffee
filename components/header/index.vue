<template>
  <header>
    <div>
      <h1><span>Mi</span>Coffee</h1>
      <div id="searchArea">
        <input type="text" />
        <Icon name="uil:search" color="white" id="searchIcon" />
      </div>
      <HeaderMenu :mobile="isMobile" :routes="routes" />
    </div>
  </header>
</template>

<script setup lang="ts">
const { routes } = routesApp();

const isMobile = ref(true);

const screenWidth = ref(0);

function handleResize() {
  screenWidth.value =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  if (screenWidth.value >= 770) {
    isMobile.value = false;
  } else {
    isMobile.value = true;
  }
}

if (typeof window !== "undefined") {
  window.addEventListener("resize", handleResize);

  onMounted(() => {
    screenWidth.value =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;

    // Configurar inicialmente o valor de handleResize()
    handleResize();
  });
}
</script>
