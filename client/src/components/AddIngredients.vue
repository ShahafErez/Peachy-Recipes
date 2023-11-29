<template>
  <div>
  <b-form inline @submit.prevent="addIngredient">
    <label class="sr-only" for="inline-form-input-name">Name</label>
    <b-form-input
      id="input-name"
      v-model="form.name"
      class="mb-2 mr-sm-2 mb-sm-0"
      placeholder="Name"
    ></b-form-input>

    <label class="sr-only" for="inline-form-input-name">Amount</label>
    <b-form-input
      id="input-amount"
      v-model="form.amount"
      class="mb-2 mr-sm-2 mb-sm-0"
      placeholder="Amount"

    ></b-form-input>
    <label class="sr-only" for="inline-form-input-name">Unit</label>
    <b-form-input
      id="input-unit"
      v-model="form.unit"
      class="mb-2 mr-sm-2 mb-sm-0"
      placeholder="Unit"

    ></b-form-input>

      <b-button
        type="addIngredient"
        variant="primary"
        >Add</b-button
      >
  </b-form>
</div>
</template>

<script>
export default {
  name: "AddIngredients",
   props: {
   ingridents: {
      type: Array,
      required: true,
  },
 
 data() {
      return {
        form: {
         name: "",
        amount: null,
        unit: "",
        ingridents: [],
        mounted: false
        },
      }
    },
    mounted() {
  this.mounted = true;
},
    methods: {
      onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.form))
        this.ingridents.push(9);
        this.ingridents.push({
          name:this.form.name, amount:this.form.amount, unit:this.form.unit,
        })
        this.$emit(
          this.form.name, this.form.amount, this.form.unit,
        )
               this.form={
        name: "",
        amount: null,
        unit: "",
       }
      },

    }
   }
};
</script>

<style scoped>