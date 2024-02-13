interface dataType {
  [items: string]: string[] | any;
}

interface dType {
  [values: string]: string[];
}

export default function () {
  const getDrink = async (query: string) => {
    const { data, pending } = await useFetch(
      `https://www.thecocktaildb.com/api/json/v1/1/${query}`,
      {
        lazy: true,
        server: false,
        transform: (data: dataType) => {
          return data.drinks.map((d: dType) => {
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

  const getDrinkFiltered = async (query: string) => {
    const { data, pending } = await useFetch(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?${query}`,
      {
        lazy: true,
        server: false,
        transform: (data: dataType) => {
          return data.drinks.map((d: dType) => {
            return {
              name: d.strDrink,
              img: d.strDrinkThumb,
              id: d.idDrink,
            };
          });
        },
      }
    );
    return { data, pending };
  };

  const getRandomDrinks = async () => {
    let drinksArray: dataType[] = [];
    const { data, pending } = await useAsyncData(
      "drink-random",
      async () => {
        const [drink1, drink2, drink3] = await Promise.all([
          $fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`),
          $fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`),
          $fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`),
        ]);
        if (drink1 && drink2 && drink3)
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
              data[i].drinks.map((d: dType) => {
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
    return { data, pending };
  };

  return {
    getDrink,
    getDrinkFiltered,
    getRandomDrinks,
  };
}
