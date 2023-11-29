<template>
  <b-container class="recipes-container">
    <h4>
      {{ title }}
      <slot></slot>
    </h4>
    <b-row>
      <b-col v-for="r in recipes" :key="r.id">
        <RecipePreview class="recipePreview" :recipe="r" />
      </b-col>
    </b-row>
    <b-row>
      <b-alert v-if="!this.hasContent" show variant="danger"
        ><a class="alert-link">You don't have {{ type }} recipes</a></b-alert
      >
    </b-row>
  </b-container>
</template>

<script>
import RecipePreview from "./RecipePreview.vue";
export default {
  name: "RecipePreviewListVertical",
  components: {
    RecipePreview,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      require: true,
    },
  },
  data() {
    return {
      recipes: [],
      hasContent: true,
    };
  },
  mounted() {
    console.log("Recipe Preview List mounted");
    this.updateRecipes();
  },
  methods: {
    async updateRecipes() {
      const DOMAIN_PATH = "http://localhost:3000";
      try {
        const response = await this.axios.get(
          DOMAIN_PATH + "/users/" + this.type,
          { withCredentials: true }
        );
        if (response.status == 200) {
          const recipes = response.data;
          this.recipes = [];
          this.recipes.push(...recipes);
        } else if (response.status == 204) {
          // no fav recipes
          this.hasContent = false;
        }
      } catch (error) {
        console.dir("error at Recipe Preview List");
      }
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

.recipes-container {
  margin-top: 30px;
}

.col {
  flex-grow: 0;
}

h4 {
  font-size: 27px;
  font-family: Andale Mono, monospace;
  margin-bottom: 15px;
  margin-top: 15px;
  text-align: -webkit-center;
}

.recipePreview {
  margin-bottom: 25px;
}

.alert-danger,
.alert-danger:hover,
.alert-danger .alert-link,
a {
  color: #070303;
  margin: auto;
  background-color: #f8e7d7;
  border-color: #dab699;
  text-decoration: none;
  font-size: 20px;
  font-weight: normal;
}

.col {
  padding-right: 0;
}
</style>
