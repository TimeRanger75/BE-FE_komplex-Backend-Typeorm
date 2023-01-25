import { Body, Controller, Get, Post, Render,Param, Put, Delete } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { AppService } from './app.service';
import { Drives } from './drives.entity';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private dataSource: DataSource,
  ) {}

  @Get('/api/tarhely')
  listDrives(){
    const drivesRepo=this.dataSource.getRepository(Drives)
    return drivesRepo.find();
  }

  @Get('/api/tarhely/:id')
  listDrive(@Param ('id')id:number){
    const driveRepo=this.dataSource.getRepository(Drives)
    return driveRepo.findBy({id})
  }

  @Put('/api/tarhely/:id')
  updateDrive(@Body() drive:Drives,@Param('id')id:number){
      const driveRepo=this.dataSource.getRepository(Drives)
      driveRepo.update({id:id},{nev:drive.nev, meret:drive.meret, ar:drive.ar}  )
  }

  @Post('/api/tarhely')
  insertDrive(@Body()drive:Drives){
    drive.id=undefined;
    const driveRepo=this.dataSource.getRepository(Drives);
    driveRepo.save(drive);
  }
  
  @Delete('/api/tarhely/:id')
  deleteDrive(@Param('id')id:number){
    const driveRepo=this.dataSource.getRepository(Drives);
    driveRepo.delete(id);
  }

}
