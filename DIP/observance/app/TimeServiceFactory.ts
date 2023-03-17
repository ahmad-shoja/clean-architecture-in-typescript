import { TimeService } from "./TimeService";

export abstract class TimeServiceFactory{
    static makeService:()=> TimeService
}