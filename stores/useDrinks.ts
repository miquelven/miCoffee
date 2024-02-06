import { defineStore } from "pinia";

export const useDrinks = defineStore("useDrinks", () => {
  // const datas = ref([]);
  // const getDrinks = async (query: string) => {
  //   const { data, refresh } = await useLazyFetch(
  //     `https://www.thecocktaildb.com/api/json/v1/1/${query}`,
  //     {
  //       transform: (data) => {
  //         const dataValue = data.drinks.map((t) => {
  //           return {
  //             title: t.strDrink,
  //             img: t.strDrinkThumb,
  //             category: t.strCategory,
  //             alcoholic: t.strAlcoholic,
  //           };
  //         });
  //         return dataValue[0];
  //       },
  //     }
  //   );
  //   refresh();
  //   datas.value.push(data);
  // };
  // return { getDrinks, datas };
});
