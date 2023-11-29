<template>
  <b-card
    no-body
    class="overflow-hidden"
    style="max-width: 1200px; min-width: 1000px;"
  >
    <div class="container">
      <div class="recipe-body">
        <h2>{{ recipe.title }}</h2>
        <div id="recipe-info">
          <span
            ><div class="info" id="minutes">
              <div class="number">{{ recipe.readyInMinutes }}</div>
              <div class="description">minutes</div>
            </div>
            <div class="info" id="likes">
              <div class="number">{{ recipe.popularity }}</div>
              <div class="description">likes</div>
            </div>
            <div class="info">
              <div class="number">{{ recipe.servingSize }}</div>
              <div class="description">Dishes</div>
            </div>
          </span>
        </div>
        <div class="icons">
          <img
            id="vegetarian"
            v-if="recipe.vegetarian === true"
            src="../../resources/vegeterian.png"
            title="vegetarian"
          />
          <img
            id="vegan"
            v-if="recipe.vegan === true"
            src="../../resources/vegan.png"
            title="vegan"
          />
          <img
            id="glutenFree"
            v-if="recipe.glutenFree === true"
            src="../../resources/gluten-free2.png"
            title="gluten free"
          />
          <img
            id="viewed"
            v-if="recipe.first_time === false && $root.store.username"
            src="../../resources/viewed.png"
            title="you have viewed this recipe"
          />
          <img
            id="viewed"
            v-else-if="recipe.first_time === true"
            src="../../resources/new.png"
            title="this is the first time you're viewing this recipe"
          />
        </div>
        <div v-if="$root.store.username" id="buttons">
          <span>
            <b-button
              class="button"
              @click="addToMeal()"
              :disabled="addToMealLabel == 'Added to meal'"
              >{{ addToMealLabel }}</b-button
            >
          </span>
          <span v-show="onlypreview">
            <b-button
              type="submit"
              class="button"
              @click="onMakeNow"
              title="this will add the recipe to your upcoming meal"
              >{{ make_button_text }}</b-button
            >
          </span>
          <div v-show="!onlypreview" id="make-amount">
            <h3>change the number of dishes</h3>

            <div>
              <b-button
                class="change-dishes"
                variant="outline-danger"
                @click="decrement_dishes()"
                >-</b-button
              >
              <b-button
                class="change-dishes"
                variant="outline-success"
                @click="increment_dishes()"
                >+</b-button
              >
            </div>
          </div>
        </div>
      </div>
      <div v-if="recipe" class="recipe-img-container">
        <img id="recipe-image" :src="recipe.image" class="center" />
        <FavoriteButton id="favoriteButton" :recipe="recipe.previewInfo" />
      </div>
    </div>
    <div class="divider div-transparent"></div>
    <div class="recipe-full">
      <div v-if="onlypreview" id="instructions">
        <Instructions :instructions="recipe._instructions" />
      </div>
      <div v-show="!onlypreview" id="MakingRecipeSteps_div">
        <MakingRecipeSteps
          :instructions="recipe._instructions"
          :r_id="recipe.id"
        />
        <b-button id="done-button" @click="backToRecipe">{{
          "Done making recipe"
        }}</b-button>
      </div>
      <div id="ingredients">
        <Ingredients
          :ingredients="recipe.extendedIngredients"
          :mul="mul_dishes"
        />
      </div>
    </div>
  </b-card>
</template>

<script>
import FavoriteButton from "../components/FavoriteButton.vue";
import Ingredients from "../components/Ingredients.vue";
import Instructions from "../components/Instructions.vue";
import MakingRecipeSteps from "../components/MakingRecipeSteps.vue";

export default {
  components: {
    FavoriteButton,
    Ingredients,
    Instructions,
    MakingRecipeSteps,
  },
  data() {
    return {
      recipe: null,
      onlypreview: true,
      make_button_text: "Make Now",
      mul_dishes: 1,
      addToMealLabel: "Add to meal",
    };
  },
  async created() {
    let DOMAIN_PATH;

    try {
      let response;

      if (this.$route.query.isPersonal) {
        DOMAIN_PATH = "http://localhost:3000/users/personal/";
      } else {
        DOMAIN_PATH = "http://localhost:3000/recipes/";
      }

      try {
        response = await this.axios
          .create({ withCredentials: true })
          .get(DOMAIN_PATH + this.$route.params.recipeId);

        if (response.status !== 200) this.$router.replace("/NotFound");
      } catch (error) {
        this.$router.replace("/NotFound");
        return;
      }
      let {
        analyzedInstructions,
        extendedIngredients,
        previewInfo,
        first_time,
      } = response.data;

      let {
        id,
        popularity,
        readyInMinutes,
        image,
        title,
        vegan,
        vegetarian,
        glutenFree,
        isFavorite,
        isViewed,
        servingSize,
      } = response.data.previewInfo;

      let _instructions;
      if (analyzedInstructions[0].steps.length != 0) {
        _instructions = analyzedInstructions
          .map((fstep) => {
            fstep.steps[0].step = fstep.name + fstep.steps[0].step;
            return fstep.steps;
          })
          .reduce((a, b) => [...a, ...b], []);
      }

      let _recipe = {
        _instructions,
        analyzedInstructions,
        extendedIngredients,
        popularity,
        readyInMinutes,
        image,
        title,
        vegan,
        vegetarian,
        glutenFree,
        isFavorite,
        isViewed,
        previewInfo,
        servingSize,
        first_time,
        id,
      };

      if (this.readyInMinutes === null || this.readyInMinutes === undefined) {
        this.readyInMinutes = "0";
      }

      if (servingSize === null || servingSize === undefined) {
        this.servingSize = 0;
      }

      this.recipe = _recipe;
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    onMakeNow() {
      this.onlypreview = false;
      this.make_button_text = "Done";
      this.addToMeal();
    },
    backToRecipe() {
      this.onlypreview = true;
      this.make_button_text = "Make Now";
    },
    decrement_dishes() {
      if (this.recipe.servingSize > 0) {
        this.recipe.servingSize -= 1;
        this.mul_dishes -= 1;
      }
    },
    increment_dishes() {
      this.recipe.servingSize += 1;
      this.mul_dishes += 1;
    },
    async addToMeal() {
      let DOMAIN_PATH = "http://localhost:3000/users/upcomingMeal/";
      this.addToMealLabel = "Added to meal";

      try {
        response = await this.axios
          .create({ withCredentials: true })
          .post(
            DOMAIN_PATH +
              this.recipe.id +
              "?isPersonal=" +
              this.$route.query.isPersonal
          );
        if (response.status !== 200) {
          this.$router.replace("/NotFound");
        }
        console.log("update local storage(cart)");
        let numOfMeals = localStorage.getItem("cart");
        localStorage.setItem("cart", parseInt(numOfMeals) + 1);
      } catch (error) {
        console.log(error);
        return;
      }
    },
  },
};
</script>

<style scoped>
.recipe-img-container {
  width: 40%;
  float: right;
  position: relative;
  margin-top: 15px;
}
#recipe-image {
  border-radius: 4%;
  width: 100%;
}
.container {
  margin-top: 20px;
}

.overflow-hidden {
  margin: auto;
}

.recipe-body {
  width: 57%;
  margin-top: 40px;
  display: inline-block;
}

.icons {
  text-align: center;
  margin-top: 30px;
}

.icons img {
  margin: 0 22px 0 22px;
  width: 50px;
}

h2 {
  color: rgb(225, 118, 11);
  font-size: 35px;
  margin-left: 0;
  text-align: center;
  font-family: FreeMono, monospace;
}

#recipe-info {
  padding-top: 30px;
  position: relative;
  margin: auto;
  left: 100px;
}

.info {
  margin: 0 20px 0 20px;
  text-align: center;
}

#minutes,
#likes {
  border-right: 1px solid rgb(225, 118, 11);
  padding-right: 30px;
}

h3 {
  font-size: 20px;
  max-width: auto;
  width: fit-content;
}
.number {
  font-size: 32px;
}

.description {
  font-size: 20px;
}

#recipe-info span {
  font-size: 23px;
  display: flex;
  margin-left: 20px;
}

#favoriteButton {
  position: absolute;
  bottom: 2px;
  left: 8px;
  font-size: 22.5px;
}

.divider {
  position: relative;
  margin-top: 20px;
  margin-bottom: 10px;
  height: 1px;
}

.div-transparent:before {
  content: "";
  position: absolute;
  top: 0;
  left: 5%;
  right: 5%;
  width: 90%;
  height: 1px;
  background-image: linear-gradient(
    to right,
    transparent,
    rgb(174, 168, 165),
    transparent
  );
}
.makeNowButton {
  font-size: 20px;
  background-color: rgb(235, 222, 195);
  border-color: rgb(255, 195, 127);
}
#ingredients {
  float: left;
}

#instructions {
  float: left;
  width: 65%;
  padding: 0 50px 0 50px;
}
#MakingRecipeSteps_div {
  float: left;
  width: 68%;
  padding: 0 50px 0 50px;
}

.button {
  background-color: transparent;
  border: solid 1px rgb(225, 118, 11);
  color: black;
  margin: 30px 10px 5px 10px;
  text-align: -webkit-center;
}

.button:not(:disabled):not(.disabled):active {
  background-color: rgb(225, 118, 11);
  border: solid 1px rgb(225, 118, 11);
  color: white;
  margin: 30px 10px 5px 10px;
  text-align: -webkit-center;
}

.b-icon {
  margin-top: 8px;
  font-size: 30px;
}

#make-amount {
  border-top: 1px solid rgb(234, 148, 37);
  width: fit-content;
  padding: 15px 45px 15px 45px;
  margin-top: 21px;
}

#buttons {
  text-align: -webkit-center;
}

.change-dishes {
  margin: 6px;
  margin-top: 10px;
  width: 34px;
  height: 34px;
}

#done-button {
  background-color: transparent;
  border: solid 1px rgb(111, 185, 100);
  color: black;
  margin-top: 10px;
  text-align: -webkit-center;
}
#done-button:not(:disabled):not(.disabled):active {
  background-color: rgb(111, 185, 100);
  border: solid 1px rgb(111, 185, 100);
  color: white;
  margin-top: 10px;
  text-align: -webkit-center;
}
</style>
