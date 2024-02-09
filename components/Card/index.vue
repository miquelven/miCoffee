<template>
  <template v-if="isPending == true">
    <li class="drinkCard" data-aos="fade-up">
      <div class="pendingMode">
        <p>Loading...</p>
      </div>
      <p>--------</p>
      <span>-----</span>
    </li>
  </template>

  <template v-else>
    <div data-aos="zoom-in">
      <div
        class="imgDrink"
        :style="{ backgroundImage: `url(${drinkInfo.img})` }"
      ></div>
      <div class="infosDrink">
        <h4>Instructions:</h4>
        <p>{{ drinkInfo.instructions }}</p>
        <h6>Ingredients</h6>
        <ul>
          <li v-for="(ingredient, index) in drinkInfo.ingredients" :key="index">
            {{ ingredient }}
          </li>
        </ul>
        <button @click="redirectShowMore(drinkInfo.id)">Show More</button>
      </div>
    </div>
    <p>{{ drinkInfo.title }}</p>
    <span>{{ drinkInfo.alcoholic }}</span>
  </template>
</template>

<script setup lang="ts">
defineProps(["drinkInfo", "isPending"]);

const router = useRouter();

const redirectShowMore = (id: string) => {
  router.push(`drinksInfo/${id}`);
};
</script>
