import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TemplateBinding } from '@angular/compiler';

@Component({
  selector: 'app-listjob',
  templateUrl: './list-job.component.html',
  styleUrls: ['.././jobawookie-ui.component.css']
})
export class ListJobComponent {

  whichPost: object;

  @Input() jobList: any;
  @Input() totalPost: any;
  @Output() deleteEvt = new EventEmitter();
  @Output() updateEvt = new EventEmitter();
  @Output() testEvt = new EventEmitter();


  handleDelete(thePost: object) {
    this.whichPost = thePost;
    this.deleteEvt.emit(thePost);
  }

  handleUpdate(thePost: object, labelName: string, newValue: string) {
    this.whichPost = thePost;
    this.updateEvt.emit({
      // tslint:disable-next-line:object-literal-shorthand
      thePost: thePost,
      // tslint:disable-next-line:object-literal-shorthand
      labelName: labelName,
      // tslint:disable-next-line:object-literal-shorthand
      newValue: newValue
    });
  }


}
