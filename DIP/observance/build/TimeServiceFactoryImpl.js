"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeServiceFactoryImpl = void 0;
const TimeServiceImpl_1 = require("./TimeServiceImpl");
class TimeServiceFactoryImpl {
    static makeService() {
        return new TimeServiceImpl_1.TimeServiceImpl();
    }
}
exports.TimeServiceFactoryImpl = TimeServiceFactoryImpl;
//# sourceMappingURL=TimeServiceFactoryImpl.js.map