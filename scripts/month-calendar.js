import { generateMonthCalendarDays,today,isTheSameDay } from "./date.js";


const calendarTemplateElement = document.querySelector("[date-template='month-calendar']");
const calendarDayTemplateElement = document.querySelector("[date-template='month-calendar-day']");

const calendarWeekClasses = {
    4:"four-week",
    5:"five-week",
    6:"six-week"
};

export function initMonthCalendar(parent,selectedDate){
    const calendarContent = calendarTemplateElement.content.cloneNode(true);
    const calendarElement = calendarContent.querySelector("[date-month-calendar]");
    const calendarDayListElement = calendarElement.querySelector("[date-month-calendar-day-list]");

    const calendarDays = generateMonthCalendarDays(selectedDate);
    const calendarWeeks = calendarDays /7;

    const calendarWeekClass = calendarWeekClasses[calendarWeeks];
    calendarElement.classListt.add(calendarWeekClass);

    for(const calendarDay of calendarDays){
        initCalendarDay(calendarDayListElement,calendarDay);
    }
    parent.appendChild(calendarElement);
}

function initCalendarDay(parent, calendarDay){
    const calendarDayContent = calendarDayTemplateElement.content.cloneNode(true);
    const calendarDayElement = calendarDayContent.querySelector("[date-month-calendar-day]");
    const calendarDayLabelElement = calendarDayContent.querySelector("[date-month-calendar-day-label]");

    if(isTheSameDay(today(),calendarDay)){
        calendarDayElement.classListt.add("month-calendar__day--highlight");
    }

    calendarDayLabelElement.textContent = calendarDay.getDate();
    parent.appendChild(calendarDayElement);
}