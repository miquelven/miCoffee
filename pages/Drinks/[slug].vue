<template>
  <template v-if="isPending == true">
    <ul class="containerCards">
      <li class="card" v-for="index of 8" :key="index">
        <div
          class="cardInfoImgLoading"
          style="display: flex; justify-content: center; align-items: center"
        >
          Loading...
        </div>
        <div class="contentCardInfo">
          <span>--------</span>
          <button>-------</button>
        </div>
      </li>
    </ul>
  </template>
  <template v-else>
    <div data-aos="zoom-in" data-aos-delay="600">
      <ul class="containerCards" v-if="drinksData">
        <li class="card" v-for="(drink, index) in drinksData" :key="index">
          <div class="cardInfoImg">
            <img :src="drink.img" alt="Imagem de uma bebida" />
          </div>
          <div class="contentCardInfo">
            <h5>
              {{ drink.title }}
            </h5>
            <button @click="redirectMoreInfo(drink.id)">Show More</button>
          </div>
        </li>
      </ul>
    </div>
  </template>
</template>

<script setup lang="ts">
const route = useRoute();
const router = useRouter();

const query = route.params.slug;

const useDrinks = useGetDrinks();

const { getDrink } = useDrinks;

const { data: drinksData, pending: isPending } = await getDrink(
  `search.php?s=${query}`
);

const redirectMoreInfo = (id: string) => {
  router.push(`/drinksInfo/${id}`);
};
</script>
