<template>
  <ul id="drinkFiltered">
    <li v-for="(drink, index) in drinkValue" :key="index">
      <div class="imgArea">
        <img :src="drink.img" alt="Imagem de uma bebida" />
        <div>
          <h3>{{ drink.name }}</h3>
          <button @click="redirectShowMore(drink.id)">Show More</button>
        </div>
      </div>
    </li>
  </ul>

  <UPagination
    v-model="page"
    :total="drink"
    :ui="{ rounded: 'first-of-type:rounded-s-md last-of-type:rounded-e-md' }"
    :active-button="{ color: 'purple' }"
    @click="update"
  >
    <UTooltip text="Previous page">
      <UButton
        icon="i-heroicons-arrow-small-left-20-solid"
        color="purple"
        :ui="{ rounded: 'rounded-full' }"
        class="rtl:[&_span:first-child]:rotate-180 me-2"
        @click="update"
      />
    </UTooltip>

    <UTooltip text="Next page">
      <UButton
        icon="i-heroicons-arrow-small-right-20-solid"
        color="purple"
        :ui="{ rounded: 'rounded-full' }"
        class="rtl:[&_span:last-child]:rotate-180 ms-2"
        @click="update"
      />
    </UTooltip>
  </UPagination>
</template>

<script setup>
const props = defineProps(["drinks"]);

const page = ref(1);
const page_count = ref(10);

const drinksLength = ref(10);

const drinkValue = ref([]);

const update = () => {
  const newDrinksValue = [];
  const startIndex = (page.value - 1) * page_count.value;
  const endIndex = startIndex + page_count.value;

  for (let i = startIndex; i < endIndex; i++) {
    if (i >= props.drinks.length) break;
    newDrinksValue.push(props.drinks[i]);
  }

  drinkValue.value = newDrinksValue;
};

const drink = computed(() => {
  if (props.drinks.length > 0) {
    return (drinksLength.value = props.drinks.length);
  } else {
    return drinksLength.value;
  }
});

const router = useRouter();

const redirectShowMore = (id) => {
  router.push(`drinksInfo/${id}`);
};

watch(
  () => props.drinks,
  () => update()
);
</script>
