<script setup lang="ts">
const showScroll = ref<boolean>(false);

const userScroll = () => {
  if (window.scrollY > 600) {
    showScroll.value = true;
  } else {
    showScroll.value = false;
  }
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

onBeforeMount(() => {
  window.removeEventListener("scroll", () => userScroll());
});

onMounted(() => {
  window.addEventListener("scroll", () => userScroll());
});
</script>

<template>
  <button
    :onClick="() => scrollToTop()"
    class="shadow-sm shadow-black/60 transition-all duration-300 fixed bottom-10 right-10 py-4 px-4 rounded-full font-bold bg-[#ced4da] dark:bg-[#2e3439] rotate-90 hover:bg-[#e9ecef] dark:hover:bg-[#394147] hover:shadow-md hover:shadow-black/20"
    :class="`${showScroll ? 'z-10 opacity-100' : 'z-[-1] opacity-0'}`"
  >
    <
  </button>
</template>
