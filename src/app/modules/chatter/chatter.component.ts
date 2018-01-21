import { Component, OnInit } from '@angular/core';
import { IComment } from 'app/modules/chatter/comment';
import { ChatService } from 'app/modules/chatter/chat.service';


@Component({
  selector: 'app-chatter',
  templateUrl: './chatter.component.html',
  styleUrls: ['./chatter.component.css']
})
export class ChatterComponent implements OnInit {

  comments : IComment [] = [];
  errorMessage: string;

  _chatInput: string;
  get chatInput(): string {
      return this._chatInput
  }
  set chatInput(value:string){
      this._chatInput = value;
  }

  constructor(private _chatService : ChatService) { }

  ngOnInit() : void {
    this._chatService.getComments()
    .subscribe(
        comments => {
                this.comments= comments
            },
        error => this.errorMessage = <any>error);
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
