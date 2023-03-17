"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeService = void 0;
class TimeService {
    constructor() {
        this.interval = 1000;
    }
    start() {
        this.intervalID = setInterval(() => {
            console.log(this.getTime());
        }, this.interval);
    }
    stop() {
        if (this.intervalID)
            clearInterval(this.intervalID);
        else
            throw (new Error('Service is not started yet!'));
    }
    getTime() {
        const date = new Date();
        const h = date.getHours();
        const m = date.getMinutes();
        const s = date.getSeconds();
        return `${h}:${m}:${s}`;
    }
}
exports.TimeService = TimeService;
//# sourceMappingURL=TimeService.js.map