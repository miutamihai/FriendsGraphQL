import {Args, Int, Query, Mutation, Resolver} from "@nestjs/graphql";
import {Friend, CreateFriend} from "./models/friend.model";
import {FriendsService} from "./friends.service";

@Resolver(()=> Friend)
export class FriendsResolver {
    constructor(
        private friendsService: FriendsService
    ) {}

    @Query(() => Friend, { name: 'friend' })
    async getFriend(@Args('id', { type: () => Int }) id: number) {
        return this.friendsService.findOneById(id)
    }

    @Query(() => [Friend], {name: 'friends'})
    async getFriends(){
        return this.friendsService.findAll();
    }
    
    @Mutation(() => Friend, {name: 'createFriend'})
    async createFriend(@Args('friend', { type: () => CreateFriend }) friend: CreateFriend) {
        return this.friendsService.create(friend)
    }
}
