import {initViewSelect} from "./view-select.js";
import { initEventCreateButton } from "./even-create-button.js";
import { initEventFormDialog } from "./event-form-dialog.js";
import { initEventStore } from "./event-store.js";
import { initNotification } from "./notification.js";
import {initCalendar} from "./calender.js";
import { initNav } from "./nav.js";
import { initEventDetailsDialog } from "./event-details-dialog.js";

const eventStore = initEventStore();
initCalendar(eventStore);
initEventCreateButton();
initEventFormDialog();
initEventDetailsDialog();
initNotification();
initViewSelect();
initNav();