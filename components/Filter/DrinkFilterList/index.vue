<template>
  <ul id="drinkFiltered">
    <li v-for="(drink, index) in drinkValue" :key="index" data-aos="zoom-in">
      <div class="imgArea">
        <img :src="drink.img" alt="Imagem de uma bebida" />
        <div>
          <h5>{{ drink.name }}</h5>
          <button @click="redirectShowMore(drink.id)">Show More</button>
        </div>
      </div>
    </li>
  </ul>

  <a @click="moveToAnchor">
    <UPagination
      v-model="page"
      :total="drink"
      :ui="{ rounded: 'first-of-type:rounded-s-md last-of-type:rounded-e-md' }"
      :active-button="{ color: 'black' }"
      @click="update"
    >
      <UTooltip text="Previous page">
        <UButton
          icon="i-heroicons-arrow-small-left-20-solid"
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
  </a>
</template>

<script setup lang="ts">
interface Drink {
  id: string;
  img: string;
  name: string;
}

const props = defineProps({
  drinks: {
    type: Array as () => Drink[],
    required: true,
  },
});

const page = ref(1);
const page_count = ref(10);
const drinksLength = ref(10);
const drinkValue = ref<Drink[]>([]);

const update = () => {
  const startIndex = (page.value - 1) * page_count.value;
  const endIndex = Math.min(startIndex + page_count.value, props.drinks.length);

  drinkValue.value = props.drinks.slice(startIndex, endIndex);
};

const drink = computed(() => {
  return props.drinks.length > 0 ? props.drinks.length : drinksLength.value;
});

const router = useRouter();

const redirectShowMore = (id: string) => {
  router.push(`drinksInfo/${id}`);
};

watch(
  () => props.drinks,
  () => update()
);

const moveToAnchor = () => {
  const top = document.querySelector("#drinkFilter")?.clientHeight;
  window.scrollTo(0, top!);
};
</script>
