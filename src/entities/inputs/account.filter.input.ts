import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class AccountFilterInput {
  @Field({ nullable: true })
  readonly id: string | null;
  @Field({ nullable: true })
  readonly name: string;
  @Field({ nullable: true })
  readonly username: string;
}
