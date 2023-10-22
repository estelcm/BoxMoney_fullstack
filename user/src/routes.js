import addMovement from "./views/addMovement.vue";
import listOfMovements from "./views/listOfMovements.vue";
// import listOfTypesMovements from "./views/listOfTypesMovements.vue";

export const routes = [
  {
    path: "/",
    component: addMovement,
  },
  {
    path: "/list",
    component: listOfMovements,
  },
  //   {
  //     path: "/list/:id",
  //     component: listOfTypesMovements,
  //   },
  //necessito una llista de all
  //una llista per id
];
