import { InputType, Field } from 'type-graphql';

@InputType()
export class AccountLoginInput {
  @Field()
  readonly username: string;
  @Field()
  readonly password: string;
}
