<template>
  <input
    @keyup="redirectDrinkView"
    :placeholder="placeholder"
    :autofocus="autofocus"
  />
</template>

<script setup>
defineProps(["autofocus", "placeholder"]);

const router = useRouter();

const redirectDrinkView = (e) => {
  if (e.key == "Enter") {
    router.push(`/drinks/${e.target.value}`);
    e.target.value = "";
  }
};
</script>
