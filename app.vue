<template>
  <NuxtLoadingIndicator color="#6c757d" :height="4" />
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
