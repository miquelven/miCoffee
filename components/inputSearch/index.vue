<template>
  <input
    @keyup="redirectDrinkView"
    :placeholder="placeholder"
    :autofocus="autofocus"
  />
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

defineProps<{
  autofocus: boolean;
  placeholder: string;
}>();

const router = useRouter();

const redirectDrinkView = (e: KeyboardEvent) => {
  if (e.key === "Enter") {
    router.push(`/drinks/${(e.target as HTMLInputElement).value}`);
    (e.target as HTMLInputElement).value = "";
  }
};
</script>
