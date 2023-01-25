import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Drives{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    nev:string;

    @Column('int')
    meret:number;

    @Column('int')
    ar:number;
}