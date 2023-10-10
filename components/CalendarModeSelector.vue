<template>
  <div class="calendar-mode-selector">
    <div class="control">
      <button :class="[is_dark ? 'is-dark' : '', 'button']">
        <label class="radio">
          <input type="radio" name="calendar_period" value="year" v-model="calendar_period" @change="setCalendarPeriod">
          Year
        </label>
      </button>
      <button :class="[is_dark ? 'is-dark' : '', 'button']">
        <label class="radio">
          <input type="radio" name="calendar_period" value="month" v-model="calendar_period" @change="setCalendarPeriod">
          Month
        </label>
      </button>
    </div>

    <button :class="[is_dark ? 'is-dark' : '', 'button']">
      <label class="checkbox" for="is_checked">
        <input type="checkbox" id="is_checked" v-model="is_compact" @change="setIsCompact">
        Compact
      </label>
    </button>
  </div>
</template>

<script>
 import { mapWritableState } from 'pinia';
 import { main_store } from '~/store/main';

 export default {
   props: {
     calendarPeriod: {
       type: String,
       required: true,
     },

     isCompact: {
       type: Boolean,
       required: true,
     },
   },

   data() {
     return {
       calendar_period: this.calendarPeriod,
       is_compact: this.isCompact,
     }
   },

   computed: {
     ...mapWritableState(main_store, ['is_dark']),
   },

   methods: {
     setCalendarPeriod() {
       this.$emit("calendarPeriodChanged", this.calendar_period);
     },

     setIsCompact() {
       this.$emit("isCompactChanged", this.is_compact);
     },
   }
 };
</script>

<style scoped lang="sass">
 .calendar-mode-selector
   display: flex
   justify-content: space-between

 .calendar-mode-selector > *
   cursor: pointer
   user-select: none
</style>
