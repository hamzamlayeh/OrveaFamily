import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProjectListesPage } from './project-listes';

@NgModule({
  declarations: [
    ProjectListesPage,
  ],
  imports: [
    IonicPageModule.forChild(ProjectListesPage),
  ],
})
export class ProjectListesPageModule {}
