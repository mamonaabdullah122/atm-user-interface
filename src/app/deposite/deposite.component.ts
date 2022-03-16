import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposite.component.html',
  styleUrls: ['./deposite.component.css']
})
export class DepositComponent implements OnInit {

  constructor(private route:ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  coins(){
    this.router.navigate(['coins'], { relativeTo:this.route});
  }
  notes(){
    this.router.navigate(['notes'], { relativeTo:this.route});
  }
  check(){
    this.router.navigate(['check'], { relativeTo:this.route});
  }
}
