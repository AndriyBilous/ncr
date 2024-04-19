<template>
  <div class="header__container">header</div>
  <div class="main__container">
    <div class="image__container">
      <div class="image__sss">
        <img src="./assets/arena.jpg" alt="arena_img" />
        <div
          v-for="(p, index) of timersData"
          :class="
            activeTimers === p.id
              ? 'points__container' + ' selected'
              : 'points__container'
          "
          :key="index"
          :style="{ top: p.coordinates[0], left: p.coordinates[1] }"
          :data-id="p.id"
          @click="handleScrollOnClick"
        ></div>
      </div>
    </div>
    <div class="side_panel__container">
      <div class="side_panel">
        <LocationsInfo
          v-bind:locationsData="timersData"
          v-bind:activeTimers="activeTimers"
          v-bind:handleScrollOnClick="handleChangeActiveOnClick"
        />
      </div>
    </div>
  </div>
  <div class="footer__container">footer</div>
</template>

<script>
import LocationsInfo from "./components/LocationsInfo.vue";
import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBWYhW1v5ihah_48rKZvQoXLTumzCxvhq8",
  authDomain: "pyarena-91d35.firebaseapp.com",
  databaseURL:
    "https://pyarena-91d35-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "pyarena-91d35",
  storageBucket: "pyarena-91d35.appspot.com",
  messagingSenderId: "827209140628",
  appId: "1:827209140628:web:4db30ac6d56775b8832781",
};

firebase.initializeApp(firebaseConfig);
const firebaseRef = firebase.database().ref("/");

export default {
  name: "App",
  components: {
    LocationsInfo,
  },

  data() {
    return {
      timersData: [
        {
          name: "Rally Point of Belligerence",
          type: "Spider",
          lastDropTime: "hh:mm:cc",
          coordinates: ["58.3%", "73.6%"],
          id: "rallypb",
          selected: false,
        },
        {
          name: "Training Ground of Belligerence",
          type: "Spider",
          lastDropTime: "hh:mm:cc",
          coordinates: ["75.44%", "61.08%"],
          id: "traininggb",
          selected: false,
        },
        {
          name: "Conquest of Belligerence",
          type: "Spider",
          lastDropTime: "hh:mm:cc",
          coordinates: ["36.7%", "76.6%"],
          id: "conquestb",
          selected: false,
        },
        {
          name: "Rocky Mountain Cliff",
          type: "Inferno",
          lastDropTime: "hh:mm:cc",
          coordinates: ["49.5%", "72.5%"],
          id: "rockymc",
          selected: false,
        },
        {
          name: "Marching Point of Belligerence",
          type: "Horse-Grish",
          lastDropTime: "hh:mm:cc",
          coordinates: ["43%", "64.5%"],
          id: "marchingpb",
          selected: false,
        },
        {
          name: "Assault Point of Belligerence",
          type: "Horse-Grish",
          lastDropTime: "hh:mm:cc",
          coordinates: ["64%", "54.5%"],
          id: "assaultpb",
          selected: false,
        },
        {
          name: "Newbreeze Border",
          type: "Inferno",
          lastDropTime: "hh:mm:cc",
          coordinates: ["59.5%", "60%"],
          id: "newbreezeb",
          selected: false,
        },
        {
          name: "Confrontation Point of Belligerence",
          type: "Horse-Grish",
          lastDropTime: "hh:mm:cc",
          coordinates: ["55.7%", "51%"],
          id: "confrontationpb",
          selected: false,
        },
        {
          name: "Conflict Point of Belligerence",
          type: "Horse-Grish",
          lastDropTime: "hh:mm:cc",
          coordinates: ["46%", "57.5%"],
          id: "conflictpb",
          selected: false,
        },
        {
          name: "Rally Point of Victory",
          type: "Spider",
          lastDropTime: "hh:mm:cc",
          coordinates: ["16.8%", "54%"],
          id: "rallypv",
          selected: false,
        },
        {
          name: "Training Grounds of Victory",
          type: "Spider",
          lastDropTime: "hh:mm:cc",
          coordinates: ["22.4%", "68.6%"],
          id: "traininggv",
          selected: false,
        },
        {
          name: "Conquest of Victory",
          type: "Spider",
          lastDropTime: "hh:mm:cc",
          coordinates: ["23.2%", "23%"],
          id: "conquestv",
          selected: false,
        },
        {
          name: "Cloud Path Watchtower",
          type: "Inferno",
          lastDropTime: "hh:mm:cc",
          coordinates: ["21.2%", "36%"],
          id: "cloudpw",
          selected: false,
        },
        {
          name: "Marching Point of Victory",
          type: "Horse-Grish",
          lastDropTime: "hh:mm:cc",
          coordinates: ["31.5%", "35%"],
          id: "marchingpv",
          selected: false,
        },
        {
          name: "Assault Point of Victory",
          type: "Horse-Grish",
          lastDropTime: "hh:mm:cc",
          coordinates: ["29.5%", "60%"],
          id: "assaultpv",
          selected: false,
        },
        {
          name: "Confrontation Point of Victory",
          type: "Horse-Grish",
          lastDropTime: "hh:mm:cc",
          coordinates: ["38%", "54.5%"],
          id: "confrontationpv",
          selected: false,
        },
        {
          name: "Conflict Point of Victory",
          type: "Horse-Grish",
          lastDropTime: "hh:mm:cc",
          coordinates: ["38%", "39.5%"],
          id: "conflictpv",
          selected: false,
        },
        {
          name: "Conflict Point of Unity",
          type: "Horse-Grish",
          lastDropTime: "hh:mm:cc",
          coordinates: ["58.5%", "41%"],
          id: "conflictpu",
          selected: false,
        },
        {
          name: "High Grounds Summit",
          type: "Inferno",
          lastDropTime: "hh:mm:cc",
          coordinates: ["26.5%", "53%"],
          id: "highgs",
          selected: false,
        },
        {
          name: "Rally Point of Unity",
          type: "Spider",
          lastDropTime: "hh:mm:cc",
          coordinates: ["58%", "20.5%"],
          id: "rallypu",
          selected: false,
        },
        {
          name: "Training Grounds of Unity",
          type: "Spider",
          lastDropTime: "hh:mm:cc",
          coordinates: ["38%", "14.5%"],
          id: "traininggu",
          selected: false,
        },
        {
          name: "Conquest of Unity",
          type: "Spider",
          lastDropTime: "hh:mm:cc",
          coordinates: ["76.5%", "37%"],
          id: "conquestu",
          selected: false,
        },
        {
          name: "Stonegrave Summit",
          type: "Inferno",
          lastDropTime: "hh:mm:cc",
          coordinates: ["67.5%", "30%"],
          id: "stonegraves",
          selected: false,
        },
        {
          name: "Marching Point of Unity",
          type: "Horse-Grish",
          lastDropTime: "hh:mm:cc",
          coordinates: ["64.8%", "39%"],
          id: "marchingpu",
          selected: false,
        },
        {
          name: "Assault Point of Unity",
          type: "Horse-Grish",
          lastDropTime: "hh:mm:cc",
          coordinates: ["42%", "23.5%"],
          id: "assaultpu",
          selected: false,
        },
        {
          name: "Confrontation Point of Unity",
          type: "Horse-Grish",
          lastDropTime: "hh:mm:cc",
          coordinates: ["45%", "35.5%"],
          id: "confrontationpu",
          selected: false,
        },
        {
          name: "Horizon Peaks",
          type: "Inferno",
          lastDropTime: "hh:mm:cc",
          coordinates: ["51%", "24.5%"],
          id: "horizonp",
          selected: false,
        },
        {
          name: "Source of Heavy Combat",
          type: "Horse-Grish",
          lastDropTime: "hh:mm:cc",
          coordinates: ["50.5%", "46%"],
          id: "sourcehc",
          selected: false,
        },
      ],
      activeTimers: "",
      pointsData: [],
    };
  },
  async created() {
    await firebaseRef.on("value", (snapshot) => {
      let data = snapshot.val();
      this.pointsData = [...Object.values(data.points)];
    });
  },

  methods: {
    handleScrollOnClick(e) {
      const id = e.target.attributes[1].value;
      const lookingDOMElement = document.getElementById(id);

      lookingDOMElement.classList.add("selected");

      lookingDOMElement.scrollIntoView({
        block: "nearest",
        behavior: "smooth",
      });

      this.activeTimers = id;
    },

    handleChangeActiveOnClick(id) {
      this.activeTimers = id;
    },
  },

  watch: {
    pointsData() {
      this.pointsData.map((el) => {
        for (let i = 0; i < this.pointsData.length; i++) {
          if (
            Object.values(el)[1].replaceAll('"', "") === this.timersData[i].name
          ) {
            this.timersData[i].lastDropTime = Object.values(el)[2];
          }
        }
      });
    },
  },

  firebase: {
    pointsData: firebaseRef,
  },
};
</script>

<style></style>
