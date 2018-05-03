import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { BlogsComponent } from './blogs/blogs.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroService } from './services/hero.service';
import { BlogService} from './services/blog.service';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule} from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    BlogsComponent,
    HeroDetailComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [HeroService,BlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
