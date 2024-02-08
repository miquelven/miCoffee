<template>
  <template v-if="isPending == true"> Carregando... </template>
  <template v-else>
    <div v-if="drinkInfo" id="drinkInfoArea">
      <div
        v-for="(drink, index) in drinkInfo.value"
        :key="index"
        class="cardInfo"
      >
        <div class="cardInfoImgArea">
          <img data-aos="zoom-in" :src="drink.img" alt="Imagem de uma bebida" />
          <div
            class="cardInfoContent"
            data-aos="fade-right"
            data-aos-delay="500"
          >
            <h2>{{ drink.title }}</h2>
            <p>
              <span>Alcoholic:</span>
              {{ drink.alcoholic == "Alcoholic" ? "Yes" : "No" }}
            </p>
            <p><span>Category:</span> {{ drink.category }}</p>
            <p><span>Instructions:</span> {{ drink.instructions }}</p>
          </div>
        </div>

        <div id="cardInfoIngredients">
          <h2 data-aos="fade-left" data-aos-delay="650">Ingredients</h2>
          <ul data-aos="fade-up" data-aos-delay="750">
            <li
              v-for="(ingredient, index) in drink.ingredients"
              :key="index"
              data-aos="fade-up"
            >
              <p>
                {{ ingredient }}
              </p>
              <div>
                <img
                  :src="`https://www.thecocktaildb.com/images/ingredients/${ingredient}.png`"
                  alt="sd"
                />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </template>
</template>

<script setup>
const route = useRoute();

const drinkInfo = ref([]);
const ingredients = ref([]);
const isPending = ref(true);

const getIngredients = async (d) => {
  for (let i = 0; i < d.value[0].ingredients.length; i++) {
    ingredients.value = await useFetch(
      `https://www.thecocktaildb.com/images/ingredients/${d.value[0].ingredients[i]}.png`
    );
    setTimeout(() => console.log(ingredients.value), 400);
  }
};

const getDrink = async () => {
  try {
    const id = route.params.id;
    const useDrinks = useGetDrinks();

    const { getDrink } = useDrinks;

    const { data, pending } = await getDrink(`lookup.php?i=${id}`);
    drinkInfo.value = data;
    isPending.value = pending;

    setTimeout(() => getIngredients(drinkInfo.value), 600);
  } catch (e) {
    console.log("error" + e);
  }
};

const urlImg = computed(() => {
  console.log(
    ingredients.value.data.type
  )`https://www.thecocktaildb.com/images/ingredients/${ingredients}.png`;
});

onBeforeMount(() => {
  getDrink();
});
</script>
