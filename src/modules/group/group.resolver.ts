import { Authorized, Resolver, Query, Mutation, Arg } from "type-graphql";
import { Group } from "./group.model";
import { GroupCreateInput } from "./group.utils";

@Resolver(of => Group)
export class GroupResolver {
  @Query(type => [Group])
  async groups() {
    return Group.find()
  }

  @Mutation(type => Group)
  async createGroup(
    @Arg('data') data: GroupCreateInput
  ) {
    const group = Group.create(data)
    await group.save()
    return group;
  }
}
