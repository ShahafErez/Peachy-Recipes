<template>
  <div
    class="FavoritePage"
    :style="{
      background:
        'url(' + require('@/../resources/background.jpg') + ')  no-repeat',
      backgroundSize: '410px',
    }"
  >
    <div class="FavoritePage">
      <div class="container">
        <RecipePreviewListVertical
          class="FavoriteRecipes center"
          title="Your Favorite Recipes"
          type="favorites"
        />
        <router-link v-if="!$root.store.username" to="/login" tag="button"
          >You need to Login to view this</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import RecipePreviewListVertical from "../components/RecipePreviewListVertical";
export default {
  components: {
    RecipePreviewListVertical,
  },
};
</script>

<style lang="scss" scoped>
.container {
  min-height: 800px;
  padding: 2px;
}

.FavoritePage {
  min-height: 1000px;
}

.FavoriteRecipes {
  margin: auto;
}
</style>
