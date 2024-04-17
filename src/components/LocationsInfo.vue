<template>
  <ul class="side_panel-items__container">
    <li
      v-for="l of locationsData"
      :key="l.id"
      :class="
        activeTimers === l.id
          ? 'side_panel-item__container' + ' selected'
          : 'side_panel-item__container'
      "
      :id="l.id"
      @click="handleScrollOnClick(l.id)"
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
    activeTimers: String,
    handleScrollOnClick: Function,
  },
  created() {
    // console.log(this.locationsData);
    // this.locationsData.map((el) => console.log(el.name));
  },

  methods: {},
};
</script>
