<template>
  <header>
    <div class="container">
      <h1 @click="$router.push('/')"><span>Mi</span>Coffee</h1>
      <div id="searchArea">
        <input type="text" autofocus />
        <Icon name="uil:search" color="white" id="searchIcon" />
      </div>
      <HeaderMenu :routes="routes" />
    </div>
  </header>
</template>

<script setup lang="ts">
const { routes } = routesApp();
</script>
