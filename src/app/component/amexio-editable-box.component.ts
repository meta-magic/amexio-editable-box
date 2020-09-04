import { OnInit, Component, Input } from "@angular/core";

@Component({
    selector: 'amexio-editable-box',
    templateUrl: './amexio-editable-box.component.html',
    styleUrls: ['./amexio-editable-box.component.css']
})
export class AmexioEditableBoxComponent implements OnInit {

    @Input() data: any[];

    constructor() {
        this.data = [];
    }

    ngOnInit() {

    }

    updateData(event: any, item:any){
        debugger;
         item.content = event.target.innerText;
        // item.content= item.content.replaceAll('&nbsp;',' ');
        // item.content= item.content.replaceAll('<br>','')
       // event.target.style.width = item.content.length + "ch";
       //event.target.style.width = ((item.content.length + 1) * 8) + 'px';
        debugger;
    }

}