import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})
export class ServerComponent implements OnInit {
  allowNewServer = false;
  noServerCreater = 'no service work';
  data = "";
  server="";
  userEmail="";

  constructor() {
    setTimeout(()=>{
      this.allowNewServer = true;
    },2000)
   }

  ngOnInit(): void {
  }
  onServerCreater(){
    this.noServerCreater = 'server creater is working'+" " +this.data ;

  }

  onUpdate(event:Event){

    this.data = (<HTMLInputElement>event.target).value;


  }



}
