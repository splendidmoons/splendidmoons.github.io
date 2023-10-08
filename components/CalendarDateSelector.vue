<template>
  <div class="calendar-date-selector">
    <button :class="[is_dark ? 'is-dark' : '', 'button']" >
      <label class="checkbox">
        <input type="checkbox">
        Compact
      </label>
    </button>

    <button
      :class="[is_dark ? 'is-dark' : '', 'button']"
      @click="selectPrevious"
    >
      <span class="icon">
        <font-awesome-icon icon="fa-solid fa-chevron-left" />
      </span>
    </button>

    <button
      :class="[is_dark ? 'is-dark' : '', 'button']"
      @click="selectCurrent"
    >
      <span>Today</span>
    </button>

    <button
      :class="[is_dark ? 'is-dark' : '', 'button']"
      @click="selectNext"
    >
      <span class="icon">
        <font-awesome-icon icon="fa-solid fa-chevron-right" />
      </span>
    </button>
  </div>
</template>

<script>
 import dayjs from "dayjs";
 import { mapWritableState } from 'pinia';
 import { main_store } from '~/store/main';

 export default {
   name: "CalendarModeSelector",

   props: {
     currentDate: {
       type: String,
       required: true
     },

     selectedDate: {
       type: Object,
       required: true
     }
   },

   computed: {
     ...mapWritableState(main_store, ['is_dark']),
   },

   methods: {
     selectPrevious() {
       let newSelectedDate = dayjs(this.selectedDate).subtract(1, "month");
       this.$emit("dateSelected", newSelectedDate);
     },

     selectCurrent() {
       let newSelectedDate = dayjs(this.currentDate);
       this.$emit("dateSelected", newSelectedDate);
     },

     selectNext() {
       let newSelectedDate = dayjs(this.selectedDate).add(1, "month");
       this.$emit("dateSelected", newSelectedDate);
     }
   }
 };
</script>

<style scoped lang="sass">
 .calendar-date-selector
   display: flex
   justify-content: space-between
   color: var(--grey-800)

 .calendar-date-selector > *
   cursor: pointer
   user-select: none
</style>
