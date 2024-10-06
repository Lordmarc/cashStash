import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.page.html',
  styleUrls: ['./inbox.page.scss'],
})
export class InboxPage implements OnInit {
  
  items: string[] = []; 


  constructor() { }

  ngOnInit() {
    for (let i = 1; i < 51; i++){
      this.items.push(`Item ${i}`);
    }
  }

}
 