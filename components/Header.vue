<template>
  <header>
    <div>
      <h1><span>Mi</span>Coffee</h1>
      <input type="text" />
      <nav>
        <ul>
          <li v-for="(route, index) in routes" :key="index">
            <NuxtLink :to="route.path">
              <a href="#">{{ route.label }}</a>
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
const { routes } = routesApp();
</script>
