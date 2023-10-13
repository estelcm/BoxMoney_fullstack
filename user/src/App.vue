<template>
  <h1 class="text-3xl font-bold underline text-blue-500">My money movements</h1>
  <div>
    <!-- Form post -->
    <form class="flex flex-col">
      <label for="name">name</label>
      <input type="text" v-model="name" />

      <label for="description">description</label>
      <input type="text" v-model="description" />

      <label for="amount">amount</label>
      <input type="text" v-model="amount" />
      <!-- type of movement -->
      <label for="type">type : </label>
      <!-- <input type="text" v-model="type" /> -->
      <select v-model="type" id="type">
        <option value="Salary">Salary</option>
        <option value="Unexpected">Unexpected</option>
        <option value="Fixed">Fixed</option>
        <option value="Daily">Daily</option>
        <option value="Ant">Ant</option>
        <option value="Whim">Whim</option>
        <option value="Material Need">Material Need</option>
        <option value="Medical">Medical</option>
        <option value="Savings">Savings</option>
      </select>
      <button @click.prevent="postMovement">Send</button>
      <!-- <button @click.prevent="saveMov">Send</button> -->
    </form>

    <!-- View movements -->
    <div class="flex">
      <button @click.prevent="getMovements">get movements</button>
      <ul>
        <li
          v-for="mov in movements"
          :key="mov.id"
          @click.prevent="getMovement(mov.id)"
        >
          Name: {{ mov.name }} Amount: {{ mov.amount }} Type:
          {{ mov.type }} Date:
          {{ mov.date }}
        </li>
      </ul>

      <h3>Selected movement:{{ movement.name }}</h3>
      <button @click.prevent="deleteMovement(movement.id)">
        delete movement
      </button>
    </div>
  </div>
</template>

<script>
//vamo a ahcer un fetch de la informacion de back
export default {
  name: "App",
  data() {
    return {
      movements: "",
      movement: "",
      name: "",
      description: "",
      amount: "",
      type: "",

      newMov: "", //I think it is not being used
    };
  },

  methods: {
    async getMovements() {
      const response = await fetch(`http://localhost:2347/api/mov`);
      const data = await response.json();
      console.log(data.data);
      return (this.movements = data.data);
    },
    //la url de la que tenemos que hacer fetch la que tenemos de back en postman

    async getMovement(id) {
      const response = await fetch(`http://localhost:2347/api/mov/${id}`);
      const data = await response.json();

      return (this.movement = data.data[0]);
    },

    async postMovement() {
      const newMovement = {
        name: this.name,
        description: this.description,
        amount: this.amount,
        type: this.type,
      };

      try {
        const response = await fetch(`http://localhost:2347/api/mov`, {
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify(newMovement),
        });
        const data = await response.json();
        //return (this.newMov = data.data);
        console.log(data);
        return this.movements.push(data.data);
      } catch (err) {
        console.log(err, "error");
      }
    },

    // async saveMov() {
    //   const newMov = {
    //     name: this.name,
    //     description: this.description,
    //     amount: this.amount,
    //     type: this.type,
    //   };
    //   const response = await fetch("http://localhost:2347/api/mov", {
    //     method: "POST",
    //     headers: { "Content-type": "application/json" },
    //     body: JSON.stringify(newMov),
    //   });
    //   const data = await response.json();
    //   // console.log(data.data)
    //   return this.movements.push(data.data);
    // },

    async deleteMovement(id) {
      try {
        const response = await fetch(`http://localhost:2347/api/mov/${id}`, {
          method: "DELETE",
          headers: { "Content-type": "application/json" },
        });
        if (response.status === 204) {
          // The resource was successfully deleted (status code 204: No Content)
          console.log("Resource deleted successfully");
        } else {
          // Handle other response statuses if needed
          console.log("Failed to delete resource");
        }
      } catch (err) {
        console.log(err, "error");
      }
    },
  },
};
</script>

<style></style>
