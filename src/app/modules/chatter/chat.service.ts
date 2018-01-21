import { Injectable } from "@angular/core";
import { IComment } from "./comment";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable'; 
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class ChatService {

  private _chatUrl: string = '././api/conversation/conversation.json';

    constructor(private _http : HttpClient){
    }
    
    getComments(): Observable<IComment[]>{
        return this._http.get<IComment[]>(this._chatUrl)
                .do(data => console.log('All: ' + JSON.stringify(data)))
                .catch(this.handleError);
    }

    private handleError(err: HttpErrorResponse) {
        console.log(err.message);
        return Observable.throw(err.message);
    }

}
