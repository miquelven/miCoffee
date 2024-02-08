<template>
  <header>
    <div class="container">
      <h1 @click="$router.push('/')"><span>Mi</span>Drinks</h1>
      <div id="searchArea">
        <InputSearch :autofocus="true" placeholder="" />
        <Icon name="uil:search" color="white" id="searchIcon" />
      </div>
      <HeaderMenu :routes="routes" />
    </div>
  </header>
</template>

<script setup lang="ts">
const { routes } = routesApp();
</script>
