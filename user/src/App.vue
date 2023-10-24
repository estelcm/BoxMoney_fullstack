<template>
  <Router-Link to="/">
    <div class="flex justify-center">
      <img
        src="./img/Recurso 1.png"
        alt="logo"
        class="w-24 h-24 mt-4 mb-2"
      /></div
  ></Router-Link>

  <!-- poner aqui un link logo daily flux y otro Savings -->

  <!-- <div
    class="flex justify-center items-center w-16 h-16 rounded-full overflow-hidden bg-gradient-to-br from-purple-300 to-purple-600 text-white text-lg"
  >
    <span class="text-white text-lg font-bold">{{ showTotal }}€</span>
  </div> -->
  <!-- ** total ** -->
  <Router-link to="/list">
    <div class="relative text-center mb-2">
      <div
        class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5"
      >
        <span class="text-white text-lg font-bold"
          >{{ movements[movements.length - 1]?.total }}€</span
        >
      </div>
      <div
        class="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600"
      ></div>
    </div>
  </Router-link>
  <Router-link to="/"></Router-link>

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

  <RouterView />
</template>

<script>
//vamo a ahcer un fetch de la informacion de back
export default {
  name: "App",
  data() {
    return {
      movements: [],
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
          //this.showTotal -= deletedMovement.amount;
          //delete not working it shoul be a + or - with the same amount
          //as it is done in banking
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
