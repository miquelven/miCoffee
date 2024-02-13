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

const useDrinks = useGetDrinks();

const { getRandomDrinks } = useDrinks;

const isPending = ref(false);
const drinkCardInfos = ref([]);

const getDrinks = async () => {
  try {
    const { data, pending } = await getRandomDrinks();
    drinkCardInfos.value = data;
    isPending.value = pending;
  } catch (e) {
    nuxtApp.$toast.error("Error when fetching data");
  }
};

onBeforeMount(() => {
  getDrinks();
});

const resetDrinkCardInfo = () => {
  drinkCardInfos.value = [];

  getDrinks();
};
</script>
