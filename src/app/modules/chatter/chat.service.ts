import { Injectable } from "@angular/core";
import { IComment } from "./comment";
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable'; 
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import { IWatsonResponse } from "app/modules/chatter/watson-response";

@Injectable()
export class ChatService {

  //private _chatUrl : string = 'http://51.140.158.132/init';  
  private _chatUrlSubmit = 'http://51.140.158.132/submit'
private _chatUrl: string = '././api/conversation/conversation.json'; //<- Local data load for Get (/init)

    constructor(private _http : HttpClient){
    }
    
    init(): Observable<IWatsonResponse>{
        return this._http.get<IWatsonResponse>(this._chatUrl + "")
            .do(data => 
                {
                    console.log('Get: ' + JSON.stringify(data))
                })
            .catch(this.handleError);
    }

    postComment(comment) : Observable<IWatsonResponse>{

        let body = JSON.stringify(comment);
        let headers = new HttpHeaders({'Content-Type': 'application/json'});
        let options = {headers:headers};

        return this._http.post<IWatsonResponse>(this._chatUrlSubmit, body, options)
            .do(data => 
                console.log("Post" + JSON.stringify(data))
            )
            .catch(this.handleError);

    }

    private handleError(err: HttpErrorResponse) {
        console.log(err.message);
        return Observable.throw(err.message);
    }

}
