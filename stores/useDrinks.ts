import { defineStore } from "pinia";

export const useDrinks = defineStore("useDrinks", () => {
  const datas = ref([]);
  const getDrinks = async (query: string) => {
    const { data, pending } = await useAsyncData(
      "data-drinks",
      async () => {
        return await $fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/${query}`
        );
      },
      {
        transform: (data) => {
          return data.drinks.map((d) => {
            let ingredientsValue = [];
            let i = 1;
            do {
              ingredientsValue.push(d[`strIngredient${i}`]);
              i++;
            } while (d[`strIngredient${i}`] !== null);

            return {
              title: d.strDrink,
              img: d.strDrinkThumb,
              category: d.strCategory,
              alcoholic: d.strAlcoholic,
              ingredients: ingredientsValue,
              instructions: d.strInstructions,
            };
          });
        },
        lazy: true,
        server: false,
      }
    );
    const values = [];
    values.push(data, pending);
    datas.value = values;
  };
  return { getDrinks, datas };
});
