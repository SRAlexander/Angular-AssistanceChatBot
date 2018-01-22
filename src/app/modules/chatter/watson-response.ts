export interface IWatsonResponse {
  intents: IWatsonIntent[],
  entities: IWatsonEntity[],
  input: IWatsonInput,
  output: IWatsonOutput
  context: IWatsonContext
}

export interface IWatsonIntent {
    intent: string,
    confidence: number 
}

export interface IWatsonEntity{
    entity: string,
    location: any [],
    value: string,
    confidence: number 
}

export interface IWatsonInput{
    text: string
}

export interface IWatsonOutput {
    text: string [],
     nodes_visited: string [],
     log_messages: string [] 
}

export interface IWatsonContext {
    conversation_id: string,
    system: IWatsonSystem
}

export interface IWatsonSystem {
    dialog_stack: any [],
    dialog_turn_counter: number,
    dialog_request_counter: number,
    _node_output_map: any [] 
}
