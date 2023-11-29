<template>
  <div>
    <div class="card" style="<!--width: 100%; -->">
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
      </router-link>

      <div class="card-body">
        <router-link
          :to="{
            name: 'recipe',
            params: { recipeId: recipe.id },
            query: { isPersonal: recipe.isPersonal },
          }"
          id="title-link"
        >
          <h5 class="card-title">
            {{ recipe.title }}
          </h5>
        </router-link>
        <ul class="list-group list-group-flush">
          <p id="recipe_info">
            {{ recipe.readyInMinutes }} minutes <span id="line">|</span>
            {{ recipe.popularity }} likes
          </p>
          <p id="viewed_recipe" v-if="recipe.isViewed === true">
            you have watched this recipe
          </p>
          <FavoriteButton class="favoriteButton" :recipe="recipe" />

          <div class="food_icons">
            <img
              id="vegetarian"
              v-if="recipe.vegetarian === true"
              src="../../resources/vegeterian.png"
              height="35px"
              width="35px"
              title="vegetarian"
            />
            <img
              id="vegan"
              v-if="recipe.vegan === true"
              src="../../resources/vegan.png"
              height="35px"
              width="35px"
              title="vegan"
            />
            <img
              id="glutenFree"
              v-if="recipe.glutenFree === true"
              src="../../resources/gluten-free.png"
              height="35px"
              width="35px"
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
  name: "RecipePreviewHorizontal",
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
  max-width: 53%;
  height: auto;
  position: relative;
  text-decoration: none;
}

.card-img-top:hover {
  opacity: 0.75;
}

.food_icons {
  position: absolute;
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%);
}

.food_icons img {
  margin: 0px 6px 0 6px;
  position: relative;
}

.favoriteButton {
  position: absolute;
  left: -49px;
  bottom: 10px;
  font-size: 110%;
}

#line {
  color: #ce8a53;
}

.card {
  border-color: #e0c0a6;
  flex-direction: row;
  height: auto;
  min-width: 600px;
  margin: 15px 0 20px 0;
}

.card-body {
  padding: 4px 10px 0 10px;
  position: relative;
  font-size: 17px;
  text-align: center;
}

.col {
  flex-grow: 0;
}

#title-link {
  display: inline;
}

.card .card-title {
  margin: 25px 0 4px 0;
  font-size: 21px;
  overflow: hidden;
  display: -webkit-box;
  max-width: 20rem;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  padding: 0;
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

#title-link:hover {
  text-decoration: none;
}

#viewed_recipe {
  margin-top: 3px;
  color: #ce8a53;
}
</style>
