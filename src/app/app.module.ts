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
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './pages/home/home.component';
import { PullRequestComponent } from './pages/pull-request/pull-request.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoComponent,
    IconComponent,
    FooterCardComponent,
    ProfileCardComponent,
    CardComponent,
    HomeComponent,
    PullRequestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
