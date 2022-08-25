import { Module } from '@nestjs/common';
import { AlgoModule } from './algo/algo.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Algo } from './algo/algo.entity';
import { Ds } from './ds/ds.entity';
import { DsModule } from './ds/ds.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { User } from './users/user.entity';
import { AdminModule } from './admin/admin.module';
import { Admin } from './admin/admin.entity';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';

// this is the main module through which all other modules are imported
@Module({
  imports: [
    ConfigModule.forRoot(),
    AuthModule,
    UsersModule,
    AlgoModule,
    DsModule,
    AdminModule,
    TypeOrmModule.forRoot({
      type: process.env.DATABASE_TYPE as 'mysql',
      host: process.env.HOST,
      port: parseInt(process.env.DATABASE_PORT),
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PW,
      database: process.env.DATABASE_NAME,
      entities: [Algo, Ds, User, Admin],
      synchronize: false, // this option should be false for production. Involves reflecting entities to database tables.
    }),
    // import Throttler. Settings allow for 10 requests per minute. Injected as a provider in 'providers' below.
    ThrottlerModule.forRoot({
      ttl: 60,
      limit: 10,
    }),
  ],
  controllers: [AppController],
  providers: [AppService, { provide: APP_GUARD, useClass: ThrottlerGuard }],
})
export class AppModule {}
