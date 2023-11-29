<template>
  <div
    class="mainPage"
    :style="{
      background:
        'url(' + require('@/../resources/background.jpg') + ')  no-repeat',
      backgroundSize: '410px',
    }"
  >
    <div class="mainPage">
      <div class="container">
        <img id="logo" src="../../resources/logo-with-names.jpg" />
        <div class="row">
          <div class="col-sm">
            <RecipePreviewListMain></RecipePreviewListMain>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RecipePreviewListMain from "../components/RecipePreviewListMain.vue";
export default {
  data() {
    return {};
  },
  mounted() {
    console.log("main page mounted");
  },
  components: {
    RecipePreviewListMain,
  },
};
</script>

<style lang="scss" scoped>
.container {
  padding: 20px;
  padding-top: 8px;
  font-family: Helvetica;
  max-width: 1330px;
}

.RandomRecipes {
  margin: auto;
}

.RandomRecipes.center.container {
  text-align: -webkit-center;
}

.blur {
  -webkit-filter: blur(5px);
  filter: blur(2px);
}
::v-deep .blur .recipe-preview {
  pointer-events: none;
  cursor: default;
}

#logo {
  height: 233px;
  margin: auto;
  display: block;
}

#login {
  display: flex;
  margin: auto;
  background-color: #cdf0c4;
  padding: 4px 15px 4px 15px;
  border-radius: 36px;
  width: 30%;
  place-content: center;
  font-size: 18px;
  border: 1px solid white;
}
</style>
