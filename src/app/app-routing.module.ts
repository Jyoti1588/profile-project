import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { EductionComponent } from './eduction/eduction.component';
import { ExperienceComponent } from './experience/experience.component';
import { SkillsComponent } from './skills/skills.component';
import { CertificateComponent } from './certificate/certificate.component';
import { ContactComponent } from './contact/contact.component';
import { ArticleComponent } from './article/article.component';
import { WeatherComponent } from './weather/weather.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';




const routes: Routes = [
  { path: 'aboutme', component: AboutmeComponent, data: { label: 'AboutMe' } },
  { path: 'contact', component: ContactComponent, data: { label: 'Contact' } },
  { path: 'eductions', component: EductionComponent, data: { label: 'Eductions'} },
  { path: 'experience', component: ExperienceComponent, data: { label: 'Experience'} },
  { path: 'skills', component: SkillsComponent, data: { label: 'skills'} },
  { path: 'certificate', component: CertificateComponent, data: { label: 'Certificate'} },
  { path: 'article', component: ArticleComponent, data: { label: 'article'} },
  { path: 'weather', component: WeatherComponent, data: { label: 'weather'} },
  { path: '', redirectTo: 'aboutme', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
