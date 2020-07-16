import { CarouselModule } from 'ngx-bootstrap/carousel';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { EductionComponent } from './eduction/eduction.component';
import { ExperienceComponent } from './experience/experience.component';
import { SkillsComponent } from './skills/skills.component';
import { CertificateComponent } from './certificate/certificate.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from "./data.service";
import { StoreModule } from '@ngrx/store';

import { FlexLayoutModule } from '@angular/flex-layout';
import { CustomMaterialModule } from './shared/custom.material.module';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { CarouselComponent } from './common/carousel/carousel.component';
import { ArticleComponent } from './article/article.component';
import { WeatherComponent } from './weather/weather.component';





@NgModule({
  declarations: [
    AppComponent,
    AboutmeComponent,
    EductionComponent,
    ExperienceComponent,
    SkillsComponent,
    CertificateComponent,
    ContactComponent,
    PageNotFoundComponent,
    HeaderComponent,
    FooterComponent,
    CarouselComponent,
    ArticleComponent,
    WeatherComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    FlexLayoutModule,
    CarouselModule.forRoot(),
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot({  }),
   
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
