<template>
    <div :class="[isSmall ? 'is-small' : '', 'calendar-month']" >
        <h2 v-show="showMonthName" class="calendar-month-name" >
            {{ selectedDate.format("MMMM") }}
        </h2>
        <CalendarWeekdays v-show="!isCompact" :header-is-compact="headerIsCompact" />

        <ol :class="{'days-grid': !isCompact, 'days-list': isCompact,}">
            <CalendarMonthDayItem
                v-for="day in days"
                :key="day.date"
                :day="day"
                :is-today="day.date === today"
                :is-compact="isCompact"
            />
        </ol>
    </div>
</template>

<script>
 import dayjs from "dayjs";
 import weekday from "dayjs/plugin/weekday";
 import weekOfYear from "dayjs/plugin/weekOfYear";

 dayjs.extend(weekday);
 dayjs.extend(weekOfYear);

 export default {
     props: {
         selectedDate: {
             type: Object,
             required: true
         },

         isCompact: {
             type: Boolean,
             required: true,
         },

         headerIsCompact: {
             type: Boolean,
             required: false,
             default: false,
         },

         isSmall: {
             type: Boolean,
             required: false,
             default: false,
         },

         showMonthName: {
             type: Boolean,
             required: false,
             default: false,
         },
     },

     computed: {
         days() {
             if (this.isCompact) {
                return [
                    ...this.currentMonthDays,
                ];

             } else {
                return [
                    ...this.previousMonthDays,
                    ...this.currentMonthDays,
                    ...this.nextMonthDays
                ];
             }
         },

         today() {
             return dayjs().format("YYYY-MM-DD");
         },

         month() {
             return Number(this.selectedDate.format("M"));
         },

         year() {
             return Number(this.selectedDate.format("YYYY"));
         },

         numberOfDaysInMonth() {
             return dayjs(this.selectedDate).daysInMonth();
         },

         currentMonthDays() {
             return [...Array(this.numberOfDaysInMonth)].map((day, index) => {
                 return {
                     date: dayjs(`${this.year}-${this.month}-${index + 1}`).format(
                         "YYYY-MM-DD"
                     ),
                     isCurrentMonth: true
                 };
             });
         },

         previousMonthDays() {
             const firstDayOfTheMonthWeekday = this.getWeekday(
                 this.currentMonthDays[0].date
             );
             const previousMonth = dayjs(`${this.year}-${this.month}-01`).subtract(
                 1,
                 "month"
             );

             // Cover first day of the month being sunday (firstDayOfTheMonthWeekday === 0)
             const visibleNumberOfDaysFromPreviousMonth = firstDayOfTheMonthWeekday
                                                        ? firstDayOfTheMonthWeekday - 1
                                                        : 6;

             const previousMonthLastMondayDayOfMonth = dayjs(
                 this.currentMonthDays[0].date
             )
                 .subtract(visibleNumberOfDaysFromPreviousMonth, "day")
                 .date();

             return [...Array(visibleNumberOfDaysFromPreviousMonth)].map(
                 (day, index) => {
                     return {
                         date: dayjs(
                             `${previousMonth.year()}-${previousMonth.month() +
                1}-${previousMonthLastMondayDayOfMonth + index}`
                         ).format("YYYY-MM-DD"),
                         isCurrentMonth: false
                     };
                 }
             );
         },

         nextMonthDays() {
             const lastDayOfTheMonthWeekday = this.getWeekday(
                 `${this.year}-${this.month}-${this.currentMonthDays.length}`
             );

             const nextMonth = dayjs(`${this.year}-${this.month}-01`).add(1, "month");

             const visibleNumberOfDaysFromNextMonth = lastDayOfTheMonthWeekday
                                                    ? 7 - lastDayOfTheMonthWeekday
                                                    : lastDayOfTheMonthWeekday;

             return [...Array(visibleNumberOfDaysFromNextMonth)].map((day, index) => {
                 return {
                     date: dayjs(
                         `${nextMonth.year()}-${nextMonth.month() + 1}-${index + 1}`
                     ).format("YYYY-MM-DD"),
                     isCurrentMonth: false
                 };
             });
         }
     },

     methods: {
         getWeekday(date) {
             return dayjs(date).weekday();
         },
     }
 };
</script>

<style scoped lang="sass">
 ol,
 li
     padding: 0
     margin: 0
     list-style: none

 .calendar-month
     position: relative

 .calendar-month
     color: lighten(black, 70%)

 .is-dark .calendar-month
     color: lighten(black, 30%)

 .calendar-month-name
     font-size: 20px
     text-align: center

 .calendar-month-name
     color: lighten(black, 30%)

 .is-dark .calendar-month-name
     color: lighten(black, 80%)

 .day-of-week,
 .days-grid
     display: grid
     grid-template-columns: repeat(7, 1fr)

 .days-grid
     height: 100%
     position: relative
     // grid-column-gap: var(--grid-gap)
     // grid-row-gap: var(--grid-gap)

</style>
