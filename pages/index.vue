<template>
  <section id="hero" data-aos="zoom-in" data-aos-easing="ease-in">
    <div id="leftSide">
      <h1 data-aos="fade-right">
        <span class="purple-text-primary">Desvendando</span> o Mundo do Café Uma
        Xícara de <span class="purple-text-primary">Histórias</span> e
        <span class="purple-text">Aromas</span>
      </h1>
      <p data-aos="fade-right" data-aos-delay="300">
        Este é o lugar onde você encontra várias
        <span class="purple-text-secondary">informações</span> sobre todos os
        <span class="purple-text-secondary">tipos de café</span>
      </p>
      <p data-aos="fade-right" data-aos-delay="300">
        <span class="purple-text-secondary">Explore</span> e
        <span class="purple-text-secondary">conheça mais</span> sobre cada um
        deles
      </p>
    </div>
    <div id="rightSide" data-aos="zoom-in" data-aos-delay="700">
      <div>
        <img
          src="../assets/images/mainImg.png"
          ref="target"
          @mousemove="hoverEffects"
          alt="Imagem de uma xícara de café"
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
definePageMeta({
  layout: "default",
});

const target = ref();
const elementXValue = ref(0); // Defina valores padrão para 0 ou valores iniciais apropriados
const elementYValue = ref(0);
const elementHeightValue = ref(0);
const elementWidthValue = ref(0);
const isOutSideValue = ref(false); // Defina o valor padrão como false
const rX = ref(0); // Defina valores padrão para 0 ou valores iniciais apropriados
const rY = ref(0);

const { isOutside, elementHeight, elementWidth } = useMouseInElement(
  target.value
);

const cardTransform = computed(() => {
  const MAX_ROTATION = 35;
  rX.value = (
    MAX_ROTATION / 2 -
    (elementYValue.value / elementHeightValue.value) * MAX_ROTATION
  ).toFixed(2);

  rY.value = (
    MAX_ROTATION / 2 -
    (elementXValue.value / elementWidthValue.value) * MAX_ROTATION
  ).toFixed(2);

  return `perspective(${elementWidthValue.value}px) rotateX(${rX.value}deg) rotateY(${rY.value}deg)`;
});

const hoverEffects = (event) => {
  const { offsetX, offsetY } = event;
  elementXValue.value = offsetX;
  elementYValue.value = offsetY;
  elementHeightValue.value = elementHeight.value;
  elementWidthValue.value = elementWidth.value;
  isOutSideValue.value = isOutside.value;
};
</script>
