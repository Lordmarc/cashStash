import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {

  items: string[] = []; 

  constructor() {}

  ngOnInit() {
    for (let i = 1; i < 51; i++){
      this.items.push(`Item ${i}`);
    }
  }

 
}
 