<template>
  <template v-if="isPending">
    <div id="drinkInfoArea">
      <div class="cardInfo">
        <div class="cardInfoImgArea">
          <div class="cardInfoContent">
            <h4>---------</h4>
            <p>
              <span>-------</span>
              ---------
            </p>
            <p><span>---------</span> ---------</p>
            <p><span>---------</span> ---------</p>
          </div>
        </div>

        <div id="cardInfoIngredients">
          <h5>--------------</h5>
          <ul>
            <li v-for="number of 6" :key="number" class="modelIngredientItem">
              <p>Loading...</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </template>

  <template v-else>
    <div v-if="drinkInfo" id="drinkInfoArea">
      <div v-for="(drink, index) in drinkInfo" :key="index" class="cardInfo">
        <div class="cardInfoImgArea">
          <img data-aos="zoom-in" :src="drink.img" alt="Imagem de uma bebida" />
          <div
            class="cardInfoContent"
            data-aos="fade-right"
            data-aos-delay="500"
          >
            <h4>{{ drink.title }}</h4>
            <p>
              <span>Alcoholic:</span>
              {{ drink.alcoholic == "Alcoholic" ? "Yes" : "No" }}
            </p>
            <p><span>Category:</span> {{ drink.category }}</p>
            <p><span>Instructions:</span> {{ drink.instructions }}</p>
          </div>
        </div>

        <div id="cardInfoIngredients">
          <h5 data-aos="fade-left" data-aos-delay="650">Ingredients</h5>
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

<script setup lang="ts">
const id = JSON.parse(localStorage.getItem("drinkId")!);
const useDrinks = useGetDrinks();

const { getDrink } = useDrinks;

const { data: drinkInfo, pending: isPending } = await getDrink(
  `lookup.php?i=${id}`
);
</script>
