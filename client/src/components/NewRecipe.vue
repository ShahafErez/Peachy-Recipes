<template>
  <div>
    <b-modal id="modal-1" title="Create Your New Recipe">
      <div>
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
          <b-form-group id="title" label="Title:" label-for="input-1">
            <b-form-input
              id="input-1"
              v-model="$v.form.title.$model"
              type="text"
              placeholder="Enter your recipe title"
              :state="validateState('title')"
              required
            ></b-form-input>
            <b-form-invalid-feedback v-if="!$v.form.title.required">
              title is required
            </b-form-invalid-feedback>
            <b-form-invalid-feedback v-else-if="!$v.form.title.length">
              title length should be between up to 100 characters long
            </b-form-invalid-feedback>
            <b-form-invalid-feedback v-else-if="!$v.form.title.valid">
              title can't contain special characters
            </b-form-invalid-feedback>
          </b-form-group>

          <!-- image -->
          <b-form-group
            id="input-group-2"
            label="Image url:"
            label-for="input-2"
          >
            <b-form-input
              id="input-2"
              v-model="$v.form.image.$model"
              placeholder="Enter your recipe's image url"
              :state="validateState('image')"
            ></b-form-input>
            <b-form-invalid-feedback v-if="!$v.form.image.url">
              please enter a valid url
            </b-form-invalid-feedback>
          </b-form-group>

          <!-- readyInMinutes && ServingSize -->
          <div>
            <b-form inline>
              <label class="mr-sm-2" for="inline-form-custom-select-pref"
                >Minutes to make</label
              >
              <b-form-input
                v-model="$v.form.readyInMinutes.$model"
                id="inline-form-input-readyTime"
                class="mb-2 mr-sm-2 mb-sm-0"
                type="number"
                :state="validateState('readyInMinutes')"
              ></b-form-input>
              <label class="mr-sm-2" for="inline-form-custom-select-pref"
                >Serving size</label
              >

              <b-form-input
                v-model="$v.form.servingSize.$model"
                id="inline-form-input-username"
                type="number"
                :state="validateState('servingSize')"
              ></b-form-input>
              <b-form-invalid-feedback v-if="!$v.form.servingSize.valid">
                serving size to make need to be a positive number
              </b-form-invalid-feedback>
              <b-form-invalid-feedback v-if="!$v.form.readyInMinutes.valid">
                minutes to make need to be a positive number
              </b-form-invalid-feedback>
            </b-form>
          </div>

          <!-- nutritious -->
          <b-form-group
            label="Select if the following matches your recipe:"
            id="input-group-4"
            v-slot="{ ariaDescribedby }"
          >
            <b-form-checkbox-group
              v-model="form.checked"
              id="checkboxes-4"
              :aria-describedby="ariaDescribedby"
            >
              <b-form-checkbox
                v-model="form.nutritious"
                value="vegan"
                unchecked-value="not_vegan"
                >Vegan</b-form-checkbox
              >
              <b-form-checkbox
                value="vegetarian"
                unchecked-value="not_vegetarian"
                >Vegeterian</b-form-checkbox
              >
              <b-form-checkbox
                value="gluten-free"
                unchecked-value="not_gluten-free"
                >Gluten Free</b-form-checkbox
              >
            </b-form-checkbox-group>

            <!-- ingredients -->
            <div class="ingredients">
              <h5 class="input-title">Ingredients</h5>
              <div>
                <table class="table">
                  <thead>
                    <th>Name</th>
                    <th>Amount</th>
                    <th>Unit</th>
                  </thead>

                  <tr v-for="i in ingredients" :key="i.ingredientName">
                    <td>{{ i.ingredientName }}</td>
                    <td>{{ i.amount }}</td>
                    <td>{{ i.unit }}</td>
                  </tr>
                </table>
              </div>
              <b-form inline @submit.prevent="addIngredient">
                <label class="sr-only" for="inline-form-input-name">Name</label>
                <b-form-input
                  id="ingredient-name"
                  v-model="$v.form.ingredientName.$model"
                  class="mb-2 mr-sm-2 mb-sm-0"
                  placeholder="Name"
                  :state="validateState('ingredientName')"
                ></b-form-input>

                <label class="sr-only" for="inline-form-input-name"
                  >Amount</label
                >
                <b-form-input
                  id="amount"
                  v-model="$v.form.amount.$model"
                  class="mb-2 mr-sm-2 mb-sm-0"
                  placeholder="Amount"
                  type="text"
                  :state="validateState('amount')"
                ></b-form-input>
                <label class="sr-only" for="inline-form-input-name">Unit</label>
                <b-form-input
                  id="unit"
                  v-model="$v.form.unit.$model"
                  class="mb-2 mr-sm-2 mb-sm-0"
                  placeholder="Unit"
                  type="text"
                  :state="validateState('unit')"
                ></b-form-input>
                <div>
                  <b-button
                    type="submit"
                    variant="primary"
                    class="submit-buttons"
                    >Add Ingredient</b-button
                  >
                </div>

                <b-form-invalid-feedback v-if="!$v.form.ingredientName.length">
                  ingredient name should be up to 100 characters long
                </b-form-invalid-feedback>
                <b-form-invalid-feedback
                  v-else-if="!$v.form.ingredientName.alpha"
                >
                  ingredient name should include letters only
                </b-form-invalid-feedback>
                <b-form-invalid-feedback v-if="!$v.form.amount.valid">
                  amount should be a positive number
                </b-form-invalid-feedback>
                <b-form-invalid-feedback v-if="!$v.form.unit.alpha">
                  unit should contain letters only
                </b-form-invalid-feedback>
                <b-form-invalid-feedback v-else-if="!$v.form.unit.length">
                  unit should be up to 45 characters long
                </b-form-invalid-feedback>
              </b-form>
            </div>

            <!-- instructions -->
            <div class="instructions">
              <h5 class="input-title">Instructions</h5>
              <div>
                <table class="table">
                  <thead>
                    <th>Number</th>
                    <th>Step</th>
                  </thead>

                  <tr v-for="i in instructionsArray" :key="i.number">
                    <td>{{ i.number }}</td>
                    <td>{{ i.step }}</td>
                  </tr>
                </table>
              </div>
              <b-form inline @submit.prevent="addInstructions">
                <label class="sr-only" for="inline-form-input-name"
                  >instruction</label
                >
                <b-form-textarea
                  placeholder="Instruction Step"
                  id="step-text"
                  value="instruction"
                  v-model="form.step"
                  class="mb-2 mr-sm-2 mb-sm-0"
                ></b-form-textarea>
                <div class="submit-buttons">
                  <b-button type="submit" variant="primary"
                    >Add Instruction</b-button
                  >
                </div>
              </b-form>
            </div>
          </b-form-group>
          <div class="buttons">
            <b-button type="submit" variant="primary">Submit</b-button>
            <b-button type="reset" variant="danger">Reset</b-button>
          </div>
        </b-form>
      </div>
      <template #modal-footer="{ cancel }">
        <b-button id="close-button" size="sm" @click="cancel()">
          close
        </b-button>
      </template>
    </b-modal>
  </div>
</template>

<script>
import {
  required,
  maxLength,
  alpha,
  url,
  numeric,
} from "vuelidate/lib/validators";
export default {
  name: "NewRecipe",
  created() {
    this.ingredients = [];
    this.instructionsArray = [];
    this.showIngridentsMeesage = false;
    this.showInstructionMeesage = false;
    this.IngridentsMeesage = "";
    this.showMessages = true;
  },
  destroyed() {
    this.onReset();
  },
  data() {
    return {
      form: {
        title: "",
        image: "",
        readyInMinutes: null,
        servingSize: null,
        ingredients: [],
        vegan: null,
        vegetarian: null,
        glutenFree: null,
        checked: [],
        ingredientName: "",
        amount: null,
        unit: "",
        step: "",
      },

      show: true,
    };
  },
  validations: {
    form: {
      title: {
        required,
        length: (t) => maxLength(100)(t),
        valid: function(value) {
          return !/[#?@'$%^*]/.test(value);
        },
      },
      image: {
        url,
      },
      readyInMinutes: {
        valid: function(value) {
          if (value == undefined) {
            return true;
          }
          const containsMinus = /[-]/.test(value);
          return !containsMinus && value >= 1;
        },
        numeric,
      },
      servingSize: {
        valid: function(value) {
          if (value == undefined) {
            return true;
          }
          const containsMinus = /[-]/.test(value);
          return !containsMinus && value > 0;
        },
        numeric,
      },
      ingredientName: {
        valid: function(value) {
          if (value == undefined) {
            return true;
          }
          return maxLength(100)(value) && /^[A-Za-z\s]*$/.test(value);
        },
      },
      amount: {
        valid: function(value) {
          if (value == undefined) {
            return true;
          }
          return value > 0;
        },
      },

      unit: {
        alpha,
        length: (t) => maxLength(100)(45),
      },
      step: {
        length: (t) => maxLength(1000)(t),
      },
    },
  },
  methods: {
    validateState(param) {
      const { $dirty, $error } = this.$v.form[param];
      return $dirty ? !$error : null;
    },
    async onSubmit(event) {
      event.preventDefault();
      this.$v.form.$touch();
      if (this.$v.form.$anyError) {
        return;
      }
      console.log(`submitting recipe`);

      await this.AddRecipe();
      this.onReset();
    },
    async AddRecipe() {
      this.$root.toast(
        "Recipe Added",
        "new recipe added successfully",
        "success"
      );
      let vegan = false;
      let vegetarian = false;
      let glutenFree = false;

      if (this.form.nutritious != undefined) {
        this.form.nutritious.forEach((item) => {
          if (item === "vegan") {
            vegan = 1;
          }
          if (item === "vegetarian") {
            vegetarian = 1;
          }
          if (item === "gluten-free") {
            glutenFree = 1;
          }
        });
      }

      const DOMAIN_PATH = "http://localhost:3000";
      try {
        await this.axios
          .create({ withCredentials: true })
          .post(DOMAIN_PATH + "/users/add", {
            title: this.form.title,
            image: this.form.image,
            readyInMinutes: this.form.readyInMinutes,
            vegan: vegan,
            vegetarian: vegetarian,
            glutenFree: glutenFree,
            ingredientsAndQuantities: this.ingredients,
            instructions: this.instructionsArray,
            servingSize: this.form.servingSize,
          });
      } catch (err) {
        this.form.submitError = err.response.data.message;
      }
    },
    onReset() {
      this.form = {
        title: "",
        image: "",
        readyInMinutes: null,
        servingSize: null,
        vegan: null,
        vegetarian: null,
        glutenFree: null,
        checked: [],
        ingredientName: "",
        amount: null,
        unit: null,
        step: "",
      };
      this.instructionsArray = [];
      this.ingredients = [];

      this.$nextTick(() => {
        this.$v.$reset();
      });
      this.showIngridentsMeesage = false;
      this.showInstructionMeesage = false;
    },
    addIngredient() {
      if (
        this.$v.form.amount.$anyError ||
        this.$v.form.unit.$anyError ||
        this.$v.form.ingredientName.$anyError
      ) {
        return;
      }
      if (this.form.ingredientName == "") {
        alert("Ingredient name is required");
        return;
      }
      if (this.form.amount == null) {
        alert("Ingredient amount is required");
        return;
      }

      this.showIngridentsMeesage = true;
      this.IngridentsMeesage = this.form.ingredientName;
      this.ingredients.push({
        ingredientName: this.form.ingredientName,
        amount: parseFloat(this.form.amount).toFixed(2),
        unit: this.form.unit,
      });
      (this.form.ingredientName = ""),
        (this.form.amount = null),
        (this.form.unit = null);
    },

    addInstructions() {
      if (this.$v.form.step.$anyError) {
        return;
      }
      this.showInstructionMeesage = true;

      this.form.step = this.form.step.replace("'", "");

      this.instructionsArray.push({
        number: this.instructionsArray.length + 1,
        step: this.form.step,
      });
      this.form.step = "";
    },
  },
};
</script>

<style scope>
.btn.btn-primary {
  background-color: #68a376;
  border-color: #68a376;
}

input.form-control {
  padding-right: calc(1.5em + 0.75rem) !important;
}
.btn.btn-primary:hover,
.btn.btn-primary:focus,
.btn.btn-primary,
.btn.btn-primary:not(:disabled):not(.disabled):active {
  background-color: #84bd91;
  border-color: #84bd91;
}

#input-group-4 {
  margin-top: 40px;
}

.btn-danger {
  background-color: #c54b57;
  border-color: #c54b57;
  margin-left: 20px;
}

.buttons {
  text-align: center;
}

#close-button {
  font-size: 18px;
  margin-right: 15px;
  background-color: rgb(161, 171, 171);
  border-color: rgb(161, 171, 171);
}

.ingredients {
  margin-top: 30px;
}
</style>

<style>
#modal-1 .modal-dialog {
  max-width: 850px;
}

#title__BV_label_ {
  margin-top: 0;
}

.modal-body {
  margin: auto;
  width: 99%;
}

.d-block,
.input-title,
.bv-no-focus-ring.col-form-label.pt-0,
.mr-sm-2 {
  font-size: 18px;
  font-weight: normal;
}

#inline-form-input-readyTime {
  padding-top: 0px;
  padding-bottom: 0px;
}

#checkboxes-4 {
  margin-bottom: 10px;
}

.custom-control-label {
  font-size: 17px;
  margin: 5px;
}

.form-control {
  width: 98.6%;
  height: calc(1.25em + 0.75rem + 2px);
}

.form-inline label,
.mr-sm-2 label,
.form-inline .mr-sm-2 {
  margin-bottom: 9px;
}

label {
  margin-top: 10px;
  margin-bottom: 10px;
}

.submit-buttons {
  margin-top: 8px;
}

#ingredient-name,
#amount,
#unit {
  padding-left: 4px;
  padding-right: 0px;
}

.invalid-feedback {
  margin-left: 10px;
}

.form-inline .form-control {
  width: inherit;
}

.form-inline.form-control {
  width: inherit;
}

.alert-info {
  margin-top: 10px;
}

#step-text {
  width: 91%;
}
</style>
