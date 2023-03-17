"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TimeService_1 = require("./TimeService");
let timeService = new TimeService_1.TimeService();
timeService.start();
setTimeout(() => { timeService.stop(); }, 10000);
//# sourceMappingURL=index.js.map