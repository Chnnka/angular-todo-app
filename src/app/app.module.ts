import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WishModule } from './wish/wish.module';
import { ContactModule } from "./contact/contact.module";


@NgModule({
    declarations: [
        AppComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        WishModule,
        ContactModule
    ]
})
export class AppModule { }
