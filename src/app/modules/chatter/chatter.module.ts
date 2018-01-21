import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'app/modules/shared/shared.module';
import { ChatterComponent } from 'app/modules/chatter/chatter.component';
import { ChatService } from 'app/modules/chatter/chat.service';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {path: "chatter", component: ChatterComponent}
    ])
  ],
  declarations: [
    ChatterComponent
  ],
  providers: [
    ChatService
  ]
})
export class ChatterModule { }
