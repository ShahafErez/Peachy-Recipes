<template>
  <div
    class="PersonalPage"
    :style="{
      background:
        'url(' + require('@/../resources/background.jpg') + ')  no-repeat',
      backgroundSize: '410px',
    }"
  >
    <div class="personal-page">
      <div class="container">
        <RecipePreviewListVertical
          class="PersonalRecipes center"
          title="Your Personal Recipes"
          type="personals"
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
  margin-top: 0px;
  padding: 2px;
}

.personal-page {
  margin: auto;
}
</style>
