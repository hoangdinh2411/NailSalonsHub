import { Global, Module } from '@nestjs/common';
import { Db, MongoClient } from 'mongodb';

@Global()
@Module({
  providers: [
    {
      provide: 'DATABASE_CONNECTION',
      useFactory: async (): Promise<Db> => {
        const client = await MongoClient.connect(process.env.MONGODB_URI);
        await client.connect();
        return client.db();
      }
    }
  ],
  exports: ['DATABASE_CONNECTION']
})
export class DatabaseModule {}
