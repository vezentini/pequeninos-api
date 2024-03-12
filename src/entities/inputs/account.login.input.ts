import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class AccountLoginInput {
  @Field()
  readonly username: string;
  @Field()
  readonly password: string;
}
