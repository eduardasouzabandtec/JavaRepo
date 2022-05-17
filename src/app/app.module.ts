import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { LogoComponent } from './shared/components/logo/logo.component';
import { IconComponent } from './shared/components/icon/icon.component';
import { FooterCardComponent } from './shared/components/footer-card/footer-card.component';
import { ProfileCardComponent } from './shared/components/profile-card/profile-card.component';
import { CardComponent } from './shared/components/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoComponent,
    IconComponent,
    FooterCardComponent,
    ProfileCardComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
