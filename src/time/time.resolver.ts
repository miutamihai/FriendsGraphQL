import { Query, Resolver } from "@nestjs/graphql";
import { Time } from "./models/time.model";
import { TimeService } from "./time.service";

@Resolver(() => Time)
export class TimeResolver {
    constructor(
        private timeService: TimeService
    ) {}

    @Query(() => Time, { name: 'time' })
    async getTime(){
        return this.timeService.getDate()
    }
}
