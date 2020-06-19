import {
  Arg,
  Args,
  Mutation,
  Resolver,
  Query,
  FieldResolver,
  Root,
  ResolverInterface
} from 'type-graphql'

import { Party } from './party.model'
import { Group } from '../group/group.model'

@Resolver(of => Party)
export class PartyResolver implements ResolverInterface<Party> {

  @FieldResolver(of => Group)
  async groups(@Root() party: Party): Promise<Group[]> {
    /*return Group.createQueryBuilder("group")
      .leftJoin("group.parties", "party")
      .where("party.id = :id", {id: party.id})
      .getMany()
    */
    const group = new Group()
    group.id = '1';
    group.groupName = 'ADMIN'
    return [group];
  }

  @Query(returns => [Party])
  async parties() {
    return await Party.find()
  }
}
