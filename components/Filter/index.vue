<template>
  <section id="drinkFilter" data-aos="zoom-in">
    <FilterDrinkFilter @filter="filterDrinks" />

    <FilterDrinkFilterList :drinks="drinksFiltered" />
  </section>
</template>

<script setup>
const useDrinks = useGetDrinks();

const { getDrinkFiltered } = useDrinks;

const drinksFiltered = ref([]);

const filterDrinks = async (filter) => {
  drinksFiltered.value = [];
  for (let i = 0; i < filter.length; i++) {
    switch (i) {
      case 0:
        if (filter[0] !== "") {
          const { data: dataAlcoholic } = await getDrinkFiltered(
            `a=${filter[0]}`
          );
          drinksFiltered.value = dataAlcoholic.value;
        }

        break;
      case 1:
        if (filter[1] !== "") {
          const { data: dataDrink } = await getDrinkFiltered(`c=${filter[1]}`);
          verifyDrinksFiltered(dataDrink.value);
        }
        break;
      case 2:
        if (filter[2] !== "") {
          const { data: dataGlass } = await getDrinkFiltered(`g=${filter[2]}`);
          verifyDrinksFiltered(dataGlass.value);
        }
        break;
    }
  }
};

const verifyDrinksFiltered = (data) => {
  let newDrinksFiltered = [];
  if (drinksFiltered.value.length == 0) drinksFiltered.value = data;
  for (let i = 0; i < data.length; i++) {
    drinksFiltered.value.map((drink) => {
      if (data[i]) {
        if (drink.name == data[i].name) {
          newDrinksFiltered.push(data[i]);
        }
      }
    });
  }
  drinksFiltered.value = newDrinksFiltered;
};
</script>
