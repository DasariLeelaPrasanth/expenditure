import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { ExpenditureRoutingModule } from './expenditure-routing.module';



@NgModule({
  declarations: [
    DashboardComponent,
    ExpensesComponent
  ],
  imports: [
    CommonModule,
    ExpenditureRoutingModule
  ]
})
export class ExpenditureModule { }
