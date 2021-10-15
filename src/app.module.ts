import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthModule } from './auth/auth.module';
import CatchException from './common/exceptions/http-exception.filter';
import { ConfigModule } from './config/config.module';
import { ConfigService } from './config/config.service';
import { FloorModule } from './floor/floor.module';
import { ReservationModule } from './reservation/reservation.module';
import { SeatModule } from './seat/seat.module';
import { RoomModule } from './room/room.module';
import { UserModule } from './user/user.module';
import { FacilityModule } from './facility/facility.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => configService.typeOrmConfig,
    }),
    AuthModule,
    UserModule,
    ReservationModule,
    SeatModule,
    RoomModule,
    FloorModule,
    FacilityModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_FILTER,
      useClass: CatchException,
    },
  ],
})
export class AppModule {}
