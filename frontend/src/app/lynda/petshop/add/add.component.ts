import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['.././petshop.component.css']
})
export class AddComponent implements OnInit {
  showForm: boolean;

  @Output() addEvent = new EventEmitter();

  toggleAptDisplay() {
    console.log(this.showForm);
    this.showForm = !this.showForm;
  }

  handleAdd(formInfo: any) {
    const tempItem: object = {
      petName: formInfo.petName,
      ownerName: formInfo.ownerName,
      aptDate: formInfo.aptDate + ' ' + formInfo.aptTime,
      aptNotes: formInfo.aptNotes
    };
    this.addEvent.emit(tempItem);
    this.showForm = !this.showForm;
  }

  constructor() {
    this.showForm = true;

  }

  ngOnInit() {
  }

}
