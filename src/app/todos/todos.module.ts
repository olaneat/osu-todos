import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { TodosComponent } from './todos.component';
import { todosRouting } from './todos.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(todosRouting),
  ],
  declarations: [
    TodosComponent,
  ],
})
export class TodosModule {}
