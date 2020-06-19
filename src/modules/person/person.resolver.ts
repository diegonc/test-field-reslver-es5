import {
  Arg,
  Args,
  Mutation,
  Resolver,
  Query
} from 'type-graphql'

import { Person } from './person.model'
import { PersonCreateInput } from './person.utils'

@Resolver(of => Person)
export class PersonResolver {
  @Query(returns => [Person])
  async people() {
    return await Person.find()
  }

  @Mutation(returns => Person)
  async createPerson(
    @Arg('data') data: PersonCreateInput
  ) {
    const person = Person.create(data)
    await person.save()
    return person
  }
}
