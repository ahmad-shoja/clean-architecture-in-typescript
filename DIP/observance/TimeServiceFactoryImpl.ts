import { TimeService } from './app/TimeService';
import { TimeServiceFactory } from './app/TimeServiceFactory'
import { TimeServiceImpl } from './TimeServiceImpl';

export class TimeServiceFactoryImpl implements TimeServiceFactory {
    static makeService(): TimeService {
        return new TimeServiceImpl()
    }
}