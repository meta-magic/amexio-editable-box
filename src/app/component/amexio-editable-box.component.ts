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
        item.content = event.target.innerHTML;
        item.content= item.content.replaceAll('&nbsp;',' ');
        debugger;
    }

}