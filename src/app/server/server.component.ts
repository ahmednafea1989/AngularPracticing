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
  sentence = false;
  serverId:number = 10;
  serverStatus: string = 'offline' ; 
  showSecret = true ;
  log = [];

  constructor() {
    setTimeout(()=>{
      this.allowNewServer = true;
    },2000)

    this.serverStatus = Math.random() >0.5 ? 'online' : 'offline';
   }

  ngOnInit(): void {
  }
  onServerCreater(){
    this .sentence = true;
    this.noServerCreater = 'server creater is working'+" " +this.data ;

  }

  onUpdate(event:Event){

    this.data = (<HTMLInputElement>event.target).value;


  }
  getColor(){
    return this.serverStatus === 'online' ? 'green ' : 'red';
  }

 getServerStatus(){
   return this.serverStatus;
 }


 onShowSecret(){
   this.showSecret = !this.showSecret;
  //  this.log.push(this.log.length + 1);
  this.log.push(new Date());
 }

}
