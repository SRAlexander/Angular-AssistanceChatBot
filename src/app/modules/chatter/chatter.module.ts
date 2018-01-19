import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'app/modules/shared/shared.module';
import { ChatterComponent } from 'app/modules/chatter/chatter.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {path: "chatter", component: ChatterComponent}
    ])
  ],
  declarations: [
    ChatterComponent
  ]
})
export class ChatterModule { }
