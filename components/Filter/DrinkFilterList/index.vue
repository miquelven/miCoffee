<template>
  <ul id="drinkFiltered">
    <li v-for="(drink, index) in drinkValue" :key="index" data-aos="zoom-in">
      <div class="imgArea">
        <img :src="drink.img" alt="Imagem de uma bebida" />
        <div>
          <h3>{{ drink.name }}</h3>
          <button @click="redirectShowMore(drink.id)">Show More</button>
        </div>
      </div>
    </li>
  </ul>

  <NuxtLink to="#drinkFilter" @click="updateScroll">
    <!-- Seu código de paginação -->
  </NuxtLink>
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
const route = useRoute();

const updateScroll = () => {
  if (route.fullPath == "/#drinkFilter") {
    router.push(`/`);
  }
};
onMounted(() => updateScroll());

const redirectShowMore = (id: string) => {
  router.push(`drinksInfo/${id}`);
};

watch(
  () => props.drinks,
  () => update()
);
</script>
