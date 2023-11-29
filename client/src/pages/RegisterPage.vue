<template>
  <div class="container">
    <div class="register-form">
      <h1 id="title">Register</h1>
      <b-form @submit.prevent="onRegister" @reset.prevent="onReset">
        <!-- username -->
        <b-form-group
          id="input-group-username"
          label-cols-sm="3"
          label="Username:"
          label-for="username"
        >
          <b-form-input
            id="username"
            v-model="$v.form.username.$model"
            type="text"
            :state="validateState('username')"
          ></b-form-input>
          <b-form-invalid-feedback v-if="!$v.form.username.required">
            Username is required
          </b-form-invalid-feedback>
          <b-form-invalid-feedback v-else-if="!$v.form.username.length">
            Username length should be between 3-8 characters long
          </b-form-invalid-feedback>
          <b-form-invalid-feedback v-if="!$v.form.username.alpha">
            Username should include letters only
          </b-form-invalid-feedback>
        </b-form-group>

        <!-- first name -->
        <b-form-group
          id="input-group-firstname"
          label-cols-sm="3"
          label="First Name:"
          label-for="firstname"
        >
          <b-form-input
            id="firstname"
            v-model="$v.form.firstname.$model"
            type="text"
            :state="validateState('firstname')"
          ></b-form-input>
          <b-form-invalid-feedback v-if="!$v.form.firstname.alpha">
            first name should include letters only
          </b-form-invalid-feedback>
        </b-form-group>

        <!-- last name -->
        <b-form-group
          id="input-group-lasttname"
          label-cols-sm="3"
          label="Last Name:"
          label-for="lastname"
        >
          <b-form-input
            id="lastname"
            v-model="$v.form.lastname.$model"
            type="text"
            :state="validateState('lastname')"
          ></b-form-input>
          <b-form-invalid-feedback v-if="!$v.form.username.alpha">
            last name should include letters only
          </b-form-invalid-feedback>
        </b-form-group>

        <!-- country -->
        <b-form-group
          id="input-group-country"
          label-cols-sm="3"
          label="Country:"
          label-for="country"
        >
          <b-form-select
            id="country"
            v-model="$v.form.country.$model"
            :options="countries"
            :state="validateState('country')"
          ></b-form-select>
          <b-form-invalid-feedback>
            Country is required
          </b-form-invalid-feedback>
        </b-form-group>

        <!-- password -->
        <b-form-group
          id="input-group-Password"
          label-cols-sm="3"
          label="Password:"
          label-for="password"
        >
          <!-- v-model="$v.form.password.$model" -->
          <b-form-input
            id="password"
            type="password"
            v-model="$v.form.password.$model"
            :state="validateState('password')"
          ></b-form-input>
          <password-meter :password="$v.form.password.$model" />
          <b-form-invalid-feedback v-if="!$v.form.password.required">
            Password is required
          </b-form-invalid-feedback>
          <b-form-invalid-feedback v-else-if="!$v.form.password.valid">
            Need to contain at least one number and one special character
          </b-form-invalid-feedback>
          <b-form-invalid-feedback
            v-if="$v.form.password.required && !$v.form.password.length"
          >
            Length need to be between 5-10 characters long
          </b-form-invalid-feedback>
        </b-form-group>

        <!-- confirm password -->
        <b-form-group
          id="input-group-confirmedPassword"
          label-cols-sm="3"
          label="Confirm Password:"
          label-for="confirmedPassword"
        >
          <b-form-input
            id="confirmedPassword"
            type="password"
            v-model="$v.form.confirmedPassword.$model"
            :state="validateState('confirmedPassword')"
          ></b-form-input>
          <b-form-invalid-feedback v-if="!$v.form.confirmedPassword.required">
            Password confirmation is required
          </b-form-invalid-feedback>
          <b-form-invalid-feedback
            v-else-if="!$v.form.confirmedPassword.sameAsPassword"
          >
            The confirmed password is not equal to the original password
          </b-form-invalid-feedback>
        </b-form-group>

        <!-- email -->
        <b-form-group
          id="input-group-email"
          label-cols-sm="3"
          label="Email:"
          label-for="email"
        >
          <b-form-input
            id="email"
            v-model="$v.form.email.$model"
            type="email"
            :state="validateState('email')"
          ></b-form-input>
          <b-form-invalid-feedback v-if="!$v.form.email.required">
            email e is required
          </b-form-invalid-feedback>
          <b-form-invalid-feedback v-else-if="!$v.form.firstname.email">
            Please insert a valid email address
          </b-form-invalid-feedback>
        </b-form-group>

        <div class="buttons">
          <b-button id="reset" type="reset" variant="danger">Reset</b-button>
          <b-button id="submit" type="submit" variant="primary"
            >Register</b-button
          >
        </div>
        <div class="mt-2">
          You have an account already?
          <router-link id="login" to="login"> Log in here</router-link>
        </div>
      </b-form>
      <b-alert
        class="mt-2"
        v-if="form.submitError"
        variant="warning"
        dismissible
        show
      >
        <!-- show the error message as returns from the server -->
        Register failed: {{ form.submitError }}
      </b-alert>
    </div>
  </div>
</template>

<script>
import passwordMeter from "vue-simple-password-meter";
import countries from "../assets/countries";
import {
  required,
  minLength,
  maxLength,
  alpha,
  sameAs,
  email,
} from "vuelidate/lib/validators";

export default {
  components: { passwordMeter },
  name: "Register",
  data() {
    return {
      form: {
        username: "",
        firstname: "",
        lastname: "",
        country: null,
        password: null,
        confirmedPassword: "",
        email: "",
        submitError: undefined,
      },
      countries: [{ value: null, text: "", disabled: true }],
      errors: [],
      validated: false,
    };
  },
  validations: {
    form: {
      username: {
        required,
        length: (u) => minLength(3)(u) && maxLength(8)(u),
        alpha,
      },
      firstname: {
        alpha,
      },
      lastname: {
        alpha,
      },
      country: {
        required,
      },
      password: {
        required,
        length: (p) => minLength(5)(p) && maxLength(10)(p),
        valid: function(value) {
          const containsNumber = /[0-9]/.test(value);
          const containsSpecial = /[#?!@$%^&*-]/.test(value);
          return containsNumber && containsSpecial;
        },
      },
      confirmedPassword: {
        required,
        sameAsPassword: sameAs("password"),
      },
      email: {
        required,
        email,
      },
    },
  },
  mounted() {
    this.countries.push(...countries);
  },
  methods: {
    validateState(param) {
      const { $dirty, $error } = this.$v.form[param];
      return $dirty ? !$error : null;
    },
    async Register() {
      const DOMAIN_PATH = "http://localhost:3000";
      console.log("register function");
      try {
        const response = await this.axios.post(DOMAIN_PATH + "/Register", {
          username: this.form.username,
          password: this.form.password,
          firstname: this.form.firstname,
          lastname: this.form.lastname,
          country: this.form.country,
          password: this.form.password,
          email: this.form.email,
        });
        this.$router.push("/login");
      } catch (err) {
        this.form.submitError = err.response.data.message;
        if (err.response.status == 500) {
          this.form.submitError = "Username taken";
        }
      }
    },
    onRegister() {
      this.$v.form.$touch();
      if (this.$v.form.$anyError) {
        return;
      }
      this.Register();
    },
    onReset() {
      this.form = {
        username: "",
        firstName: "",
        lastName: "",
        country: null,
        password: "",
        confirmedPassword: "",
        email: "",
      };
      this.$nextTick(() => {
        this.$v.$reset();
      });
    },
  },
};
</script>
<style lang="scss" scoped>
#submit,
#reset {
  width: 100px;
  margin: 0 10px 0 10px;
}

#submit {
  width: 150px;
}

#login {
  color: rgb(205, 109, 7);
}

.container {
  max-width: 700px;
  background-color: #f8f9fa;
  margin-top: 20px;
  border-radius: 7px;
}

#title {
  font-family: Andale Mono, monospace;
  font-size: 37px;
  margin-bottom: 15px;
  padding-top: 10px;
  text-align: center;
  color: rgb(234, 121, 0);
}

.register {
  max-width: 95%;
  margin: auto;
}

.buttons {
  margin-left: 5%;
  margin-bottom: 15px;
}

.mt-2 {
  font-size: 17px;
}

.form-row.form-group {
  align-items: center;
}

.alert .mt-2 .alert-dismissible .alert-warning {
  margin-top: 5px;
  margin-bottom: 5px;
}

.col-sm-3 .col-form-label {
  padding-top: 0px;
}

.po-password-strength-bar {
  border-radius: 2px;
  transition: all 0.2s linear;
  height: 5px;
  margin-top: 8px;
}

.po-password-strength-bar.risky {
  background-color: #f95e68;
}

.po-password-strength-bar.guessable {
  background-color: #fb964d;
}

.po-password-strength-bar.weak {
  background-color: #fdd244;
}

.po-password-strength-bar.safe {
  background-color: #b0dc53;
}

.po-password-strength-bar.secure {
  background-color: #35cc62;
}
</style>
