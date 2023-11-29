<template>
  <div id="app">
    <div id="nav">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <!-- <img id="small-logo" src="../resources/small-logo.png" /> -->

        <router-link class="navbar-brand logo-nav" :to="{ name: 'main' }"
          ><img id="small-logo" src="../resources/small-logo.png"
        /></router-link>

        <router-link id="nav-title" class="navbar-brand" :to="{ name: 'main' }"
          ><b>Peachy Recipes</b></router-link
        >
        <router-link class="navbar-brand" :to="{ name: 'search' }"
          >Search</router-link
        >
        <router-link class="navbar-brand" :to="{ name: 'about' }"
          >About</router-link
        >
        <span id="guest" v-if="!$root.store.username">
          <router-link class="navbar-brand" :to="{ name: 'register' }"
            >Register</router-link
          >
          <router-link class="navbar-brand" :to="{ name: 'login' }"
            >Login</router-link
          >|
          <span id="welcome-guest">Hello Guest!</span>
        </span>
        <span v-else>
          <span id="logged-in-user"
            ><span id="welcome-user">Hello {{ $root.store.username }}</span
            >|
            <button @click="Logout">Logout</button>
          </span>
          <span class="logged-in">
            <b-dropdown id="nav-dropdown" text="Personal Area" class="m-md-2">
              <b-dropdown-item
                ><router-link class="navbar-brand" :to="{ name: 'favorites' }"
                  >My Favorite Recipes</router-link
                ></b-dropdown-item
              >
              <b-dropdown-item
                ><router-link
                  class="navbar-brand"
                  :to="{ name: 'personalRecipes' }"
                  >My Recipes</router-link
                ></b-dropdown-item
              >
              <b-dropdown-item
                ><router-link
                  class="navbar-brand"
                  :to="{ name: 'familyRecipes' }"
                  >Family Recipes</router-link
                ></b-dropdown-item
              >
            </b-dropdown>
            <div class="add-button">
              <b-button v-b-modal.modal-1>Add Recipe</b-button>
              <NewRecipe id="modal-1" />
            </div>
            <div id="recipe_cart">
              <router-link class="navbar-brand" :to="{ name: 'MealPlanning' }"
                >Upcoming Meal
              </router-link>
              <span id="shopping-cart">{{ numOfMeals }}</span>
            </div>
          </span>
        </span>
      </nav>
    </div>

    <router-view />
  </div>
</template>

<script>
import NewRecipe from "./components/NewRecipe.vue";
export default {
  name: "App",
  components: { NewRecipe },
  methods: {
    async Logout() {
      localStorage.setItem("cart", 0);
      this.$root.store.logout();
      this.$root.toast("Logout", "User logged out successfully", "success");
      const DOMAIN_PATH = "http://localhost:3000";
      try {
        await this.axios.post(DOMAIN_PATH + "/Logout");
      } catch (err) {
        this.form.submitError = err.response.data.message;
      }

      this.$router.push("/").catch(() => {
        this.$forceUpdate();
      });
    },
    async getNumOfMeals() {
      const DOMAIN_PATH = "http://localhost:3000";
      try {
        let response = await this.axios
          .create({ withCredentials: true })
          .get(DOMAIN_PATH + "/users/NumRecipesupcomingMeal", {
            withCredentials: true,
          });
        this.numOfMeals = response.data.toString();
        localStorage.setItem("cart", this.numOfMeals);
      } catch (error) {
        console.log("no upcoming meals");
      }
    },
    updateCart: function() {
      this.loop = setInterval(() => {
        this.numOfMeals = localStorage.getItem("cart");
      }, 5000);
    },
  },
  mounted() {
    this.getNumOfMeals();
    this.updateCart();
  },
  data() {
    return {
      numOfMeals: 0,
    };
  },
};
</script>

<style lang="scss">
@import "@/scss/form-style.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: black;
  min-height: 100vh;
  background-image: "../resources/b2.jpg";
  background-color: #e5edf0;
  padding-bottom: 10px;
}

.navbar.navbar-expand-lg.navbar-light.bg-light {
  padding-bottom: 0;
  padding-top: 0;
}

#nav .navbar-brand.logo-nav {
  margin: 0;
}

#small-logo {
  height: 42px;
  padding: 0px;
  margin: 0;
}

.navbar-brand #small-logo {
  padding: 0px;
  margin: 0;
}

.logged-in {
  display: flex;
}

#nav-title {
  font-family: Andale Mono, monospace;
  font-size: 20px;
}

#nav .navbar-light .navbar-brand:hover {
  color: rgb(234, 121, 0);
}

#nav .navbar-brand {
  margin-right: 13px;
  margin-left: 13px;
}

#logged-in-user {
  position: absolute;
  right: 0px;
  font-size: 1.25rem;
  padding: 0.3125rem 1rem 0.3125rem;
}

#welcome-guest,
#welcome-user,
#logged-in-user button:hover {
  color: rgb(234, 121, 0);
}

#welcome-user {
  margin-right: 15px;
}

#welcome-guest,
#welcome-guest .navbar-brand {
  padding: 0.3125rem 0 0.3125rem 0;
  margin: 0 15px 0 10px;
}

#guest {
  position: absolute;
  right: 0px;
  font-size: 1.25rem;
  padding: 0.3125rem 0 0.3125rem 0;
}

#guest .navbar-brand {
  margin-right: 15px;
  margin-left: 5px;
}

#shopping-cart {
  margin-left: -10px;
  font-size: 17px;
  background: rgb(155 219 163 / 58%);
  padding: 0.5px 2.5px 0.5px 2.5px;
  border-radius: 4px;
}

#logged-in-user button {
  background-color: #f8f9fa;
  color: back;
  padding: 0 10px 0 10px;
  margin-right: 5px;
  border: none;
  border-radius: 4px;
}

#nav-dropdown .navbar-brand {
  font-size: 17px;
  padding-right: 0px;
  padding-left: 0px;
}

#nav-dropdown__BV_toggle_:hover {
  color: rgb(234, 121, 0);
}

.dropdown-menu {
  width: 215px;
}

.dropdown-menu .dropdown-item {
  padding-left: 13px;
}

.dropdown-menu .dropdown-item:active {
  background-color: #d6d6d6;
}

#nav-dropdown__BV_toggle_ {
  background-color: #f8f9fa;
  color: rgba(0, 0, 0, 0.9);
  border: 0px;
  font-size: 1.25rem;
  padding: 0;
}

.add-button button,
.add-button button:hover,
.add-button button:not(:disabled):not(.disabled):active,
.add-button button:not(:disabled):not(.disabled).active,
.add-button button:not(:disabled):not(.disabled):active:focus,
.add-button button:not(:disabled):not(.disabled).active:focus,
.add-button button:focus,
.add-button button.focus {
  align-self: center;
  font-size: 1.25rem;
  color: rgba(0, 0, 0, 0.9);
  background-color: #f8f9fa;
  padding: 0;
  margin: 0.5rem;
  border: none;
  box-shadow: none;
}

#recipe_cart {
  align-self: center;
}

.add-button button:hover,
.add-button button:hover:active,
.add-button button:not(:disabled):not(.disabled):hover,
.add-button button:not(:disabled):not(.disabled):hover.active,
.add-button button:not(:disabled):not(.disabled):hover:active {
  color: rgb(234, 121, 0);
}
</style>
