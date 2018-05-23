import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ManageRoutingModule } from './manage.routing';
import { ManageComponent } from './manage.component';
import { CanActivateAuthGuard } from '../../shared/guards/dashboard.authGuard';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ManageRoutingModule
  ],
  declarations: [ManageComponent],
  providers: [CanActivateAuthGuard]
})

export class ManageModule { }

