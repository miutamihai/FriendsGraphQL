import { Module } from "@nestjs/common";
import { TimeService } from "./time.service";
import { TimeResolver } from "./time.resolver";

@Module({
    providers: [ TimeResolver, TimeService ]
})
export class TimeModule {}
