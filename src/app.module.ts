import {Module} from '@nestjs/common';
import {GraphQLModule} from "@nestjs/graphql";
import {FriendsModule} from "./friends/friends.module";
import {TimeModule} from "./time/time.module";

@Module({
    imports: [
        FriendsModule,
        TimeModule,
        GraphQLModule.forRoot({
            installSubscriptionHandlers: true,
            autoSchemaFile: true
        })
    ],
})
export class AppModule {
}
