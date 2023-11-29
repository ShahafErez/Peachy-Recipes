<template>
  <div>
    <b-progress :max="max" height="2rem" class="mb-3">
      <b-progress-bar variant="success" :value="value">
        <span
          ><strong>{{ value.toFixed(2) }} / {{ max }}</strong></span
        >
      </b-progress-bar>
    </b-progress>
  </div>
</template>

<script>
export default {
  name: "ProgressBar",
  props: {
    r_id: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      max: 0,
      value: 0,
    };
  },
  created() {},
  mounted() {
    this.max = this.get_Session_Value()[1];
    this.value = this.get_Session_Value()[0];
    console.log("recipe progress bar this.value : " + this.value);
  },
  methods: {
    get_Session_Value() {
      return JSON.parse(sessionStorage.making_progress)[this.r_id];
    },
  },
};
</script>
