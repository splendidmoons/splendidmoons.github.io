<template>
  <div class="calendar-date-indicator">
    <div class="columns is-desktop">

      <div class="column date-controls">
        <div class="field is-grouped">
          <p class="control">
            <button
              :class="[is_dark ? 'is-dark' : '', 'button']"
              @click="selectPreviousYear"
            >
              <span class="icon">
                <font-awesome-icon icon="fa-solid fa-chevron-left" />
              </span>
            </button>
          </p>

          <p class="control">
            <button :class="[is_dark ? 'is-dark' : '', 'button']">
              <span class="date-label">{{ selectedYear }}</span>
            </button>
          </p>

          <p class="control">
            <button
              :class="[is_dark ? 'is-dark' : '', 'button']"
              @click="selectNextYear"
            >
              <span class="icon">
                <font-awesome-icon icon="fa-solid fa-chevron-right" />
              </span>
            </button>
          </p>
        </div>

        <div v-show="calendarPeriod == 'month'" class="button-spacer"></div>
      </div>

      <div class="column date-controls">
        <div class="field is-grouped">
          <p class="control">
            <button
              v-show="calendarPeriod == 'month'"
              :class="[is_dark ? 'is-dark' : '', 'button']"
              @click="selectPreviousMonth"
            >
              <span class="icon">
                <font-awesome-icon icon="fa-solid fa-chevron-left" />
              </span>
            </button>
          </p>

          <p v-show="calendarPeriod == 'month'" class="control">
            <button :class="[is_dark ? 'is-dark' : '', 'button']">
              <span class="date-label month-label">{{ selectedMonth }}</span>
            </button>
          </p>

          <p class="control">
            <button
              v-show="calendarPeriod == 'month'"
              :class="[is_dark ? 'is-dark' : '', 'button']"
              @click="selectNextMonth"
            >
              <span class="icon">
                <font-awesome-icon icon="fa-solid fa-chevron-right" />
              </span>
            </button>
          </p>
        </div>
        <div class="button-spacer"></div>
      </div>

      <div class="column is-narrow">
        <div class="field is-grouped">
          <p class="control">
            <button
              :class="[is_dark ? 'is-dark' : '', 'button']"
              @click="selectCurrent"
            >
              <span>Today</span>
            </button>
            <div class="button-spacer"></div>
          </p>

          <p class="control">
            <button :class="[is_dark ? 'is-dark' : '', 'button']" style="background-color: rgba(0, 43, 54, 0.7);">
              <span>{{ selectedYearType }}</span>
            </button>
          </p>
        </div>
      </div>
    </div>
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

   data() {
     return {
       swipe_pos_x_start: 0,
     }
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

     previous() {
       if (this.calendarPeriod == 'month') {
         this.selectPreviousMonth();
       } else {
         this.selectPreviousYear();
       }
     },

     next() {
       if (this.calendarPeriod == 'month') {
         this.selectNextMonth();
       } else {
         this.selectNextYear();
       }
     },

     keyDown(e) {
       switch (e.keyCode) {
           // left, k
         case 37:
         case 75:
           this.previous();
           break;

           // right, j
         case 39:
         case 74:
           this.next();
           break;

         default:
           //console.log(e.keyCode);
           return;
       }
     },

     touchStart(e) {
       // Only one finger
       if (e.changedTouches.length !== 1) {
         return;
       }
       this.swipe_pos_x_start = e.changedTouches[0].clientX;
     },

     touchEnd(e) {
       // Only one finger
       if (e.changedTouches.length !== 1) {
         return;
       }
       const pos_x_end = e.changedTouches[0].clientX;
       if (this.swipe_pos_x_start < pos_x_end) {
         // swipe right
         this.previous();
       } else {
         // swipe left
         this.next();
       }
     },

   },

   mounted() {
     window.addEventListener('keydown', this.keyDown);
     window.addEventListener('touchstart', this.touchStart);
     window.addEventListener('touchend', this.touchEnd);
   },
 };
</script>

<style scoped lang="sass">
 @import "../node_modules/bulma/sass/utilities/mixins.sass"

 .calendar-date-indicator
   .date-label
     font-weight: 600
     text-align: center
     @include until($desktop)
       font-size: 16px
     @include desktop
       font-size: 18px
     @include widescreen
       font-size: 24px

     &.month-label
       @include until($desktop)
         width: 100px
       @include desktop
         width: 120px
       @include widescreen
         width: 140px

 .calendar-date-indicator > button
   cursor: pointer
   user-select: none

 .column.date-controls
   padding-bottom: 0
   .field
     margin-bottom: 0

 .button-spacer
   display: inline-block
   @include until($desktop)
     padding-left: 5px
   @include widescreen
     padding-left: 20px
</style>
