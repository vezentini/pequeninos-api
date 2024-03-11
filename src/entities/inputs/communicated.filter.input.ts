import { Field, ID, InputType } from 'type-graphql';

@InputType()
export class CommunicatedFilterInput {
  @Field(() => ID, { nullable: true })
  readonly id: string;
}
