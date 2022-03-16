import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent implements OnInit {
count!:any;
posts!:any;
  constructor() { }

  ngOnInit(): void {
  }


  callFunction(event: any, post: any){
    console.log(post);
  }

  clickFunction() {
    alert("Submit successfully");
  }
}


