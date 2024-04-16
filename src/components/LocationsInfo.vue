<template>
  <ul class="side_panel-items__container">
    <li
      v-for="(l, index) of locationsData"
      :key="index"
      class="side_panel-item__container"
    >
      <h3 class="">{{ l.name }}</h3>
      <span class="hor_line"></span>
      <p>{{ l.lastDropTime }}</p>
    </li>
  </ul>
</template>

<script>
import { ref } from "vue";

export default {
  name: "SidePanel",
  props: {
    locationsData: ref(Array),
  },
  created() {
    // console.log(this.locationsData);
    // this.locationsData.map((el) => console.log(el.name));
  },
};
</script>
