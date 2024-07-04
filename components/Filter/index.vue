<template>
  <section id="drinkFilter" data-aos="zoom-in">
    <FilterDrinkFilter @filter="filterDrinks" />

    <FilterDrinkFilterList
      data-aos="zoom-in"
      data-aos-delay="400"
      :drinks="drinksFiltered"
    />
  </section>
</template>

<script setup lang="ts">
interface Drink {
  id: string;
  img: string;
  name: string;
}

const useDrinks = useGetDrinks();

const { getDrinkFiltered } = useDrinks;

const drinksFiltered = ref<Drink[]>([]);

const filterDrinks = async (filter: string[]) => {
  drinksFiltered.value = [];
  const letters = ["a", "c", "g"];
  for (let i = 0; i < filter.length; i++) {
    if (filter[i] !== "") {
      const { data } = await getDrinkFiltered(`${letters[i]}=${filter[i]}`);
      if (data.value.length > 0) verifyDrinksFiltered(data);
    }
  }
};

const verifyDrinksFiltered = (data: Ref<Drink[]>) => {
  let newDrinksFiltered: any[] = [];
  if (drinksFiltered.value.length == 0) drinksFiltered.value = data.value;
  for (let i = 0; i < data.value.length; i++) {
    drinksFiltered.value.map((drink: any) => {
      if (data.value[i]) {
        if (drink.name == data.value[i].name) {
          newDrinksFiltered.push(data.value[i]);
        }
      }
    });
  }
  drinksFiltered.value = newDrinksFiltered;
};
</script>
