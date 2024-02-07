<template>
  <template v-if="isPending == true"> Carregando... </template>
  <template v-else>
    <p v-for="(drink, index) in drinkInfo.value" :key="index">
      {{ drink.title }}
    </p>
  </template>
</template>

<script setup>
const route = useRoute();

const drinkInfo = ref([]);
const isPending = ref(true);

const getDrink = async () => {
  try {
    const id = route.params.id;
    const useDrinks = useGetDrinks();

    const { getDrink } = useDrinks;

    const { data, pending } = await getDrink(`lookup.php?i=${id}`);
    drinkInfo.value = data;
    isPending.value = pending;
  } catch (e) {
    console.log("error" + e);
  }
};

onBeforeMount(() => {
  getDrink();
});
</script>
