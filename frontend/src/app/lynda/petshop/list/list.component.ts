import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['.././petshop.component.css']
})


export class ListComponent {

  whichApt: object;

  @Input() aptList;
  @Input() totalApt;
  @Output() deleteEvt = new EventEmitter();
  @Output() updateEvt = new EventEmitter();

  handleDelete(theApt: object) {
    console.log(theApt);
    this.deleteEvt.emit(theApt);
  }

  handleUpdate(theApt: object, labelName: string, newValue: string) {
    this.whichApt = theApt;
    this.updateEvt.emit({
      // tslint:disable-next-line:object-literal-shorthand
      theApt: theApt,
      // tslint:disable-next-line:object-literal-shorthand
      labelName: labelName,
      // tslint:disable-next-line:object-literal-shorthand
      newValue: newValue
    });
  }

}


