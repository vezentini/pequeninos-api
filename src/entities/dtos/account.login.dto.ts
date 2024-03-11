import { ObjectType, Field } from 'type-graphql';


@ObjectType()
export class AccountLoginType {
  @Field()
  readonly id: string;
  @Field()
  readonly name: string;
  @Field()
  readonly username: string;
}
