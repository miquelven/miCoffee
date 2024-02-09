<template>
  <header data-aos="fade-down" data-aos-delay="500">
    <div class="container">
      <h1 @click="$router.push('/')"><span>Mi</span>Drinks</h1>
      <div id="searchArea">
        <InputSearch :autofocus="true" placeholder="Search" />
        <Icon name="uil:search" color="white" id="searchIcon" />
      </div>
      <HeaderMenu :routes="routes" />
    </div>
  </header>
</template>

<script setup lang="ts">
const { routes } = routesApp();
</script>
