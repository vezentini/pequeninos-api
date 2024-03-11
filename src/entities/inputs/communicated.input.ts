import { Field, ID, InputType } from 'type-graphql';
import { CommunicatedTypes } from '../enums';

@InputType()
export class CommunicatedInput {
  @Field(() => ID)
  readonly id: string;
  @Field()
  readonly title: string;
  @Field()
  readonly description: string;
  @Field(() => CommunicatedTypes)
  readonly type: CommunicatedTypes;
  @Field(() => ID)
  readonly photoId: string;
}
