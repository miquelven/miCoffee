export default function () {
  const getDrink = async (query: string) => {
    const { data, pending } = await useFetch(
      `https://www.thecocktaildb.com/api/json/v1/1/${query}`,
      {
        lazy: true,
        server: false,
        transform: (data) => {
          return data.drinks.map((d) => {
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
              category: d.strCategory,
              alcoholic: d.strAlcoholic,
              ingredients: ingredientsValue,
              instructions: d.strInstructions,
            };
          });
        },
      }
    );
    return { data, pending };
  };

  return {
    getDrink,
  };
}
