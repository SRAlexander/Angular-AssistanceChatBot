import { Component, OnInit } from '@angular/core';
import { IComment } from 'app/modules/chatter/comment';
import { ChatService } from 'app/modules/chatter/chat.service';
import { IWatsonResponse } from 'app/modules/chatter/watson-response';


@Component({
  selector: 'app-chatter',
  templateUrl: './chatter.component.html',
  styleUrls: ['./chatter.component.css']
})
export class ChatterComponent implements OnInit {

  comments : IComment [] = [];
  newComment : IComment;

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
    this._chatService.init()
    .subscribe(
        comment => {
          this.comments = [];
          this.comments.push(
            {
              isCurrentUser : false,
              watsonResponse: comment
            })
        },
        error => this.errorMessage = <any>error
    );
  }

  postCommentClick() : void{
    // console.log("I'm here with input... " + this._chatInput);
    this.addComment(this._chatInput);
    this._chatInput = '';
    
    // Send off message for response
    this.postComment();

  }

  postComment(){
    this._chatService.postComment(this.newComment.watsonResponse)
    .subscribe(
      comment => {
        this.comments.push(
          {
            isCurrentUser : false,
            watsonResponse: comment
          })
      },
      error => this.errorMessage = <any>error
    );
  }
  
  addComment(message :string) : void {
    let lastComment = this.comments[this.comments.length-1];
    this.newComment = JSON.parse(JSON.stringify(lastComment));
    this.newComment.isCurrentUser = true;
    this.newComment.watsonResponse.input.text = message;
    this.comments.push(this.newComment);
    return;
  }

}
