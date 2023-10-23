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

  <!-- button to filter by type -->
  <div>
    <select v-model="selectedType" @change="fetchMovementsByType">
      <option value="">All movements</option>
      <option v-for="(value, key) in typeOptions" :value="key" :key="key">
        {{ value }}
      </option>
    </select>
  </div>
  <!-- list of all movements-->
  <!-- <div v-if="!showMovementsByType"> -->
  <div v-if="!showMovementsByType">
    <div id="tableAll" class="p-4 flex justify-center">
      <table class="min-w-min divide-y divide-gray-400 table-auto text-left">
        <thead>
          <tr>
            <th
              class="px-2 py-2 text-xs text-gray-500 uppercase tracking-wider font-thin"
            >
              Name
            </th>
            <th
              class="px-2 py-2 text-xs text-gray-500 uppercase tracking-wider font-thin"
            >
              Type
            </th>
            <th
              class="px-2 py-2 text-xs text-gray-500 uppercase tracking-wider font-thin"
            >
              amount
            </th>
            <th
              class="px-2 py-2 text-xs text-gray-500 uppercase tracking-wider font-thin"
            >
              Date
            </th>
          </tr>
        </thead>
        <tbody>
          <template
            v-for="index in Object.keys(movements).reverse()"
            :key="movements[index].id"
          >
            <tr
              class="border border-r-white border-l-white border-b-orange-200"
            >
              <td
                class="px-2 py-2 text-xs md:text-sm lg:text-sm font-thin whitespace-nowrap"
              >
                {{ movements[index].name }}
              </td>
              <td
                class="px-2 py-2 text-xs md:text-sm lg:text-sm font-thin whitespace-nowrap"
              >
                {{ movements[index].type }}
              </td>
              <td
                class="px-2 py-2 text-xs md:text-sm lg:text-sm font-thin whitespace-nowrap text-center"
              >
                {{ movements[index].amount }}
              </td>
              <td
                class="px-1 py-1 text-xs md:text-sm lg:text-sm font-thin whitespace-nowrap"
              >
                {{ formatDate(movements[index].date) }}
              </td>
              <td
                class="px-2 py-2 text-xs md:text-sm lg:text-sm font-thin whitespace-nowrap"
              >
                <!-- Contenido del botón de eliminación -->
                <button
                  @click="deleteMovement(movements[index].id)"
                  class="hover:rounder-md hover:text-orange-400"
                >
                  X
                </button>
              </td>
            </tr>
          </template>
        </tbody>
      </table>
    </div>
  </div>
  <!-- table for selected types movements -->
  <!-- <div v-else> -->
  <div v-else>
    <div id="tableType" class="p-4 flex justify-center"></div>
    <table class="min-w-min divide-y divide-gray-400 table-auto text-left">
      <thead>
        <tr>
          <th
            class="px-2 py-2 text-xs text-gray-500 uppercase tracking-wider font-thin"
          >
            Name
          </th>
          <th
            class="px-2 py-2 text-xs text-gray-500 uppercase tracking-wider font-thin"
          >
            Type
          </th>
          <th
            class="px-2 py-2 text-xs text-gray-500 uppercase tracking-wider font-thin"
          >
            Amount
          </th>
          <th
            class="px-2 py-2 text-xs text-gray-500 uppercase tracking-wider font-thin"
          >
            Date
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="index in Object.keys(movementsTyped).reverse()"
          :key="movementsTyped[index].id"
          class="border border-r-white border-l-white border-b-orange-200"
        >
          <td
            class="px-2 py-2 text-xs md:text-sm lg:text-sm font-thin whitespace-nowrap"
          >
            {{ movementsTyped[index].name }}
          </td>
          <td
            class="px-2 py-2 text-xs md:text-sm lg:text-sm font-thin whitespace-nowrap"
          >
            {{ movementsTyped[index].type }}
          </td>
          <td
            class="px-2 py-2 text-xs md:text-sm lg:text-sm font-thin whitespace-nowrap text-center"
          >
            {{ movementsTyped[index].amount }}
          </td>
          <td
            class="px-1 py-1 text-xs md:text-sm lg:text-sm font-thin whitespace-nowrap"
          >
            {{ formatDate(movementsTyped[index].date) }}
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
      selectedType: "",
      showMovementsByType: "", //bolean propoerty v-if
      movementsTyped: "",
      typeOptions: {
        salary: "Salary",
        unexpected: "Unexpected",
        fixed: "Fixed",
        daily: "Daily",
        ant: "Ant",
        whim: "Whim",
        mat_need: "Material need",
        medical: "Medical",
        savings: "Savings",
      }, //property to keep the type form the fetch
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

    /****** get selected type *********/
    async fetchMovementsByType() {
      if (this.selectedType) {
        try {
          let response;
          if (this.selectedType === "salary") {
            response = await fetch(`http://localhost:2347/api/mov/salary`);
          } else if (this.selectedType === "unexpected") {
            response = await fetch(`http://localhost:2347/api/mov/unexpected`);
          } else if (this.selectedType === "fixed") {
            response = await fetch(`http://localhost:2347/api/mov/fixed`);
          } else if (this.selectedType === "daily") {
            response = await fetch(`http://localhost:2347/api/mov/daily`);
          } else if (this.selectedType === "ant") {
            response = await fetch(`http://localhost:2347/api/mov/ant`);
          } else if (this.selectedType === "whim") {
            response = await fetch(`http://localhost:2347/api/mov/whim`);
          } else if (this.selectedType === "mat_need") {
            response = await fetch(`http://localhost:2347/api/mov/mat_need`);
          } else if (this.selectedType === "medical") {
            response = await fetch(`http://localhost:2347/api/mov/medical`);
          } else if (this.selectedType === "savings") {
            response = await fetch(`http://localhost:2347/api/mov/savings`);
          }

          if (response.ok) {
            const data = await response.json();
            this.showMovementsByType = true;
            this.movementsTyped = data.data;
            console.log("this is de typed movements:" + data.data[0]); // Update list with selected type movements
            return this.movementsTyped;
          } else {
            console.error(
              `Error al obtener los movimientos. Código de estado: ${response.status}`
            );
          }
        } catch (error) {
          console.error("Error al obtener los movimientos:", error);
        }
      } else {
        // If no type is selected, show all movements
        this.showMovementsByType = false;
        this.getMovements();
      }
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
