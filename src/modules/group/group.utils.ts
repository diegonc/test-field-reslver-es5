import { InputType, Field } from "type-graphql";

@InputType()
export class GroupCreateInput {
  @Field()
  groupName!: string
}

@InputType()
export class GroupReferenceInput {
  @Field()
  id!: string
}
