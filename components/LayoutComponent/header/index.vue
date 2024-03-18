<template>
  <header data-aos="fade-down" data-aos-delay="500">
    <div class="container">
      <p id="logo" @click="$router.push('/')"><span>Mi</span>Drinks</p>
      <div id="searchArea">
        <InputSearch :autofocus="true" placeholder="Search" />
        <Icon name="uil:search" color="#6c757d" id="searchIcon" />
      </div>
      <LayoutComponentHeaderMenu :routes="routes" />
    </div>
  </header>
</template>

<script setup lang="ts">
const { routes } = routesApp();
</script>
