import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {Routes, RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';

//Animations
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTabsModule, MatButtonToggleModule,   MatCheckboxModule, MatDatepickerModule,  MatDialogModule, MatSlideToggleModule} from '@angular/material';
import {MatStepperModule} from '@angular/material/stepper';


//páginas-componentes
import { FormFilterMGUComponent } from './tutoring/form-filter-mgu/form-filter-mgu.component';
import { FooterComponent } from './footer/footer.component';
import { Formfilter1Component } from './tutoring/form-filter-mgu/formfilter1/formfilter1.component';
import { HomeComponent } from './home/home.component';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { ModaldialogComponent } from './modaldialog/modaldialog.component';
import { TutoringComponent } from './tutoring/tutoring.component';
import { CoursesComponent } from './courses/courses.component';
import { ProgramsComponent } from './programs/programs.component';


const appRoutes: Routes = [
  {path:'', component: HomeComponent},
  {path:'FormFilterMGUComponent', component: FormFilterMGUComponent},

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderNavComponent,
    FooterComponent,
    FormFilterMGUComponent,
    HomeComponent,
    Formfilter1Component,
    ModaldialogComponent,
    TutoringComponent,
    CoursesComponent,
    ProgramsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatCheckboxModule,
    MatDialogModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatDialogModule,
    MatSlideToggleModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
