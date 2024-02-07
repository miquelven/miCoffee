<template>
  <input @keyup="redirectDrinkView" :autofocus="autofocus" />
</template>

<script setup>
defineProps(["autofocus"]);

const router = useRouter();

const redirectDrinkView = (e) => {
  if (e.key == "Enter") {
    router.push(`/drinks/${e.target.value}`);
    e.target.value = "";
  }
};
</script>
