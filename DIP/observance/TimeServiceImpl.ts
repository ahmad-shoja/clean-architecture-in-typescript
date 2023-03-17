import { TimeService } from "./app/TimeService";

export class TimeServiceImpl implements TimeService {

    private interval = 1000
    private intervalID?: number

    start(): void {
        this.intervalID = setInterval(() => {
            console.log(this.getTime());
        }, this.interval)
    }

    stop(): void {
        if (this.intervalID)
            clearInterval(this.intervalID)
        else
            throw (new Error('Service is not started yet!'))
    }

    private getTime() {
        const date = new Date()
        const h = date.getHours()
        const m = date.getMinutes()
        const s = date.getSeconds()

        return `${h}:${m}:${s}`
    }
}