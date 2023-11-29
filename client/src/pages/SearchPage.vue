<template>
  <div class="container">
    <h1 class="title">Search Page</h1>
    <div id="details">
      <b-nav-form>
        <b-container>
          <b-row>
            <b-col>
              <b-form-input
                id="search"
                placeholder="Search..."
                v-model="$v.form.search.$model"
                label-for="search"
                type="text"
                :state="validateState('search')"
                size="lg"
                style="width: 800px;"
              ></b-form-input>
            </b-col>
            <b-form-invalid-feedback
              v-if="$v.form.search.length"
            ></b-form-invalid-feedback>
            <b-col>
              <b-button
                variant="outline-success"
                type="submit"
                @click="onSearch"
                size="lg"
                >Search</b-button
              >
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <b-dropdown
                toggle-class="customDropdown"
                variant="none"
                class="m-md-2"
                id="numSearchResult"
                :text="numberOfResults_text"
              >
                <b-dropdown-item @click="numSearchResult('5')"
                  >5</b-dropdown-item
                >
                <b-dropdown-item @click="numSearchResult('10')"
                  >10</b-dropdown-item
                >
                <b-dropdown-item @click="numSearchResult('15')"
                  >15</b-dropdown-item
                >
              </b-dropdown>
            </b-col>
            <b-col>
              <b-dropdown
                id="cuisine"
                toggle-class="customDropdown"
                variant="none"
                class="m-md-2"
                :text="selectedCuisine"
              >
                <b-dropdown-item-button
                  v-for="c in cuisines"
                  :key="c.text"
                  @click.prevent="setCuisine(c)"
                  >{{ c }}</b-dropdown-item-button
                >
              </b-dropdown>
            </b-col>
            <!--diet dropdown box-->
            <b-col>
              <b-dropdown
                id="diet"
                toggle-class="customDropdown"
                variant="none"
                class="m-md-2"
                :text="selectedDiet"
              >
                <b-dropdown-item-button
                  v-for="c in diets"
                  :key="c.text"
                  @click.prevent="setDiet(c)"
                  >{{ c }}</b-dropdown-item-button
                >
              </b-dropdown>
            </b-col>
            <!--intolerance dropdown box-->
            <b-col>
              <b-dropdown
                id="intolerance"
                toggle-class="customDropdown"
                variant="none"
                class="m-md-2"
                :text="selectedIntolerance"
              >
                <b-dropdown-item-button
                  v-for="c in intolerances"
                  :key="c.text"
                  @click.prevent="setIntolerance(c)"
                  >{{ c }}</b-dropdown-item-button
                >
              </b-dropdown>
            </b-col>
          </b-row>
        </b-container>
      </b-nav-form>
      <b-row v-if="this.hasLastSearch">
        <p id="last-search">
          <span>{{ last_search }}</span>
        </p>
      </b-row>
      <b-row id="sort-by" v-if="this.isEmpty == 0">
        <b-form-group label="Sort by:">
          <b-form-radio
            value="cooking_duration"
            name="sortOpt"
            @change.native="sortByCookingDuration($event)"
            >Cooking Duration</b-form-radio
          >
          <b-form-radio
            value="popularity"
            name="sortOpt"
            @change.native="sortByPopularity($event)"
            >Popularity</b-form-radio
          >
        </b-form-group>
      </b-row>
    </div>
    <b-row v-if="this.isEmpty == 0" cols="3" id="preview-col">
      <b-col v-for="item in results" :key="item.id">
        <RecipePreview class="searchResultsPreview" :recipe="item" />
      </b-col>
    </b-row>
    <b-row v-if="this.isEmpty == 1">
      <b-alert show variant="danger"
        ><p class="alert-link">Oops! Nothing matches your search.</p></b-alert
      >
    </b-row>
  </div>
</template>

<script>
import { required, minLength } from "vuelidate/lib/validators";
import cuisines from "../assets/cuisines";
import diets from "../assets/diets";
import intolerances from "../assets/intolerances";
import RecipePreview from "../components/RecipePreview.vue";
export default {
  name: "searchResult",
  data() {
    return {
      form: {
        search: "",
      },
      search: "",
      numberOfResults: "5", //default
      hasResult: false,
      results: [],
      selectedCuisine: "Cuisine",
      selectedDiet: "Diet",
      selectedIntolerance: "Intolerance",
      cuisines: [],
      diets: [],
      intolerances: [],
      cusine: "",
      diet: "",
      intolerance: "",
      numberOfResults_text: "Number of results",
      isEmpty: 5,
      lastSearchUsername: "",
      hasLastSearch: false,
      last_search: "",
    };
  },
  validations: {
    form: {
      search: {
        required,
        length: (u) => minLength(1)(u),
        alphvalid: function(value) {
          return /^[A-Za-z\s]*$/.test(value);
        },
      },
    },
  },
  mounted() {
    this.cuisines.push(...cuisines);
    this.diets.push(...diets);
    this.intolerances.push(...intolerances);
    this.last_search = localStorage.last_search_str;

    if (this.last_search && localStorage.username == this.lastSearchUsername) {
      this.hasLastSearch = true;
    }
  },
  components: {
    RecipePreview,
  },

  methods: {
    validateState(param) {
      const { $dirty, $error } = this.$v.form[param];
      return $dirty ? !$error : null;
    },
    async Search() {
      this.lastSearchUsername = localStorage.username;
      const DOMAIN_PATH = "http://localhost:3000";
      console.log("search function");
      //get results
      try {
        let last_search_str = `Your last search was: ${this.userSearchTerm}\n
        (${this.numberOfResults} results).\n`;

        let path_to_exe =
          DOMAIN_PATH +
          "/recipes/search/" +
          this.userSearchTerm +
          "?numOfResults=" +
          this.numberOfResults;
        this.numberOfResults;
        if (this.selectedCuisine != null && this.selectedCuisine != "Cuisine") {
          path_to_exe += "&cuisine=" + this.selectedCuisine;
          last_search_str += `cuisine: ${this.selectedCuisine} `;
        }
        if (this.selectedDiet != null && this.selectedDiet != "Diet") {
          path_to_exe += "&diet=" + this.selectedDiet;
          last_search_str += `,diet: ${this.selectedDiet} `;
        }
        if (
          this.selectedIntolerance != null &&
          this.selectedIntolerance != "Intolerance"
        ) {
          path_to_exe += "&intolerance=" + this.selectedIntolerance;
          last_search_str += `,intolerance: ${this.selectedIntolerance} `;
        }
        if (localStorage.username) {
          //save last search params
          this.hasLastSearch = true;
          this.last_search = last_search_str;
          localStorage.setItem("last_search_str", last_search_str);
        }
        const response = await this.axios.get(path_to_exe, {
          withCredentials: true,
        });
        if (response.status == 204 && response.statusText == "No Content") {
          this.isEmpty = 1;
        } else if (response.status == 200) {
          this.isEmpty = 0;
          const recipes = response.data;
          this.results = [];
          this.results.push(...recipes);
        }
      } catch (err) {
        console.log(err.response);
      }
    },
    onSearch() {
      this.$v.form.$touch();
      if (this.$v.form.$anyError) {
        return;
      }
      this.userSearchTerm = this.form.search;
      this.Search();
    },
    numSearchResult(num) {
      this.numberOfResults = num.toString();
      this.numberOfResults_text = num;
    },
    setCuisine(cType) {
      if (cType != "All Cuisines" || cType != "Cuisine") {
        this.selectedCuisine = cType;
      } else {
        this.selectedCuisine = null;
      }
    },
    setDiet(dType) {
      if (dType != "All Diets" || dType != "Diet") {
        this.selectedDiet = dType;
      } else {
        this.selectedDiet = null;
      }
    },
    setIntolerance(iType) {
      if (iType != "No Intolerances" || iType != "Intolerance") {
        this.selectedIntolerance = iType;
      } else {
        this.selectedIntolerance = null;
      }
    },
    sortByCookingDuration: function() {
      this.isEmpty = 1; //to stop show of recipes
      this.results.sort(function(x, y) {
        return x.readyInMinutes - y.readyInMinutes;
      });
      this.isEmpty = 0; //show after sort
    },
    sortByPopularity: function() {
      this.isEmpty = 1; //to stop show of recipes
      this.results.sort(function(x, y) {
        return y.popularity - x.popularity;
      });
      this.isEmpty = 0; //show after sort
    },
  },
};
</script>

<style lang="scss" scoped>
container {
  padding: 20px;
  font-family: Helvetica;
}

.container {
  max-width: 1600px;
  background-color: #f8f9fa;
  border-radius: 4px;
}

.row#sort-by {
  margin-left: 0px;
}

.alert {
  margin-left: 25px;
}

.alert p {
  margin: 0;
}

#preview-col {
  margin-left: 0px;
}

p {
  margin-bottom: 0px;
}

.m-md-2 {
  width: 170px;
}

.row #sort-by {
  margin-left: 60px;
}

#details {
  display: inline-block;
}

.dropdown.b-dropdown.m-md-2.btn-group {
  background-color: rgb(239, 216, 202);
  border-radius: 5px;
}

.dropdown.b-dropdown.m-md-2.btn-group button {
  font-size: 18px;
}

#cuisine__BV_toggle_ {
  font-size: 18px;
}

.btn.btn-outline-success.btn-lg {
  margin-left: 15px;
}

.title {
  font-family: Andale Mono, monospace;
  font-size: 37px;
  margin-left: 0.5rem;

  padding-top: 10px;
  color: rgb(234, 121, 0);
}

.form-group {
  margin-left: 15px;
}

#search {
  margin-left: 0.5rem;
  margin-top: 0px;
}

.col {
  display: contents;
}

.searchResultsPreview {
  margin: 0px 7px 12px 7px;
}

.row {
  margin-top: 10px;
}

.row #__BVID__110 {
  margin-left: 10px;
}

.bv-no-focus-ring.col-form-label.pt-0 {
  font-size: 40px;
}

.SearchRecipes {
  margin: auto;
}

#last-search {
  margin-left: 23px;
  font-size: 20px;
  padding: 3px 6px 3px 6px;
  border-radius: 6px;
  color: #3d9e3d;
}

.alert {
  width: 900px;
}
</style>
