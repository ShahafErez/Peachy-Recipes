<template>
  <div>
    <b-icon
      @click="markFavorite(recipe)"
      v-if="recipe.isFavorite === false"
      class="heart_icon"
      icon="heart"
      font-scale="1.8"
    ></b-icon>

    <b-icon
      id="favorite"
      @click="unmarkFavorite(recipe)"
      v-if="recipe.isFavorite === true"
      class="heart_icon"
      icon="heart-fill"
      font-scale="1.8"
    ></b-icon>
  </div>
</template>

<script>
export default {
  name: "FavoriteButton",
  props: {
    recipe: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {};
  },

  methods: {
    async markFavorite(recipe) {
      try {
        await this.axios.create({ withCredentials: true }).post(
          this.$domainPath + "/users/favorites",
          { recipeId: recipe.id },
          {
            params: {
              personal: recipe.isPersonal,
            },
          }
        );
        recipe.isFavorite = true;
      } catch (error) {
        if (error.response.status == 401) {
          this.$router.push("/login");
        } else if (error.response.status == 409) {
          recipe.isFavorite = true;
        }
        console.dir("error at marking as favorite");
        console.dir(error);
      }
    },
    async unmarkFavorite(recipe) {
      try {
        await this.axios
          .create({ withCredentials: true })
          .delete(this.$domainPath + "/users/favorites", {
            data: {
              recipeId: recipe.id,
            },
            params: {
              personal: recipe.isPersonal,
            },
          });
        recipe.isFavorite = false;
      } catch (error) {
        console.dir("error at unmarking as favorite");
        console.dir(error);
      }
    },
  },
};
</script>

<style scoped>
.b-icon {
  cursor: pointer;
}

#favorite {
  color: rgb(231, 143, 56);
}
</style>
