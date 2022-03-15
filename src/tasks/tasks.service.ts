import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import { v4 as uuid } from 'uuid';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getAllTasks(): Task[] {
    return this.tasks;
  }

  createTask(title: string, descriptrion: string): Task {
    const task: Task = {
      id: uuid(),
      title,
      descriptrion,
      status: TaskStatus.OPEN,
    };

    this.tasks.push(task);
    return task;
  }
}
