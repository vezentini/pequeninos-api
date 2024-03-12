import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class AccountLoginType {
  @Field()
  readonly id: string;
  @Field()
  readonly name: string;
  @Field()
  readonly username: string;
}
