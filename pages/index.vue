<template>
  <section id="hero" data-aos="zoom-in" data-aos-easing="ease-in">
    <div id="leftSide">
      <h1 data-aos="fade-right">
        <span class="purple-text-primary">Unveiling</span> the World of
        Beverages: A Glass of
        <span class="purple-text-primary">Stories</span> and
        <span class="purple-text">Aromas</span>
      </h1>
      <p data-aos="fade-right" data-aos-delay="300">
        This is the place where you find many
        <span class="purple-text-secondary"> information</span> about all
        <span class="purple-text-secondary">type of beverages</span>
      </p>
      <p data-aos="fade-right" data-aos-delay="300">
        <span class="purple-text-secondary">Explore</span> e
        <span class="purple-text-secondary">and get to know more</span> about
        each one of them
      </p>
    </div>
    <div id="rightSide" data-aos="zoom-in" data-aos-delay="700">
      <div>
        <img
          src="../assets/images/drinkHero.png"
          ref="target"
          @mousemove="hoverEffects"
          @mouseout="resetHoverEffects"
          alt="Imagem de uma bebida"
          :style="{
            transition: 'all ease 300ms',
            transform: cardTransform,
          }"
        />
      </div>
    </div>
  </section>

  <section
    id="coffeeArea"
    data-aos="zoom-in"
    data-aos-easing="linear"
    data-aos-duration="500"
  >
    <div id="inputSearchArea">
      <label
        id="titleInput"
        for="inputSearch  "
        data-aos="zoom-in"
        data-aos-delay="400"
        >Search by the name of the beverage you want to obtain information about
      </label>
      <div data-aos="fade-up" data-aos-delay="400">
        <InputSearch
          :autofocus="false"
          placeholder="Margarita"
          id="inputSearch"
        />
      </div>
    </div>

    <div id="coffeeDescription">
      <div id="imgDescription" data-aos="zoom-in" data-aos-delay="700">
        <div>
          <img
            id="drinks"
            src="../assets/images/drinks.png"
            alt="Imagem de bebidas"
          />
        </div>
      </div>
      <div id="infosDescription" data-aos="zoom-in" data-aos-delay="700">
        <h3>Enjoy the unparalleled pleasure of a beverage at any time</h3>
        <p>
          However, true satisfaction comes when we appreciate something and
          deeply understand what we are tasting.
        </p>
        <p>
          In our space, we offer a rich source of information about a wide
          variety of beverages. Explore and discover new flavors through the
          smart filters available on our website
        </p>
        <p>
          Take advantage of the opportunity to filter data and dive into the
          fascinating universe of beverage types, many of which you never even
          imagined existed.
        </p>
        <img
          id="iconCoffee"
          src="../assets/images/drinkIcon.png"
          alt="Icone de uma bebida"
        />
      </div>
    </div>
  </section>

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

  <section id="drinkFilter" data-aos="zoom-in">
    <DrinkFilter @filter="filterDrinks" />

    <DrinkFilterList :drinks="drinksFiltered" />
  </section>
</template>

<script setup>
definePageMeta({
  layout: "default",
});

const target = ref();
const elementXValue = ref(0);
const elementYValue = ref(0);
const elementHeightValue = ref(0);
const elementWidthValue = ref(0);
const isOutSideValue = ref(false);
const rX = ref(0);
const rY = ref(0);

const drinkCardInfos = ref([]);

const { isOutside, elementHeight, elementWidth } = useMouseInElement(
  target.value
);

const cardTransform = computed(() => {
  const MAX_ROTATION = 50;
  rX.value = (
    MAX_ROTATION / 2 -
    (elementYValue.value / elementHeightValue.value) * MAX_ROTATION
  ).toFixed(2);

  rY.value = (
    MAX_ROTATION / 2 -
    (elementXValue.value / elementWidthValue.value) * MAX_ROTATION
  ).toFixed(2);

  return `perspective(${elementWidthValue.value}px) rotateX(${rX.value}deg) rotateY(${rY.value}deg) scale(1.05)`;
});

const hoverEffects = (event) => {
  const { offsetX, offsetY } = event;
  elementXValue.value = offsetX;
  elementYValue.value = offsetY;
  elementHeightValue.value = elementHeight.value;
  elementWidthValue.value = elementWidth.value;
  isOutSideValue.value = isOutside.value;
};

const resetHoverEffects = () => {
  target.value.style = "perspective(0px) rotateX(0deg) rotateY(0deg) scale(1);";
};

const isPending = ref(false);
const isPendingFiltered = ref(false);

const getRandomDrinks = async (query) => {
  let drinksArray = [];
  try {
    const { data, pending } = await useAsyncData(
      "drink-random",
      async () => {
        const [drink1, drink2, drink3] = await Promise.all([
          $fetch(`https://www.thecocktaildb.com/api/json/v1/1/${query}`),
          $fetch(`https://www.thecocktaildb.com/api/json/v1/1/${query}`),
          $fetch(`https://www.thecocktaildb.com/api/json/v1/1/${query}`),
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
                  category: d.strCategory,
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
    // colocar o toast
  }
};

onBeforeMount(() => {
  getRandomDrinks("random.php");
});

const resetDrinkCardInfo = () => {
  drinkCardInfos.value = [];

  getRandomDrinks("random.php");
};

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
