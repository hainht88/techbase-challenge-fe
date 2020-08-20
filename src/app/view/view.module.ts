import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgMaterialModule } from "../shared/ng-material/ng-material.module";

import { DashboardComponent } from "./dashboard/dashboard.component";
import { ArticleComponent } from './article/article.component';
import { StatisticComponent } from './statistic/statistic.component';



@NgModule({
  declarations: [DashboardComponent, ArticleComponent, StatisticComponent],
  imports: [
    CommonModule,
    NgMaterialModule
  ]
})
export class ViewModule { }
