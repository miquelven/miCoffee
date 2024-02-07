<template>
  <template v-if="isPending == true">
    <ul class="containerCards">
      <li class="card" v-for="(item, index) of 8" :key="index">
        <div
          class="cardInfoImgLoading"
          style="display: flex; justify-content: center; align-items: center"
        >
          Loading...
        </div>
        <div class="contentCardInfo">
          <h3>--------</h3>
          <button>-------</button>
        </div>
      </li>
    </ul>
  </template>
  <template v-else>
    <div data-aos="zoom-in" data-aos-delay="600">
      <ul class="containerCards" v-if="drinksData">
        <li
          class="card"
          v-for="(drink, index) in drinksData.value"
          :key="index"
        >
          <div class="cardInfoImg">
            <img :src="drink.img" alt="Imagem de uma bebida" />
          </div>
          <div class="contentCardInfo">
            <h3>
              {{ drink.title }}
            </h3>
            <button @click="redirectMoreInfo(drink.id)">Show More</button>
          </div>
        </li>
      </ul>
    </div>
  </template>
</template>

<script setup>
const route = useRoute();
const router = useRouter();

const drinksData = ref({});

const query = route.params.slug;

const useDrinks = useGetDrinks();

const { getDrink } = useDrinks;

const isPending = ref(true);

const getDrinksData = async () => {
  try {
    const { data, pending } = await getDrink(`search.php?s=${query}`);

    drinksData.value = data;
    isPending.value = pending;
  } catch (e) {
    console.log("error" + e);
  }
};

const redirectMoreInfo = (id) => {
  router.push(`/drinksInfo/${id}`);
};

onBeforeMount(() => {
  getDrinksData();
});
</script>
