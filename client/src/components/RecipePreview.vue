<template>
  <div>
    <div class="card" style="width: 18rem; height: 23.24rem;">
      <router-link
        :to="{
          name: 'recipe',
          params: { recipeId: recipe.id },
          query: { isPersonal: recipe.isPersonal },
        }"
        id="recipe-preview"
      >
        <div class="recipe-body">
          <img v-if="image_load" :src="recipe.image" class="card-img-top" />
        </div>
        <h5 class="card-title">
          {{ recipe.title }}
        </h5>
      </router-link>
      <div class="card-body">
        <ul class="list-group list-group-flush">
          <p id="recipe_info">
            {{ recipe.readyInMinutes }} minutes <span id="line">|</span>
            {{ recipe.popularity }} likes
          </p>
          <p id="viewed_recipe" v-if="recipe.isViewed === true">
            you have watched this recipe
          </p>
          <div class="food_icons">
            <FavoriteButton class="favoriteButton" :recipe="recipe" />
            <img
              id="vegetarian"
              v-if="recipe.vegetarian === true"
              src="../../resources/vegeterian.png"
              height="28px"
              width="28px"
              title="vegetarian"
            />
            <img
              id="vegan"
              v-if="recipe.vegan === true"
              src="../../resources/vegan.png"
              height="28px"
              width="28px"
              title="vegan"
            />
            <img
              id="glutenFree"
              v-if="recipe.glutenFree === true"
              src="../../resources/gluten-free.png"
              height="28px"
              width="28px"
              title="gluten free"
            />
          </div>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import FavoriteButton from "./FavoriteButton.vue";
export default {
  name: "RecipePreview",
  components: {
    FavoriteButton,
  },
  mounted() {
    console.log("recipe preview mounted");
    this.axios.get(this.recipe.image).then((i) => {
      this.image_load = true;
    });
  },
  data() {
    return {
      image_load: false,
    };
  },
  props: {
    recipe: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
#recipe-preview {
  display: inline-block;
  width: 100%;
  height: auto;
  position: relative;
  text-decoration: none;
}

.card-img-top:hover {
  opacity: 0.75;
}

.food_icons {
  position: absolute;
  top: 65px;
}

.food_icons img {
  margin-right: 10px;
  position: relative;
}

.favoriteButton {
  position: absolute;
  left: 220px;
}

.card {
  border-color: #e0c0a6;
}

.card-body {
  padding-top: 4px;
  position: absolute;
  top: 270px;
}

.col {
  flex-grow: 0;
}

.card .card-title {
  margin: 6px 0 0 0;
  font-size: 19.5px;
  overflow: hidden;
  display: -webkit-box;
  max-width: 20rem;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  padding: 0.6rem 1.1rem 0 1.1rem;
  color: black;
}

.card .card-title:hover {
  text-decoration: none;
  color: rgb(215, 111, 14);
}

.recipe-body {
  position: relative;
  width: 100%;
}

#recipe_info {
  margin-bottom: 2px;
  margin-top: 0px;
}

#viewed_recipe {
  margin-top: 3px;
  color: #ce8a53;
}

#line {
  color: #ce8a53;
}
</style>
