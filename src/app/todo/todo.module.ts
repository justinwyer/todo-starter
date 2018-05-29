import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoInputBoxComponent } from './todo-input-box/todo-input-box.component';
import {TodoService} from './todo.service';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [TodoService],
  declarations: [TodoListComponent, TodoInputBoxComponent]
})
export class TodoModule { }
