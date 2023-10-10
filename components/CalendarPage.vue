<template>
    <div class="container">
        <CalendarHeader
            :selected-date="selected_date"
            :calendar-period="calendar_period"
            :is-compact="is_compact"
            @dateSelected="selectDate"
            @calendarPeriodChanged="setCalendarPeriod"
            @isCompactChanged="setIsCompact"
        />
        <CalendarMonth
            v-if="calendar_period == 'month'"
            :selected-date="selected_date"
            :is-compact="is_compact"
        />
        <CalendarYear
            v-else
            :selected-date="selected_date"
            :is-compact="is_compact"
        />
    </div>
</template>

<script>
 import dayjs from "dayjs";

 export default {
     data() {
         return {
             selected_date: dayjs(),
             calendar_period: 'month', // 'year' or 'month'
             is_compact: false,
         };
     },

     methods: {
         selectDate(newSelectedDate) {
             this.selected_date = newSelectedDate;
         },

         setCalendarPeriod(val) {
             this.calendar_period = val;
         },

         setIsCompact(val) {
             this.is_compact = val;
         },
     },
 }
</script>
