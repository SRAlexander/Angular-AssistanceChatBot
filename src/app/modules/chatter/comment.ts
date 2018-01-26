import { IWatsonResponse } from "app/modules/chatter/watson-response";

// export interface IComment {
//     id : number;
//     userId: number;
//     userName: string;
//     message: string;
//     localComment: boolean;
//     conversationId : string;
// }

export interface IComment {
    isCurrentUser: boolean;
    watsonResponse: IWatsonResponse
}
