<template>
  <section class="drinksExamples">
    <h3 data-aos="zoom-in">Examples of beverages</h3>

    <div>
      <button @click="resetDrinkCardInfo" data-aos="zoom-in" id="resetButton">
        <Icon name="uil:refresh" color="white" id="searchIcon" size="28" />
      </button>
      <ul>
        <template v-if="isPending.value == true">
          <Card
            v-for="index of 3"
            :key="index"
            :isPending="true"
            :drinkInfo="[]"
          />
        </template>
        <template v-else>
          <li
            v-for="(drinks, index) in drinkCardInfos.value"
            :key="index"
            class="drinkCard"
          >
            <Card
              v-for="(drink, index) in drinks"
              :key="index"
              :drinkInfo="drink"
              :isPending="false"
            />
          </li>
        </template>
      </ul>
    </div>
  </section>
</template>

<script setup>
const nuxtApp = useNuxtApp();

const isPending = ref(false);
const drinkCardInfos = ref([]);

const getRandomDrinks = async () => {
  let drinksArray = [];
  try {
    const { data, pending } = await useAsyncData(
      "drink-random",
      async () => {
        const [drink1, drink2, drink3] = await Promise.all([
          $fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`),
          $fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`),
          $fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`),
        ]);
        drinksArray.push(drink1, drink2, drink3);
        return drinksArray;
      },
      {
        server: false,
        lazy: true,
        transform: (data) => {
          let values = [];
          for (let i = 0; i < drinksArray.length; i++) {
            values.push(
              data[i].drinks.map((d) => {
                let ingredientsValue = [];
                let i = 1;
                do {
                  ingredientsValue.push(d[`strIngredient${i}`]);
                  i++;
                } while (d[`strIngredient${i}`] !== null);
                return {
                  id: d.idDrink,
                  title: d.strDrink,
                  img: d.strDrinkThumb,
                  alcoholic: d.strAlcoholic,
                  ingredients: ingredientsValue,
                  instructions: d.strInstructions,
                };
              })
            );
          }
          return values;
        },
      }
    );
    drinkCardInfos.value = data;
    isPending.value = pending;
  } catch (e) {
    nuxtApp.$toast.error("Error when fetching data");
  }
};

onBeforeMount(() => {
  getRandomDrinks();
});

const resetDrinkCardInfo = () => {
  drinkCardInfos.value = [];

  getRandomDrinks();
};
</script>
