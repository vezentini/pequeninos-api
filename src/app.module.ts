import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import modules from './graphql/modules';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [
    ...modules,
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
      playground: true,
    }),
    MongooseModule.forRoot('mongodb://localhost:27017/pequeninos', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: true }),
  ],
})
export class AppModule { }
