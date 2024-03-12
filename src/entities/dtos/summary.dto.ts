import { ObjectType, Field, ID, registerEnumType } from '@nestjs/graphql';
import { SnackConsumnTypes } from '../enums';

registerEnumType(SnackConsumnTypes, {
  name: 'SnackConsumnTypes',
});

@ObjectType()
export class SummaryType {
  @Field(() => ID)
  readonly id: string;
  @Field(() => ID)
  readonly studentId: string;
  @Field()
  readonly date: string;
  @Field()
  readonly mornningSnack: string;
  @Field(() => SnackConsumnTypes)
  readonly mornningSnackConsumn: SnackConsumnTypes;
  @Field()
  readonly luncheon: string;
  @Field(() => SnackConsumnTypes)
  readonly luncheonConsumn: SnackConsumnTypes;
  @Field()
  readonly afternoonSnack: string;
  @Field(() => SnackConsumnTypes)
  readonly afternoonSnackConsumn: SnackConsumnTypes;
  @Field()
  readonly preDinner: string;
  @Field()
  readonly preDinnerConsumn: SnackConsumnTypes;
  @Field()
  readonly description: string;
}
