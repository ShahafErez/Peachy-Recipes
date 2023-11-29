<template>
  <div class="background">
    <b-card
      no-body
      class="overflow-hidden"
      style="max-width: 1200px; min-width: 1000px;"
    >
      <div class="container">
        <div class="recipe-body">
          <h2>{{ recipe_1.title }}</h2>
          <div id="recipe-info">
            <span
              ><div class="info" id="minutes">
                <div class="number">{{ recipe_1.readyInMinutes }}</div>
                <div class="description">minutes</div>
              </div>
              <div class="info">
                <div class="number">{{ recipe_1.servingSize }}</div>
                <div class="description">Dishes</div>
              </div>
            </span>
          </div>
          <div class="icons">
            <img
              id="vegetarian"
              v-if="recipe_1.vegetarian == 1"
              src="../../resources/vegeterian.png"
              title="vegetarian"
            />
            <img
              id="vegan"
              v-if="recipe_1.vegan == 1"
              src="../../resources/vegan.png"
              title="vegan"
            />
            <img
              id="glutenFree"
              v-if="recipe_1.glutenFree == 1"
              src="../../resources/gluten-free2.png"
              title="gluten free"
            />
          </div>
          <div class="family-info">
            <span>
              <h3>Peronal Information</h3>
              <div id="owner">
                <div class="personal-description">
                  <span class="info-title">Recipe's owner:</span>
                  {{ recipe_1.owner }}
                </div>
              </div>
              <div id="occasion">
                <div class="personal-description">
                  <span class="info-title">Occasion:</span>
                  {{ recipe_1.occasion }}
                </div>
              </div>
            </span>
          </div>
        </div>
        <div v-if="recipe_1" class="recipe-img-container">
          <img id="recipe-image" :src="recipe_1.image" class="center" />
        </div>
      </div>
      <div class="divider div-transparent"></div>
      <div class="recipe-full">
        <div id="instructions">
          <FamilyRecipeInstructions :instructions="recipe_1.instructions" />
        </div>
        <div id="ingredients">
          <FamilyRecipeIngredients
            :ingredient_amount="recipe_1.ingredient_amount"
            :ingredient_sizing="recipe_1.ingredient_sizing"
            :ingredients="recipe_1.ingredients"
          />
        </div>
      </div>
    </b-card>
    <b-card
      no-body
      class="overflow-hidden"
      style="max-width: 1200px; min-width: 1000px;"
    >
      <div class="container">
        <div class="recipe-body">
          <h2>{{ recipe_2.title }}</h2>
          <div id="recipe-info">
            <span
              ><div class="info" id="minutes">
                <div class="number">{{ recipe_2.readyInMinutes }}</div>
                <div class="description">minutes</div>
              </div>
              <div class="info">
                <div class="number">{{ recipe_2.servingSize }}</div>
                <div class="description">Dishes</div>
              </div>
            </span>
          </div>
          <div class="icons">
            <img
              id="vegetarian"
              v-if="recipe_2.vegetarian == 1"
              src="../../resources/vegeterian.png"
              title="vegetarian"
            />
            <img
              id="vegan"
              v-if="recipe_2.vegan == 1"
              src="../../resources/vegan.png"
              title="vegan"
            />
            <img
              id="glutenFree"
              v-if="recipe_2.glutenFree == 1"
              src="../../resources/gluten-free2.png"
              title="gluten free"
            />
          </div>
          <div class="family-info">
            <span>
              <h3>Peronal Information</h3>
              <div id="owner">
                <div class="personal-description">
                  <span class="info-title">Recipe's owner:</span>
                  {{ recipe_2.owner }}
                </div>
              </div>
              <div id="occasion">
                <div class="personal-description">
                  <span class="info-title">Occasion:</span>
                  {{ recipe_2.occasion }}
                </div>
              </div>
            </span>
          </div>
        </div>
        <div v-if="recipe_2" class="recipe-img-container">
          <img id="recipe-image" :src="recipe_2.image" class="center" />
        </div>
      </div>
      <div class="divider div-transparent"></div>
      <div class="recipe-full">
        <div id="instructions">
          <FamilyRecipeInstructions :instructions="recipe_2.instructions" />
        </div>
        <div id="ingredients">
          <FamilyRecipeIngredients
            :ingredient_amount="recipe_2.ingredient_amount"
            :ingredient_sizing="recipe_2.ingredient_sizing"
            :ingredients="recipe_2.ingredients"
          />
        </div>
      </div>
    </b-card>
    <b-card
      no-body
      class="overflow-hidden"
      style="max-width: 1200px; min-width: 1000px;"
    >
      <div class="container">
        <div class="recipe-body">
          <h2>{{ recipe_3.title }}</h2>
          <div id="recipe-info">
            <span
              ><div class="info" id="minutes">
                <div class="number">{{ recipe_3.readyInMinutes }}</div>
                <div class="description">minutes</div>
              </div>
              <div class="info">
                <div class="number">{{ recipe_3.servingSize }}</div>
                <div class="description">Dishes</div>
              </div>
            </span>
          </div>
          <div class="icons">
            <img
              id="vegetarian"
              v-if="recipe_3.vegetarian == 1"
              src="../../resources/vegeterian.png"
              title="vegetarian"
            />
            <img
              id="vegan"
              v-if="recipe_3.vegan == 1"
              src="../../resources/vegan.png"
              title="vegan"
            />
            <img
              id="glutenFree"
              v-if="recipe_3.glutenFree == 1"
              src="../../resources/gluten-free2.png"
              title="gluten free"
            />
          </div>
          <div class="family-info">
            <span>
              <h3>Peronal Information</h3>
              <div id="owner">
                <div class="personal-description">
                  <span class="info-title">Recipe's owner:</span>
                  {{ recipe_3.owner }}
                </div>
              </div>
              <div id="occasion">
                <div class="personal-description">
                  <span class="info-title">Occasion:</span>
                  {{ recipe_3.occasion }}
                </div>
              </div>
            </span>
          </div>
        </div>
        <div v-if="recipe_3" class="recipe-img-container">
          <img id="recipe-image" :src="recipe_3.image" class="center" />
        </div>
      </div>
      <div class="divider div-transparent"></div>
      <div class="recipe-full">
        <div id="instructions">
          <FamilyRecipeInstructions :instructions="recipe_3.instructions" />
        </div>
        <div id="ingredients">
          <FamilyRecipeIngredients
            :ingredient_amount="recipe_3.ingredient_amount"
            :ingredient_sizing="recipe_3.ingredient_sizing"
            :ingredients="recipe_3.ingredients"
          />
        </div>
      </div>
    </b-card>
  </div>
</template>

<script>
import FamilyRecipeIngredients from "../components/FamilyRecipeIngredients.vue";
import FamilyRecipeInstructions from "../components/FamilyRecipeInstructions.vue";

export default {
  components: {
    FamilyRecipeIngredients,
    FamilyRecipeInstructions,
  },
  data() {
    return {
      recipes: [],
      recipe_1: null,
      recipe_2: null,
      recipe_3: null,
    };
  },
  async created() {
    let DOMAIN_PATH;

    try {
      let response;
      DOMAIN_PATH = "http://localhost:3000/users/myFamilyRecipes";
      response = await this.axios.get(DOMAIN_PATH, { withCredentials: true });
      if (response.status !== 200) this.$router.replace("/NotFound");
      for (let i = 0; i < response.data.length; i++) {
        let {
          recipe_id,
          user_id,
          title,
          image,
          occasion,
          owner,
          readyInMinutes,
          vegan,
          vegetarian,
          glutenFree,
          servingSize,
          ingredient_amount,
          ingredient_sizing,
          ingredients,
          instructions,
        } = response.data[i];

        let _recipe = {
          recipe_id,
          user_id,
          title,
          image,
          occasion,
          owner,
          readyInMinutes,
          vegan,
          vegetarian,
          glutenFree,
          servingSize,
          ingredient_amount,
          ingredient_sizing,
          ingredients,
          instructions,
        };
        this.recipes.push(_recipe);
      }
      this.recipe_1 = this.recipes[0];
      this.recipe_2 = this.recipes[1];
      this.recipe_3 = this.recipes[2];
    } catch (error) {
      console.log("error.response.status", error.response.status);
      this.$router.replace("/NotFound");
      return;
    }
  },
};
</script>

<style scoped>
.family-info {
  font-size: 17px;
  margin: auto;
  margin-top: 25px;
  border: 1px solid rgb(225, 118, 11);
  border-radius: 5px;
  padding: 10px 40px 10px 40px;
  text-align: center;
}

.info-title {
  font-family: FreeMono, monospace;
  text-decoration: underline;
}

h3 {
  font-size: 23px;
  font-family: FreeMono, monospace;
}

.background {
  background-image: url("../../resources/background-2.jpg");
}
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
  margin-top: 50px;
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
  display: table;
}

#recipe-info span {
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
</style>
