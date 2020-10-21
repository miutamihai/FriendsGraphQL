import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Time {
    @Field({nullable: false})
    value: Date
}
