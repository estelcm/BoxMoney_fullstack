<template>
  <!-- <div class="relative text-center mb-2">
    <div
      class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5"
    >
      <span class="text-white text-lg font-bold"
        >{{ movements[movements.length - 1]?.total }}€</span
      >
    </div>
    <div
      class="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700"
    ></div>
  </div> -->
  <!-- list of all movements-->
  <div id="app" class="p-4">
    <table class="min-w-min divide-y divide-gray-200">
      <thead>
        <tr>
          <th
            class="px-1 py-2 text-xs font-medium text-gray-500 uppercase tracking-wider font-thin"
          >
            Name
          </th>
          <th
            class="px-1 py-2 text-xs font-medium text-gray-500 uppercase tracking-wider font-thin"
          >
            Type
          </th>
          <th
            class="px-1 py-2 text-xs font-medium text-gray-500 uppercase tracking-wider font-thin"
          >
            Amount
          </th>
          <th
            class="px-1 py-2 text-xs font-medium text-gray-500 uppercase tracking-wider font-thin"
          >
            Date
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="movement in movements" :key="movement.id">
          <td
            class="px-1 py-1 text-xs md:text-sm lg:text-sm font-thin whitespace-nowrap"
          >
            {{ movement.name }}
          </td>
          <td
            class="px-1 py-1 text-xs md:text-sm lg:text-sm font-thin whitespace-nowrap"
          >
            {{ movement.type }}
          </td>
          <td
            class="px-1 py-1 text-xs md:text-sm lg:text-sm font-thin whitespace-nowrap"
          >
            {{ movement.amount }}
          </td>
          <td
            class="px-1 py-1 text-xs md:text-sm lg:text-sm font-thin whitespace-nowrap"
          >
            {{ formatDate(movement.date) }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "listOfMovements",
  data() {
    return {
      movements: "",
      movement: "",
      name: "",
      description: "",
      amount: "",
      type: "",
      listOfLastFour: "",
    };
  },
  mounted() {
    // this.getMovements();
    this.getMovements()
      .then((data) => {
        this.movements = data; // Actualiza los datos cuando estén disponibles
      })
      .catch((error) => {
        console.error("Error al cargar los datos:", error);
      });

    // this.getLastFour();
  },
  // computed: {
  //   savedLastTotal: function () {
  //     const remainTotal = this.movements[this.movements.length - 1].total;
  //     return (this.showTotal = remainTotal);
  //   },
  // },
  methods: {
    async getMovements() {
      const response = await fetch(`http://localhost:2347/api/mov`);
      const data = await response.json();
      console.log(data.data);
      return (this.movements = data.data);
    },

    formatDate(dateStr) {
      const dateObj = new Date(dateStr);
      const options = { year: "numeric", month: "2-digit", day: "2-digit" };
      return dateObj.toLocaleDateString("en-US", options);
    },

    async getMovement(id) {
      const response = await fetch(`http://localhost:2347/api/mov/${id}`);
      const data = await response.json();

      return (this.movement = data.data[0]);
    },
    /****** create ******/
    async postMovement() {
      const lastTotal = this.movements[this.movements.length - 1].total;
      this.showTotal = lastTotal + this.amount;
      console.log("amount", lastTotal + this.amount);
      console.log("aquestes el lastotal:", lastTotal);
      console.log("aquest es el show total", this.showTotal);
      const newMovement = {
        name: this.name,
        description: this.description,
        amount: this.amount,
        type: this.type,
        total: this.showTotal,
      };
      (this.name = ""), (this.description = ""), (this.amount = "");

      try {
        const response = await fetch(`http://localhost:2347/api/mov`, {
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify(newMovement),
        });
        const data = await response.json();
        //return (this.newMov = data.data);
        console.log(data);
        // No es necesario el push porque el array se actualiza cuando obtienes los movimientos nuevamente
        //this.movements.push(data.data);
        //this.savedAmount = parseFloat(newMovement.amount);
        //this returns invoques and update de list of movements

        return this.getMovements();
      } catch (err) {
        console.log(err, "error");
      }
    },
    /* ***** delete ***** */

    async deleteMovement(id) {
      try {
        const response = await fetch(`http://localhost:2347/api/mov/${id}`, {
          method: "DELETE",
          headers: { "Content-type": "application/json" },
        });
        // sense aixo a mi em funciona const data =await response.json();
        if (response.status === 204) {
          //  (status code 204: No Content)
          console.log("Resource deleted successfully");
        } else {
          // Handle other response statuses if needed
          console.log("Failed to delete resource");
        }
        return this.getMovements();
      } catch (err) {
        console.log(err, "error");
      }
    },
  },
};
</script>

<style></style>
