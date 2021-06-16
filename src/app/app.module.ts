import { APP_INITIALIZER,NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IssuebookComponent } from './issuebook/issuebook.component';
import { IssuebookrecordComponent } from './issuebookrecord/issuebookrecord.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import{ReactiveFormsModule} from '@angular/forms'
import{NgxPaginationModule} from 'ngx-pagination';
import { OrderModule } from 'ngx-order-pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import{HttpClientModule} from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import{NgxMaterialTimepickerModule} from 'ngx-material-timepicker'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{LibraryService} from './library.service'



@NgModule({
  declarations: [
    AppComponent,
    IssuebookComponent,
    IssuebookrecordComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    OrderModule,
    Ng2SearchPipeModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    NgxMaterialTimepickerModule,
    BrowserAnimationsModule
  ],
  providers: [LibraryService,
    {
  provide :APP_INITIALIZER,
  useFactory:(libservice:LibraryService)=>
  () =>libservice.loadConfigurationData(),
  deps:[LibraryService],
  multi:true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
