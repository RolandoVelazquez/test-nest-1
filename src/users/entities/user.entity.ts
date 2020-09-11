import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class User{
    @PrimaryGeneratedColumn()
    id: string;
    @Column()
    email: string;
    @Column({unique:true})
    username: string;
    @Column()
    displayName: string;
}
