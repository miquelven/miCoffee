<template>
  <h2>Filter List Drinks</h2>
  <form @submit.prevent="filterDrinks">
    <label name="isAlcoholic">
      <span> Alcoholic </span>
      <select v-model="isAlcoholic" id="isAlcoholic">
        <option value=""></option>
        <option value="Alcoholic">Yes</option>
        <option value="Non_Alcoholic">No</option>
      </select>
    </label>

    <label name="category">
      <span> Drink </span>
      <select v-model="category" id="category">
        <option value=""></option>
        <option value="Ordinary_Drink">Ordinary Drink</option>
        <option value="Cocktail">Cocktail</option>
      </select>
    </label>

    <label name="glass">
      <span> Glass </span>
      <select v-model="glass" id="glass">
        <option value=""></option>
        <option value="Cocktail_glass">Cocktail Glass</option>
        <option value="Champagne_flute">Champagne Flute</option>
      </select>
    </label>

    <button>Search</button>
  </form>
</template>

<script setup>
const isAlcoholic = ref("");
const glass = ref("");
const category = ref("");

const emits = defineEmits(["filter"]);

const filterDrinks = () => {
  const datas = [isAlcoholic.value, category.value, glass.value];
  emits("filter", datas);
};
</script>
