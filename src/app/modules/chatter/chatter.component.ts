import { Component, OnInit } from '@angular/core';
import { IComment } from 'app/modules/chatter/comment';


@Component({
  selector: 'app-chatter',
  templateUrl: './chatter.component.html',
  styleUrls: ['./chatter.component.css']
})
export class ChatterComponent implements OnInit {

  comments : IComment [] = [{
    id : 0,
      userId: -1,
      userName: "Helper",
      message: 'Hi, how can I help you today?',
      localComment: false
  },
  {
    id : 1,
      userId: -1,
      userName: "Mr User",
      message: "You can't, bye!",
      localComment: true
  }];

  _chatInput: string;
  get chatInput(): string {
      return this._chatInput
  }
  set chatInput(value:string){
      this._chatInput = value;
  }

  constructor() { }

  ngOnInit() {

  }

  postCommentClick() : void{
    console.log("I'm here with input... " + this._chatInput);
    this.addComment(this._chatInput);
    this._chatInput = '';
    // Send off message for response

  }

  addComment(message :string) : void {
    this.comments.push({
      id : 0,
      userId: 0,
      userName: "Mr User",
      message: message,
      localComment: true
    });
    return;
  }

}
