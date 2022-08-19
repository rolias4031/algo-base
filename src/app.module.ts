import { Module } from '@nestjs/common';
import { AlgoModule } from './algo/algo.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Algo } from './algo/algo.entity';
import { Ds } from './ds/ds.entity';
import { DsModule } from './ds/ds.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    AlgoModule,
    DsModule,
    TypeOrmModule.forRoot({
      type: process.env.DATABASE_TYPE as 'mysql',
      host: process.env.HOST,
      port: parseInt(process.env.PORT),
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PW,
      database: process.env.DATABASE_NAME,
      entities: [Algo, Ds],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
