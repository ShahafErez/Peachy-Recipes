<template>
  <div>
    <h1>Ingredients:</h1>
    <div class="list">
      <span class="list-item">
        <div
          class="info"
          v-for="(r, index) in ingredients"
          :key="index + '_' + r.id"
        >
          <a>
            <img class="bullet" src="../../resources/peach.png" />
            <img class="bullet" src="../../resources/peach-hover.png" />
          </a>
          <div class="item-text">
            <div>
              {{ r.name }}<span id="divider">|</span>
              <span id="amount">{{ Math.floor(r.amount*mul * 100) / 100 }}</span>
              <span v-if="r.unit != 'null'"> {{ r.unit }}</span>
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
      type: Array,
      required: true,
    },
    mul:{
      type: Number,
      required: true,
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
