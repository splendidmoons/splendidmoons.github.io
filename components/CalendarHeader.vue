<template>
    <div class="calendar-month-header">
        <CalendarDateIndicator
            class="calendar-month-header-selected-month"
            :selected-date="selected_date"
            :calendar-period="calendar_period"
            :current-date="today"
            @dateSelected="selectDate"
        />

        <CalendarModeSelector
            :calendar-period="calendar_period"
            :is-compact="is_compact"
            @calendarPeriodChanged="setCalendarPeriod"
            @isCompactChanged="setIsCompact"
        />
    </div>
</template>

<script>
 import dayjs from "dayjs";

 export default {
     props: {
         selectedDate: {
             type: Object,
             required: true,
         },

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
             selected_date: this.selectedDate,
             calendar_period: this.calendarPeriod,
             is_compact: this.isCompact,
         };
     },

     computed: {
         today() {
             return dayjs().format("YYYY-MM-DD");
         },
     },

     methods: {
         selectDate(val) {
             this.selected_date = val;
             this.$emit("dateSelected", val);
         },

         setCalendarPeriod(val) {
             this.calendar_period = val;
             this.$emit("calendarPeriodChanged", val);
         },

         setIsCompact(val) {
             this.is_compact = val;
             this.$emit("isCompactChanged", val);
         },
     },
 }
</script>

<style scoped lang="sass">
 .calendar-month-header
     display: flex
     justify-content: space-between
     padding: 10px

 .calendar-month-header
     color: lighten(black, 20%)

 .is-dark .calendar-month-header
     color: lighten(black, 90%)
</style>
