import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ministatement',
  templateUrl: './ministatement.component.html',
  styleUrls: ['./ministatement.component.css']
})
export class MinistatementComponent implements OnInit {
  elements: any = [
    {first: 'Debit Card', last: 'Otto', handle: '@mdo'},
    {first: 'Orbit', last: 'Thornton', handle: '@fat'},
    {first: 'Orbit-Islamic', last: 'the Bird', handle: '@twitter'},
  ];

  headElements = ['Bank Alfatah Account',    'PKR 682.27', 'Mini Statement', 'Account Statement'];
  constructor() { }

  ngOnInit(): void {
  }

}
