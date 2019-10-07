import { registerIcon } from "@ui5/webcomponents-base/dist/SVGIconRegistry.js";

const name = "sap-icon://lateness";
const d = "M112 32q-16 0-16-16t16-16h288q16 0 16 16t-16 16H112zm288 448q16 0 16 16t-16 16H112q-16 0-16-16t16-16h288zm-80-30H192v-80q0-27 19-38.5t45-11.5 45 11.5 19 38.5v80zm-192-98q0-15 7-26.5t16.5-21.5 20.5-20 20-22q2-2 2-6t-2-6q-9-12-20-21.5T151.5 209 135 187.5t-7-27.5V64h32v96q0 13 5 21.5t12.5 15.5 17.5 13.5 19 15.5q2 2 5.5 7.5t5 12.5 0 15.5T217 277q-9 10-19 18t-18.5 16.5-14 18T160 352v96h-32v-96zm256-192q0 16-7 27.5T360.5 209 340 228.5 320 250q-2 2-2 6t2 6q9 12 20 22t20.5 20 16.5 21.5 7 26.5v96h-32v-96q0-13-5.5-22.5t-14-18T314 295t-19-18q-6-7-7-15.5t.5-15.5 4.5-12.5 5-7.5q9-9 19-15.5t17.5-13.5 12.5-15.5 5-21.5V64h32v96z";

registerIcon(name, d);
