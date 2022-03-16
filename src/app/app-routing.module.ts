import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BalanceComponent } from './balance/balance.component';
import { DepositCheckComponent } from './deposit-check/deposit-check.component';
import { DepositeCoinsComponent } from './deposite-coins/deposite-coins.component';
import { DepositeNotesComponent } from './deposite-notes/deposite-notes.component';
import { DepositComponent } from './deposite/deposite.component';
import { MinistatementComponent } from './ministatement/ministatement.component';
import { OverviewComponent } from './overview/overview.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { WithdrawComponent } from './withdraw/withdraw.component';


const routes: Routes = [
   { path : '', redirectTo: '/balance', pathMatch: 'full'},
  { path : 'balance', component: BalanceComponent },
  { path : 'deposit', component: DepositComponent},
  { path : 'overview', component: OverviewComponent},
  { path : 'ministatement', component: MinistatementComponent,
  children : [

    { path : 'coins', component : DepositeCoinsComponent },
    { path : 'notes', component : DepositeNotesComponent},
    { path : 'check', component : DepositCheckComponent},
  ]


},

  { path : 'withdraw', component: WithdrawComponent},
  { path : '**', component: PagenotfoundComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
