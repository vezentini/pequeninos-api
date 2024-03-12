import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class CommunicatedFilterInput {
  @Field(() => ID, { nullable: true })
  readonly id: string;
}
