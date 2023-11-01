import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { ButtonComponent } from './component/button/button.component';
import { TasksComponent } from './component/tasks/tasks.component';
import { TaskItemComponent } from './component/task-item/task-item.component';



@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule
  ],
  declarations: [ 
    AppComponent, 
    HeaderComponent, 
    ButtonComponent,
    TasksComponent,
    TaskItemComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
