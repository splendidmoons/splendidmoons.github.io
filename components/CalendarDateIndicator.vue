<template>
  <div class="calendar-date-indicator">
    <button
      :class="[is_dark ? 'is-dark' : '', 'button']"
      @click="selectPreviousYear"
    >
      <span class="icon">
        <font-awesome-icon icon="fa-solid fa-chevron-left" />
      </span>
    </button>

    <div class="date-label">{{ selectedYear }}</div>

    <button
      :class="[is_dark ? 'is-dark' : '', 'button']"
      @click="selectNextYear"
    >
      <span class="icon">
        <font-awesome-icon icon="fa-solid fa-chevron-right" />
      </span>
    </button>

    <div v-show="calendarPeriod == 'month'" class="button-spacer"></div>

    <button
      v-show="calendarPeriod == 'month'"
      :class="[is_dark ? 'is-dark' : '', 'button']"
      @click="selectPreviousMonth"
    >
      <span class="icon">
        <font-awesome-icon icon="fa-solid fa-chevron-left" />
      </span>
    </button>

    <div v-show="calendarPeriod == 'month'" class="date-label" style="width: 140px;">{{ selectedMonth }}</div>

    <button
      v-show="calendarPeriod == 'month'"
      :class="[is_dark ? 'is-dark' : '', 'button']"
      @click="selectNextMonth"
    >
      <span class="icon">
        <font-awesome-icon icon="fa-solid fa-chevron-right" />
      </span>
    </button>

    <div class="button-spacer"></div>

    <button
      :class="[is_dark ? 'is-dark' : '', 'button']"
      @click="selectCurrent"
    >
      <span>Today</span>
    </button>

    <div class="button-spacer"></div>

    <button :class="[is_dark ? 'is-dark' : '', 'button']" style="background-color: rgba(0, 43, 54, 0.7);">
      <span>{{ selectedYearType }}</span>
    </button>
  </div>
</template>

<script>
 import dayjs from "dayjs";
 import { mapWritableState } from 'pinia';
 import { main_store } from '~/store/main';

 export default {
   props: {
     selectedDate: {
       type: Object,
       required: true
     },

     currentDate: {
       type: String,
       required: true
     },

     calendarPeriod: {
       type: String,
       required: true,
     },
   },

   computed: {
     ...mapWritableState(main_store, ['is_dark', 'year_types']),

     selectedYearType() {
       return this.year_types[this.selectedDate.year()] + " Year";
     },

     selectedYear() {
       const be_year = this.selectedDate.year() + 543;
       return this.selectedDate.format("YYYY") + " / " + be_year;
     },

     selectedMonth() {
       return this.selectedDate.format("MMMM");
     }
   },

   methods: {
     selectPreviousYear() {
       let newSelectedDate = dayjs(this.selectedDate).subtract(1, "year");
       this.$emit("dateSelected", newSelectedDate);
     },

     selectNextYear() {
       let newSelectedDate = dayjs(this.selectedDate).add(1, "year");
       this.$emit("dateSelected", newSelectedDate);
     },

     selectPreviousMonth() {
       let newSelectedDate = dayjs(this.selectedDate).subtract(1, "month");
       this.$emit("dateSelected", newSelectedDate);
     },

     selectNextMonth() {
       let newSelectedDate = dayjs(this.selectedDate).add(1, "month");
       this.$emit("dateSelected", newSelectedDate);
     },

     selectCurrent() {
       let newSelectedDate = dayjs(this.currentDate);
       this.$emit("dateSelected", newSelectedDate);
     },
   }
 };
</script>

<style scoped lang="sass">
 .calendar-date-indicator
   display: flex
   justify-content: space-between

   .date-label
     font-size: 24px
     font-weight: 600
     text-align: center

 .calendar-date-indicator > button
   cursor: pointer
   user-select: none

 .button-spacer
   display: inline-block
   padding-left: 20px
</style>
