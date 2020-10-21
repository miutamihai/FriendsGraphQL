import {Module} from '@nestjs/common';
import {GraphQLModule} from "@nestjs/graphql";
import {FriendsModule} from "./friends/friends.module";
import {TimeModule} from "./time/time.module";
import { UpperCaseDirective } from "./friends/friends.directives";
import { JobModule } from './job/job.module';

@Module({
    imports: [
        FriendsModule,
        TimeModule,
        GraphQLModule.forRoot({
            installSubscriptionHandlers: true,
            autoSchemaFile: true,
            schemaDirectives: {
                upper: UpperCaseDirective
            }
        }),
        JobModule
    ],
})
export class AppModule {
}
