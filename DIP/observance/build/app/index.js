"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TimeServiceFactoryImpl_1 = require("../TimeServiceFactoryImpl");
let service = TimeServiceFactoryImpl_1.TimeServiceFactoryImpl.makeService();
service.start();
setTimeout(() => service.stop(), 5000);
//# sourceMappingURL=index.js.map