<template>
  <div class="header__container">header</div>
  <div class="main__container">
    <div class="image__container">
      <div class="image__sss">
        <img src="./assets/arena.jpg" alt="arena_img" />
        <div
          class="points__container"
          v-for="(p, index) of timersData"
          :key="index"
          :style="{ top: p.coordinates[0], left: p.coordinates[1] }"
        ></div>
      </div>
    </div>
    <div class="side_panel__container">
      <div class="side_panel">
        <HelloWorld v-bind:locationsData="timersData" />
      </div>
    </div>
  </div>
  <div class="footer__container">footer</div>
</template>

<script>
import HelloWorld from "./components/LocationsInfo.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },

  data() {
    return {
      timersData: [
        {
          name: "Rally Point of Belligerence",
          type: "Spider",
          lastDropTime: "hh:mm:cc",
          coordinates: ["59.3%", "74.6%"],
        },
        {
          name: "Training Ground of Belligerence",
          type: "Spider",
          lastDropTime: "hh:mm:cc",
          coordinates: ["76.44%", "62.08%"],
        },
        {
          name: "Conquest of Belligerence",
          type: "Spider",
          lastDropTime: "hh:mm:cc",
          coordinates: ["37.7%", "77.6%"],
        },
        {
          name: "Rocky Mountain Cliff",
          type: "Inferno",
          lastDropTime: "hh:mm:cc",
          coordinates: ["40%", "10%"],
        },
        {
          name: "Marching Point of Belligerence",
          type: "Horse-Grish",
          lastDropTime: "hh:mm:cc",
          coordinates: ["50%", "10%"],
        },
        {
          name: "Assault Point of Belligerence",
          type: "Horse-Grish",
          lastDropTime: "hh:mm:cc",
          coordinates: ["76.44%", "62.08%"],
        },
        {
          name: "Newbreeze Border",
          type: "Inferno",
          lastDropTime: "hh:mm:cc",
          coordinates: ["70%", "10%"],
        },
        {
          name: "Confrontation Point of Belligerence",
          type: "Horse-Grish",
          lastDropTime: "hh:mm:cc",
          coordinates: ["80%", "10%"],
        },
        {
          name: "Conflict Point of Belligerence",
          type: "Horse-Grish",
          lastDropTime: "hh:mm:cc",
          coordinates: ["90%", "10%"],
        },
        {
          name: "Rally Point of Victory",
          type: "Spider",
          lastDropTime: "hh:mm:cc",
          coordinates: ["10%", "20%"],
        },
        {
          name: "Training Grounds of Victory",
          type: "Spider",
          lastDropTime: "hh:mm:cc",
          coordinates: ["20%", "20%"],
        },
        {
          name: "Conquest of Victory",
          type: "Spider",
          lastDropTime: "hh:mm:cc",
          coordinates: ["30%", "20%"],
        },
        {
          name: "Cloud Path Watchtower",
          type: "Inferno",
          lastDropTime: "hh:mm:cc",
          coordinates: ["40%", "20%"],
        },
        {
          name: "Marching Point of Victory",
          type: "Horse-Grish",
          lastDropTime: "hh:mm:cc",
          coordinates: ["50%", "20%"],
        },
        {
          name: "Assault Point of Victory",
          type: "Horse-Grish",
          lastDropTime: "hh:mm:cc",
          coordinates: ["60%", "20%"],
        },
        {
          name: "Confrontation Point of Victory",
          type: "Horse-Grish",
          lastDropTime: "hh:mm:cc",
          coordinates: ["70%", "20%"],
        },
        {
          name: "Conflict Point of Victory",
          type: "Horse-Grish",
          lastDropTime: "hh:mm:cc",
          coordinates: ["80%", "20%"],
        },
        {
          name: "Conflict Point of Unity",
          type: "Horse-Grish",
          lastDropTime: "hh:mm:cc",
          coordinates: ["90%", "20%"],
        },
        {
          name: "High Grounds Summit",
          type: "Inferno",
          lastDropTime: "hh:mm:cc",
          coordinates: ["10%", "30%"],
        },
        {
          name: "Rally Point of Unity",
          type: "Spider",
          lastDropTime: "hh:mm:cc",
          coordinates: ["20%", "30%"],
        },
        {
          name: "Training Grounds of Unity",
          type: "Spider",
          lastDropTime: "hh:mm:cc",
          coordinates: ["30%", "30%"],
        },
        {
          name: "Conquest of Unity",
          type: "Spider",
          lastDropTime: "hh:mm:cc",
          coordinates: ["40%", "30%"],
        },
        {
          name: "Stonegrave Summit",
          type: "Inferno",
          lastDropTime: "hh:mm:cc",
          coordinates: ["50%", "30%"],
        },
        {
          name: "Marching Point of Unity",
          type: "Horse-Grish",
          lastDropTime: "hh:mm:cc",
          coordinates: ["60%", "30%"],
        },
        {
          name: "Assault Point of Unity",
          type: "Horse-Grish",
          lastDropTime: "hh:mm:cc",
          coordinates: ["70%", "30%"],
        },
        {
          name: "Confrontation Point of Unity",
          type: "Horse-Grish",
          lastDropTime: "hh:mm:cc",
          coordinates: ["80%", "30%"],
        },
        {
          name: "Horizon Peaks",
          type: "Inferno",
          lastDropTime: "hh:mm:cc",
          coordinates: ["90%", "30%"],
        },
        {
          name: "Source of Heavy Combat",
          type: "Horse-Grish",
          lastDropTime: "hh:mm:cc",
          coordinates: ["10%", "40%"],
        },
      ],
    };
  },
};
</script>

<style></style>
