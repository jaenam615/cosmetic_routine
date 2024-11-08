import 'reflect-metadata';
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, ManyToOne, JoinColumn } from 'typeorm';
import { Routine } from './routine.entity';
import { Item } from './item.entity';

@Entity('routine_detail')
export class RoutineDetail {
    @PrimaryGeneratedColumn()
    step_number!: number;

    @Column()
    routine_key!: number;

    @Column()
    item_key!: number;

    @Column({ type: `varchar`, length: 255 })
    step_name!: string;
    @Column({ type: `varchar`, length: 255 })
    description?: string;

    @ManyToOne(() => Routine, routine => routine.routine_key)
    @JoinColumn({ name: 'routine_key' })
    routine!: Routine;

    @OneToOne(() => Item, item => item.item_key)
    @JoinColumn({ name: 'item_key' })
    item!: Item;
}