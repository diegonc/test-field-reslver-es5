import { InputType, Field } from "type-graphql";
import { Group } from "../group/group.model";
import { GroupReferenceInput } from "../group/group.utils";

@InputType()
export class PersonCreateInput {
  @Field()
  firstName!: string

  @Field()
  lastName!: string

  @Field(type => [GroupReferenceInput], {nullable: true})
  groups?: GroupReferenceInput[]
}
