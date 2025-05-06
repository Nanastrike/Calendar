import { validateEvent } from "./event.js";

export function initEventForm(toaster) {
    const formElement = document.querySelector("[data-event-form]");

    let mode = "create";

    formElement.addEventListener("submit", (event) => {
        event.preventDefault();
        const formEvent = formIntoEvent(formElement);
        const validationError = validateEvent(formEvent);
        if (validationError !== null) {
            toaster.error(validationError);
            return;
        }

        if (mode === "create") {
            formElement.dispatchEvent(new CustomEvent("event-create", {
                detail: {
                    event: formEvent
                },
                bubbles: true
            }));
        }

        if (mode === "edit") {
            formElement.dispatchEvent(new CustomEvent("event-edit", {
                detail: {
                    event: formEvent
                },
                bubbles: true
            }));
        }
    });

    return {
        formElement,
        switchToCreateMode(date, startTime, endTime) {
            mode = "create";
            fillFormWithDate(formElement, date, startTime, endTime);
        },
        switchToEditMode(event) {
            mode = "edit";
            fillFormWithEvent(formElement, event);
        },
        reset() {
            formElement.querySelector("#id").value = null;
            formElement.reset();
        }
    };
}


function fillFormWithDate(formElement, date, startTime, endTime) {
    const dateInputElement = formElement.querySelector("#date");
    const startTimeSelectElement = formElement.querySelector("#start-time");
    const endTimeSelectElement = formElement.querySelector("#end-time");

    dateInputElement.value = date.toISOString().substr(0, 10);
    startTimeSelectElement.value = startTime;
    endTimeSelectElement.value = endTime;
}

function formIntoEvent(formElement) {
    const formDate = new FormData(formElement);
    const title = formDate.get("title");
    const date = formDate.get("date");
    const startTime = formDate.get("start-time");
    const endTime = formDate.get("end-time");
    const color = formDate.get("color");

    const event = {
        title,
        date: new Date(date),
        startTime: Number.parseInt(startTime, 10),
        endTime: Number.parseInt(endTime, 10),
        color
    };

    return event;
}