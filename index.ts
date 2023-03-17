import observedDIPApp from "./DIP/observance/app/app";
import { TimeServiceFactoryImpl } from "./DIP/observance/TimeServiceFactoryImpl";
import violatedDIPApp from "./DIP/violation/app";


//*** DIP */

//violated
violatedDIPApp()

// Observed
let service = TimeServiceFactoryImpl.makeService()
observedDIPApp(service)