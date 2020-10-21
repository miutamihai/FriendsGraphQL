import {Field, Int, ObjectType, InputType} from "@nestjs/graphql";

@ObjectType()
export class Friend {
    @Field(() => Int)
    id: number

    @Field({nullable: false})
    firstName?: string

    @Field({nullable: false})
    lastName?: string
}

@InputType()
export class CreateFriend {
    @Field(() => String, {nullable: false})
    firstName: string
    
    @Field(() => String, {nullable: false})
    lastName: string
}
