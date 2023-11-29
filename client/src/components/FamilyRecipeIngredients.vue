<template>
  <div>
    <h1>Ingredients:</h1>
    <div class="list">
      <span class="list-item">
        <div class="info" v-for="r in ingredients_all_info" :key="r.id">
          <a>
            <img class="bullet" src="../../resources/peach.png" />
            <img class="bullet" src="../../resources/peach-hover.png" />
          </a>
          <div class="item-text">
            <div>
              {{ r.name }}<span id="divider">|</span>
              <span id="amount">{{ Math.floor(r.amount * 100) / 100 }}</span>
              {{ r.unit }}
            </div>
          </div>
        </div>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Ingredients",
  props: {
    ingredients: {
      type: String,
      required: true,
    },
    ingredient_amount: {
      type: String,
      required: true,
    },
    ingredient_sizing: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      edited_ingredients: [],
      edited_ingredient_amount: [],
      edited_ingredient_sizing: [],
      ingredients_all_info: [],
    };
  },
  mounted() {
    const edited_ingredients = this.ingredients.split(",");
    const edited_ingredient_amount = this.ingredient_amount.split(",");
    const edited_ingredient_sizing = this.ingredient_sizing.split(",");

    for (let i = 0; i < edited_ingredients.length; i++) {
      this.ingredients_all_info.push({
        id: i,
        name: edited_ingredients[i],
        amount: edited_ingredient_amount[i],
        unit: edited_ingredient_sizing[i],
      });
    }
  },
};
</script>

<style scoped>
h1 {
  font-size: 23px;
  margin-bottom: 25px;
  font-family: FreeMono, monospace;
}

a .bullet:last-child {
  display: none;
}

a:hover .bullet:last-child {
  display: block;
}

a:hover img:first-child {
  display: none;
}

.item-text {
  font-size: 17px;
  position: relative;
  bottom: 25.5px;
  margin-left: 40px;
}

#amount {
  color: rgb(225, 118, 11);
}

#divider {
  margin: 0 10px 0 10px;
}
img.bullet {
  height: 28px;
  width: auto;
}

.list {
  margin-left: 3px;
}
</style>
