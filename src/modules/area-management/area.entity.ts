import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Area {
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    name!: string

    @Column()
    title!: string

    @Column()
    ogcData!: Array<number>

}