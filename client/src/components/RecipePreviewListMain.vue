<template>
  <b-container>
    <b-row>
      <div class="col-sm">
        <h4>Explore this recipes</h4>
        <b-col v-for="r in randomRecipes" :key="r.id">
          <RecipePreviewHorizontal class="recipePreview" :recipe="r" />
        </b-col>
        <button class="random-button" @click="changeRandom">
          Get other recipes
        </button>
      </div>
      <div class="col-sm">
        <h4>Last Seen</h4>
        <div v-if="$root.store.username">
          <b-col v-for="r in lastSeenRecipes" :key="r.id">
            <RecipePreviewHorizontal class="recipePreview" :recipe="r" />
          </b-col>
        </div>
        <div v-else id="login">
          <Login></Login>
        </div>
      </div>
    </b-row>
  </b-container>
</template>

<script>
import RecipePreviewHorizontal from "./RecipePreviewHorizontal.vue";
import Login from "./Login.vue";
export default {
  name: "RecipePreviewList",
  components: {
    RecipePreviewHorizontal,
    Login,
  },
  data() {
    return {
      randomRecipes: [],
      lastSeenRecipes: [],
    };
  },
  mounted() {
    this.updateRecipes();
  },
  methods: {
    async changeRandom() {
      console.log("changing the random recipes");
      await this.getRandom();
      this.componentKey += 1;
    },
    async getRandom() {
      const DOMAIN_PATH = "http://localhost:3000";
      try {
        const response = await this.axios.get(DOMAIN_PATH + "/recipes/random", {
          withCredentials: true,
        });
        const recipes = response.data;
        this.randomRecipes = [];
        this.randomRecipes.push(...recipes);
      } catch (error) {
        console.dir("error at recipe preview list");
      }
    },
    async updateRecipes() {
      const DOMAIN_PATH = "http://localhost:3000";
      try {
        const response = await this.axios
          .create({ withCredentials: true })
          .get(DOMAIN_PATH + "/users/lastThreeViewed", {
            withCredentials: true,
          });
        const recipes = response.data;
        this.lastSeenRecipes = [];
        this.lastSeenRecipes.push(...recipes);
      } catch (error) {
        console.dir("error at recipe preview list");
      }

      await this.getRandom();
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  min-height: 400px;
  max-width: 980px;
  margin: auto;
}
h4 {
  font-size: 27px;
  font-family: Andale Mono, monospace;
  margin-bottom: 10px;
  margin-top: 0px;
  text-align: center;
}

.col {
  padding: 0;
  flex-grow: 0;
}

.random-button {
  padding: 6px 12px 6px 12px;
  font-size: 20.5px;
  border: 2.5px solid;
  border-radius: 6px;
  background: transparent;
  border-color: #d98715;
  color: #d98715;
  font-family: system-ui;
  font-weight: 600;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
}
.random-button:hover,
.random-button:active {
  background-color: #d98715;
  color: white;
}

#login {
  max-width: 470px;
  margin: auto;
  padding: 30px;
  border: 1px solid #e0c0a6;
  border-radius: 4px;
  margin-top: 15px;
}
</style>
