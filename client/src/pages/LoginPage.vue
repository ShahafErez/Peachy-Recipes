<template>
  <div class="container">
    <h1 class="title">Login</h1>
    <Login></Login>
  </div>
</template>

<script>
import Login from "../components/Login.vue";
export default {
  name: "LoginPage",
  components: {
    Login,
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
</style>
