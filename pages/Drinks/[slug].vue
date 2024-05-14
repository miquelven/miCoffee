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
  <template v-else-if="drinksData && drinksData.length > 0">
    <div data-aos="zoom-in" data-aos-delay="600">
      <ul class="containerCards">
        <li class="card" v-for="(drink, index) in drinksData" :key="index">
          <div class="cardInfoImg">
            <img :src="drink.img" alt="Imagem de uma bebida" />
          </div>
          <div class="contentCardInfo">
            <h5>
              {{ drink.title }}
            </h5>
            <button @click="redirectShowMore(drink.title, drink.id)">
              Show More
            </button>
          </div>
        </li>
      </ul>
    </div>
  </template>

  <template v-else>
    <div id="noResults"><p>No results found</p></div>
  </template>
</template>

<script setup lang="ts">
useHead({
  title: `Mi Drinks - Drinks`,
  meta: [
    {
      name: "description",
      content:
        "Explore a variety of drinks that match the searched letters. Discover a wide selection of delicious and refreshing cocktails that meet your specific search criteria.",
    },
    {
      name: "keywords",
      content:
        "drinks, cocktails, search results, alphabetical search, mixed drinks, beverage search, cocktail search, drink names, drink finder",
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

const route = useRoute();
const router = useRouter();

const query = route.params.slug;

const useDrinks = useGetDrinks();

const { getDrink } = useDrinks;

const { data: drinksData, pending: isPending } = await getDrink(
  `search.php?s=${query}`
);

const redirectShowMore = (name: string, id: number) => {
  localStorage.setItem("drinkId", JSON.stringify(id));
  const formatedName = name.split(" ").join("-");
  router.push(`/drinksInfo/${formatedName}`);
};
</script>
