import { TimeService } from "./TimeService";

export default function observedDIPApp(timeService: TimeService) {

    timeService.start()

    setTimeout(
        () => timeService.stop(),
        5000
    )
}