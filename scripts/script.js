import {initViewSelect} from "./view-select.js";
import { initEventCreateButton } from "./even-create-button.js";
import { initEventFormDialog } from "./event-form-dialog.js";
import { initEventStore } from "./event-store.js";
import { initNotification } from "./notification.js";
import {initCalendar} from "./calender.js";

initEventStore();
initCalendar();
initEventCreateButton();
initEventFormDialog();
initNotification();
initViewSelect();