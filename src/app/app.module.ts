import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BalanceComponent } from './balance/balance.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { DepositComponent } from './deposite/deposite.component';
import { DepositeCoinsComponent } from './deposite-coins/deposite-coins.component';
import { DepositeNotesComponent } from './deposite-notes/deposite-notes.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { DepositCheckComponent } from './deposit-check/deposit-check.component';
import { OverviewComponent } from './overview/overview.component';
import { MinistatementComponent } from './ministatement/ministatement.component';

@NgModule({
  declarations: [
    AppComponent,
    BalanceComponent,
    WithdrawComponent,
    DepositComponent,
    DepositeCoinsComponent,
    DepositeNotesComponent,
    PagenotfoundComponent,
    DepositCheckComponent,
    OverviewComponent,
    MinistatementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
