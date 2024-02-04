<template>
  <section id="hero" data-aos="zoom-in" data-aos-easing="ease-in">
    <div id="leftSide">
      <h1 data-aos="fade-right">
        <span class="purple-text-primary">Desvendando</span> o Mundo das bebidas
        Um copo de <span class="purple-text-primary">Histórias</span> e
        <span class="purple-text">Aromas</span>
      </h1>
      <p data-aos="fade-right" data-aos-delay="300">
        Este é o lugar onde você encontra várias
        <span class="purple-text-secondary">informações</span> sobre todos os
        <span class="purple-text-secondary">tipos de bebidas</span>
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
        >Pesquise pelo nome da bebida que quer obter informações
      </label>
      <div data-aos="fade-up" data-aos-delay="400">
        <input type="text" id="inputSearch" />
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
        <h3>Desfrute do prazer inigualável de uma bebida a qualquer momento</h3>
        <p>
          Entretanto, a verdadeira satisfação vem quando apreciamos algo e
          compreendemos profundamente sobre o que estamos degustando.
        </p>
        <p>
          Em nosso espaço, oferecemos uma rica fonte de informações sobre uma
          ampla variedade de bebidas. Explore e descubra novos sabores através
          dos filtros inteligentes disponíveis em nosso site.
        </p>
        <p>
          Aproveite a oportunidade de filtrar dados e mergulhar no fascinante
          universo de tipos de bebidas, muitos dos quais você nem imaginava que
          existiam.
        </p>
        <img
          id="iconCoffee"
          src="../assets/images/drinkIcon.png"
          alt="Icone de uma bebida"
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
