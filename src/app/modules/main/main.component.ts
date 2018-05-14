import { Component, OnInit } from '@angular/core';
import { trigger, animate, style, state, transition, query, stagger } from '@angular/animations';
import { UsersService } from '../../shared/services/users/users.service';
import { WorkmeterService } from '../../shared/services/workmeter/workmeter.service';
import { ToastService } from '../../shared/services/toast/toast.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  seconds: number;
  
  constructor(
    private activatedRoute: ActivatedRoute,
    public usersService: UsersService,
    private workmeterService: WorkmeterService,
    private toastService: ToastService) {
  }

  ngOnInit() {
    this.activatedRoute.data
    .map((result) => {return result.workmeter})
    .subscribe((result) => {
      this.seconds = result;
    });
  }
}
