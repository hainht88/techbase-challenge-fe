import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';;
import { DashboardComponent } from './view/dashboard/dashboard.component';
import { ArticleComponent } from './view/article/article.component';
import { StatisticComponent } from './view/statistic/statistic.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'article', component: ArticleComponent },
  { path: 'statistic', component: StatisticComponent },
  { path: '', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
