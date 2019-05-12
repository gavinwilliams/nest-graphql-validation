import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AccountModule } from './account/account.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
    }),
    AccountModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
