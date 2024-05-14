<template>
  <Hero />
  <DrinkArea />
  <RandomDrink />
  <Filter />
</template>

<script setup>
definePageMeta({
  layout: "default",
});

useHead({
  title: `Mi Drinks`,
  meta: [
    {
      name: "description",
      content:
        "Welcome to MiDrinks, your ultimate destination for discovering and enjoying a wide variety of delicious drinks and cocktails. Explore recipes, mixology tips, and informative articles to enhance your skills and create memorable experiences. Join our community of beverage enthusiasts and embark on a journey of flavors and creativity. Cheers!",
    },
    {
      name: "keywords",
      content:
        "drinks, cocktails, mixology, recipes, bartending, beverages, beverage enthusiasts, drink recipes, cocktail recipes, mixology tips, cocktail culture",
    },
    {
      name: "author",
      content: "MiDrinks",
    },
    {
      name: "robots",
      content: "index, follow",
    },
    {
      name: "charset",
      content: "UTF-8",
    },
  ],
});
</script>
