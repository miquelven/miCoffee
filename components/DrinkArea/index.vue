<template>
  <section
    id="drinkArea"
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

    <div id="drinkDescription">
      <div id="imgDescription" data-aos="zoom-in" data-aos-delay="700">
        <div>
          <img
            id="drinks"
            src="../../assets/images/drinks.png"
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
          id="iconDrink"
          src="../../assets/images/drinkIcon.png"
          alt="Icone de uma bebida"
        />
      </div>
    </div>
  </section>
</template>
