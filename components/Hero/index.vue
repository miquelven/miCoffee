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
        <span class="purple-text-secondary">Explore</span>
        and <span class="purple-text-secondary"> get to know more</span> about
        each one of them
      </p>
    </div>
    <div id="rightSide" data-aos="zoom-in" data-aos-delay="700">
      <div>
        <img
          src="../../assets/images/drinkHero.png"
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
</template>

<script setup>
// EFFECT HOVER CARD

const target = ref();
const elementXValue = ref(0);
const elementYValue = ref(0);
const elementHeightValue = ref(0);
const elementWidthValue = ref(0);
const isOutSideValue = ref(false);
const rX = ref(0);
const rY = ref(0);

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
</script>
