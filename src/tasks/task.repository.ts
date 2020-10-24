import { Entity, Repository } from 'typeorm';
import { Task } from './task.entity';

@Entity()
export class TaskRepository extends Repository<Task> {}
