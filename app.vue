<template>
  <NuxtLoadingIndicator />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
  title: "Mi Drinks",
  meta: [{ name: "description", content: "Amazing site for drinks." }],
});
</script>
