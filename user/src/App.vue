<template>
  <h1 class="text-3xl font-bold underline text-blue-500">Conscious Get By</h1>
  <!-- poner aqui un link logo daily flux y otro Savings -->

  <!-- <div
    class="flex justify-center items-center w-16 h-16 rounded-full overflow-hidden bg-gradient-to-br from-purple-300 to-purple-600 text-white text-lg"
  >
    <span class="text-white text-lg font-bold">{{ showTotal }}€</span>
  </div> -->
  <!-- ** total ** -->
  <div class="relative text-center mb-2">
    <div
      class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5"
    >
      <span class="text-white text-lg font-bold">{{ showTotal }}€</span>
    </div>
    <div
      class="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700"
    ></div>
  </div>
  <!-- ** minilist of movements** -->
  <div>
    <ul class="text-center">
      <li class="text-zinc-700 font-thin">
        {{ movements[movements.length - 1]?.amount }}
      </li>
      <li class="text-zinc-500 font-thin">
        {{ movements[movements.length - 2]?.amount }}
      </li>
      <li class="text-zinc-400 font-thin">
        {{ movements[movements.length - 3]?.amount }}
      </li>
      <li class="text-zinc-300 font-thin">
        {{ movements[movements.length - 4]?.amount }}
      </li>
    </ul>
  </div>
  <!--  ** Form **  -->
  <div>
    <div id="fillForm" class="flex flex-col gap-6">
      <form class="flex flex-col">
        <div class="my-4 relative">
          <input
            type="number"
            v-model="amount"
            class="peer w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-thin text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-red-200 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
            placeholder=""
          />
          <label
            for="amount"
            class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex w-full select-none text-[11px] font-thin leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-indigo-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-indigo-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-indigo-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
          >
            Amount €
          </label>
        </div>
        <div class="my-4 relative">
          <input
            type="text"
            v-model="name"
            class="peer w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-thin text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-cyan-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
            placeholder=""
          />
          <label
            for="name"
            class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex w-full select-none text-[11px] font-thin leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-indigo-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-indigo-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-indigo-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
          >
            Transaction Name
          </label>
        </div>
        <div class="my-4 relative">
          <input
            type="text"
            v-model="description"
            class="peer w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-thin text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-cyan-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
            placeholder=""
          />
          <label
            for="description"
            class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex w-full select-none text-[11px] font-thin leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-indigo-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-indigo-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-indigo-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
          >
            Any reason?
          </label>
        </div>
        <div class="relative">
          <select
            v-model="type"
            id="type"
            class="mb-6 pr-4 bg-transparent border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-400 focus:border-cyan-400 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-cyan-400 dark:focus:border-cyan-400"
          >
            <option value="" disabled selected>Type of transaction</option>
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
        </div>
        <button
          @click.prevent="postMovement"
          class="my-2 relative h-10 w-full min-w-[200px] text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2"
        >
          OK
        </button>
      </form>
    </div>
  </div>

  <!-- View movements -->
  <!-- <div>
    <button @click.prevent="getMovements">get movements</button> 
    <ul>
      <li
        v-for="mov in movements"
        :key="mov.id"
        @click.prevent="getMovement(mov.id)"
      >
        Name: {{ mov.name }} Amount: {{ mov.amount }} Type: {{ mov.type }} Date:
        {{ mov.date }} Current : {{ mov.total }}
      </li>
    </ul>

    <h3>Selected movement:{{ movement.name }}</h3>
    <button @click.prevent="deleteMovement(movement.id)">
      delete movement
    </button>
  </div> -->
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
      showTotal: 0,
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
  computed: {
    savedLastTotal: function () {
      const remainTotal = this.movements[this.movements.length - 1].total;
      return (this.showTotal = remainTotal);
    },
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

    /****** update ******/
    /* async updateMovement(id){
      const newMovement = {
        name: this.name,
        description: this.description,
        amount: this.amount,
        type: this.type,
      };
      (this.name = ""), (this.description = ""), (this.amount = "");
      try{  const response = await fetch(`http://localhost:2347/api/mov/${id}`, {
        method: "PUT",
        headers: {"Content-type": "application/json"},
         body: JSON.stringify(newMovement),
      });
      this.movements.push(data.data);
        //this returns invoques and update de list of movements
        return this.getMovements();
    } catch(err){
      console.log(err, "error");
    }
    }*/
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

<style>
.font-thin {
  font-family: "Avenir", sans-serif;
  font-weight: 100; /* Delgado (font thin) */
  /* text-transform: uppercase; */
}

.darkGrayText {
  color: #333; /* Color de texto oscuro */
}

.mediumGrayText {
  color: #666; /* Color de texto de nivel medio */
}

.lightGrayText {
  color: #999; /* Color de texto claro */
}
</style>
