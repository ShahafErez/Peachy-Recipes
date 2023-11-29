<template>
  <div>
    <b-form @submit.prevent="onLogin">
      <b-form-group
        id="input-group-Username"
        label-cols-sm="3"
        label="Username:"
        label-for="Username"
      >
        <b-form-input
          id="Username"
          v-model="$v.form.username.$model"
          type="text"
          :state="validateState('username')"
        ></b-form-input>
        <b-form-invalid-feedback>
          Username is required
        </b-form-invalid-feedback>
      </b-form-group>

      <b-form-group
        id="input-group-Password"
        label-cols-sm="3"
        label="Password:"
        label-for="Password"
      >
        <b-form-input
          id="Password"
          type="password"
          v-model="$v.form.password.$model"
          :state="validateState('password')"
        ></b-form-input>
        <b-form-invalid-feedback>
          Password is required
        </b-form-invalid-feedback>
      </b-form-group>

      <b-button
        type="submit"
        variant="primary"
        style="width:100px;display:block;"
        class="mx-auto w-100"
        >Login</b-button
      >
      <div class="mt-2" id="register">
        Do not have an account yet?
        <router-link to="register"> Register in here</router-link>
      </div>
    </b-form>
    <b-alert
      class="mt-2"
      v-if="form.submitError"
      variant="warning"
      dismissible
      show
    >
      Login failed: {{ form.submitError }}
    </b-alert>
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";
export default {
  name: "Login",
  data() {
    return {
      form: {
        username: "",
        password: "",
        submitError: undefined,
      },
    };
  },
  validations: {
    form: {
      username: {
        required,
      },
      password: {
        required,
      },
    },
  },
  methods: {
    validateState(param) {
      const { $dirty, $error } = this.$v.form[param];
      return $dirty ? !$error : null;
    },
    async Login() {
      const DOMAIN_PATH = "http://localhost:3000";
      try {
        const response = await this.axios.post(
          DOMAIN_PATH + "/Login",
          {
            username: this.form.username,
            password: this.form.password,
          },
          { withCredentials: true }
        );
        this.$root.store.login(this.form.username, response.data.user_id);
        this.getNumOfMeals();
        this.$router.push("/");
      } catch (err) {
        this.form.submitError = err.response.data.message;
      }
    },
    onLogin() {
      console.log("login method called");
      this.form.submitError = undefined;
      this.$v.form.$touch();
      if (this.$v.form.$anyError) {
        return;
      }
      console.log("login method go");

      this.Login();
    },
    async getNumOfMeals() {
      const DOMAIN_PATH = "https://chenshahafrecipes.cs.bgu.ac.il";
      try {
        let response = await this.axios
          .create({ withCredentials: true })
          .get(DOMAIN_PATH + "/users/NumRecipesupcomingMeal", {
            withCredentials: true,
          });
        localStorage.setItem("cart", response.data.toString());
      } catch (error) {
        console.log("no upcoming meals");
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.container {
  max-width: 400px;
}

.title {
  font-family: Andale Mono, monospace;
  font-size: 37px;
  padding-top: 10px;
  text-align: center;
}

.form-row.form-group {
  align-items: baseline;
}

.mx-auto.w-100 {
  margin-bottom: 15px;
}

#register {
  text-align: center;
  font-family: system-ui;
  font-size: 17px;
}

#register a {
  color: rgb(205, 109, 7);
}

b-form {
  font-family: system-ui;
  font-size: 17px;
}
</style>
