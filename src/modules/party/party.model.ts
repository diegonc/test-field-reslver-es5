import {
  Field,
  InterfaceType,
  ID
} from 'type-graphql';

import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  TableInheritance,
  ManyToMany,
  JoinTable
} from 'typeorm'
import { Group } from '../group/group.model';

@InterfaceType()
@Entity()
@TableInheritance({ column: { type: "varchar", name: "type" } })
export abstract class Party extends BaseEntity {
  @Field(type => ID)
  @PrimaryGeneratedColumn()
  id!: string;

  @Field(type => [Group], {nullable: true})
  @ManyToMany(
    type => Group,
    group => group.parties
  )
  @JoinTable()
  groups?: Group[]
}
