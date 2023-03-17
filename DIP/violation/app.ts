import { TimeService } from "./TimeService";

export default function violatedDIPApp() {
    
    let timeService = new TimeService()

    timeService.start()

    setTimeout(
        () => { timeService.stop() },
        10000
    )
}