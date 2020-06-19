import {
  Field,
  ObjectType,
  ID
} from 'type-graphql';
import { Party } from '../party/party.model';

import {
  Entity,
  Column,
  ChildEntity
} from 'typeorm'


@ChildEntity()
@ObjectType({implements: Party})
export class Person extends Party {
  @Field()
  @Column()
  firstName!: string;

  @Field()
  @Column()
  lastName!: string;
}
