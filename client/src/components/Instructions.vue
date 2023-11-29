<template>
  <div>
    <h1>
      Instructions
    </h1>
    <div class="wrapped">
      <div class="step">
        <div class="specific-step" v-for="s in instructions" :key="s.number">
          <div id="step-title">step {{ s.number }}:</div>
          <div id="step-description">{{ s.step }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Instructions",
  props: {
    instructions: {
      type: Array,
    },
  },
};
</script>

<style scoped>
.step {
  font-size: 17px;
}

.specific-step {
  margin-bottom: 30px;
}

h1 {
  font-size: 23px;
  margin-bottom: 25px;
  font-family: FreeMono, monospace;
}

#step-title {
  font-family: FreeMono, monospace;
  text-decoration: underline;
}

#step-description {
  margin-top: 5px;
}
</style>
