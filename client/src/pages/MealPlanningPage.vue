<template>
  <div>
    <div class="container">
      <h1>Your upcoming Meal</h1>
      <div>
        <table class="table">
          <thead>
            <th>Order</th>
            <th>Recipe</th>
            <th>Progress</th>
            <th>Change Order</th>
            <th>Remove</th>
          </thead>

          <tr v-for="r in todo_recipes" :key="r.order">
            <td>
              <h2>{{ r.order }}</h2>
            </td>
            <td>
              <RecipePreviewHorizontal
                class="recipePreview"
                :recipe="r.recipe_preview"
              ></RecipePreviewHorizontal>
            </td>
            <td>
              <RecipeProgressBar
                :r_id="r.recipe_preview.id"
              ></RecipeProgressBar>
            </td>
            <td>
              <span id="change_order">
                <b-button
                  pill
                  variant="outline-danger"
                  class="order"
                  @click="moveDown(r)"
                  title="move order down"
                  ><b-icon-arrow-down></b-icon-arrow-down
                ></b-button>
                <b-button
                  pill
                  variant="outline-success"
                  class="order"
                  @click="moveUp(r)"
                  title="move order up"
                  ><b-icon-arrow-up></b-icon-arrow-up
                ></b-button>
              </span>
            </td>
            <td>
              <b-icon
                id="delete-icon"
                icon="x-circle"
                @click="remove(r)"
                title="remove recipe from upcoming meal"
              ></b-icon>
            </td>
          </tr>
        </table>

        <b-button @click="removeAll" variant="outline-danger" id="remove-all"
          >remove all recipes from current meal plan</b-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import RecipePreviewHorizontal from "../components/RecipePreviewHorizontal.vue";
import RecipeProgressBar from "../components/RecipeProgressBar.vue";
export default {
  name: "MealPlanning",
  data() {
    return {
      todo_recipes: [],
    };
  },
  mounted() {
    this.getupcomingMeal();
  },
  components: {
    RecipePreviewHorizontal,
    RecipeProgressBar,
  },
  methods: {
    async getUpcommingMeal() {
      const DOMAIN_PATH = "http://localhost:3000";
      try {
        let res = await this.axios
          .create({ withCredentials: true })
          .get(DOMAIN_PATH + "/users/upcomingMeal", {
            withCredentials: true,
          });
        this.todo_recipes = res.data;
      } catch (error) {
        console.log(error);
      }
    },
    async moveDown(r) {
      const DOMAIN_PATH = "http://localhost:3000/";
      if (r.order == this.todo_recipes.length) {
        return;
      }
      try {
        await this.axios.create({ withCredentials: true }).put(
          DOMAIN_PATH + "users/changeRecipeOrderInMeal",
          {
            recipeId: r.recipe_preview.id,
            neworder: r.order + 1,
          },
          { withCredentials: true }
        );
        console.log("order changed");
        this.getupcomingMeal();
      } catch (error) {
        console.log(error);
      }
    },
    async moveUp(r) {
      const DOMAIN_PATH = "http://localhost:3000/";
      if (r.order == 1) {
        return;
      }
      try {
        await this.axios.create({ withCredentials: true }).put(
          DOMAIN_PATH + "users/changeRecipeOrderInMeal",
          {
            recipeId: r.recipe_preview.id,
            neworder: r.order - 1,
          },
          { withCredentials: true }
        );
        console.log("order changed");
        this.getupcomingMeal();
      } catch (error) {
        console.log(error);
      }
    },
    async remove(r) {
      const DOMAIN_PATH = "http://localhost:3000/";
      try {
        await this.axios
          .create({ withCredentials: true })
          .delete(DOMAIN_PATH + "users/removeRecipeFromMeal", {
            data: { recipeId: r.recipe_preview.id },
          });
        let numOfMeals = localStorage.getItem("cart");
        localStorage.setItem("cart", parseInt(numOfMeals) - 1);
        this.getupcomingMeal();
      } catch (error) {
        console.log(error);
      }
    },
    async removeAll() {
      if (this.todo_recipes.length == 0) {
        confirm("No recipes in current meal");
        return;
      }
      const DOMAIN_PATH = "http://localhost:3000/";

      try {
        await this.axios
          .create({ withCredentials: true })
          .delete(DOMAIN_PATH + "users/removeAllRecipesFromMeal", {});
        this.getupcomingMeal();
        localStorage.setItem("cart", 0);
        confirm("All recipes from current meal were successfully removed");
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  max-width: 1800px;
  background-color: #f8f9fa;
  border-radius: 4px;
}

h1 {
  font-family: Andale Mono, monospace;
  font-size: 37px;
  margin-left: 0.5rem;
  margin-bottom: 15px;
  text-align: center;
  padding-top: 10px;
  color: rgb(234, 121, 0);
}

.recipePreview {
  max-width: 250px;
}

h2 {
  font-size: 20px;
}

th {
  font-size: 18px;
}

#remove-all {
  margin-top: 5px;
  margin-bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  position: relative;
}

.order {
  margin-right: 5px;
  margin-left: 5px;
}

#change_order {
  width: min-content;
}

#delete-icon {
  font-size: 30px;
  cursor: pointer;
}

#delete-icon:active {
  color: red;
}

.table {
  margin-bottom: 0;
}
</style>
