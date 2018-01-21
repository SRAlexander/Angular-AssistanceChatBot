import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { Component } from '@angular/core/src/metadata/directives';
import { WelcomeComponent } from 'app/modules/home/welcome.component';
import { ChatterModule } from 'app/modules/chatter/chatter.module';
import { SharedModule } from 'app/modules/shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    // SharedModule
  ],
  imports: [
    ChatterModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
        { path:'welcome', component : WelcomeComponent},
        { path: '', redirectTo: 'welcome', pathMatch: 'full'},
        { path: '**', redirectTo: 'welcome', pathMatch: 'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
