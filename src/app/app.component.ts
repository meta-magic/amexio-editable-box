import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'amexio-editable-box';
  data = [];

  constructor(){
    this.data = [
      {
        "type": "label",
        "content": "Reason for contact:",
        "color": "black",
        "newline": false
      },
      {
        "type": "label",
        "content": "Unable to view driver file in DM",
        "color": "black",
        "newline": true
      },
      {
        "type": "label",
        "content": "Internal action taken:",
        "color": "black",
        "newline": false
      },
      {
        "type": "label",
        "content": "Changed from",
        "color": "black",
        "newline": false
      },
      {
        "type": "editabletextfield",
        "content": "ABILENE, TX-PEPSI BEV CO.",
        "color": "purple",
        "newline": false
      },
      {
        "type": "label",
        "content": "to",
        "color": "black",
        "newline": false
      },
      {
        "type": "editabletextfield",
        "content": "ABILENE TX, TRANS-PEPSI BEV CO.",
        "color": "purple",
        "newline": true
      },
      {
        "type": "label",
        "content": "Solution provided: Updated driver file to",
        "color": "black",
        "newline": false
      },
      {
        "type": "editabletextfield",
        "content": "ABILENE TX, TRANS-PEPSI BEV CO.",
        "color": "purple",
        "newline": false
      }
    ];
    /*
    this.data.push({'type':'label','content':'Changed From','color':'black','newline':false});
    this.data.push({'type':'editabletextfield','content':'Mumbai','color':'purple','newline':false});
    this.data.push({'type':'label','content':'To','color':'black','newline':false});
    this.data.push({'type':'editabletextfield','content':'New Delhi','color':'purple','newline':true});

    this.data.push({'type':'label','content':'Changed From','color':'black','newline':false});
    this.data.push({'type':'editabletextfield','content':'Mumbai','color':'purple','newline':false});
    this.data.push({'type':'label','content':'To','color':'black','newline':false});
    this.data.push({'type':'editabletextfield','content':'New Delhi','color':'purple','newline':true});
    */
  }
}
