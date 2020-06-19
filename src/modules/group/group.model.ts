import { ChildEntity, Column, ManyToMany } from "typeorm";
import { Party } from "../party/party.model";
import { Field, ObjectType } from "type-graphql";

@ChildEntity()
@ObjectType({implements: Party})
export class Group extends Party {
  @Field()
  @Column({unique: true})
  groupName!: string

  @Field(type => [Party])
  @ManyToMany(
    type => Party,
    party => party.groups
  )
  parties?: Party[]
}
