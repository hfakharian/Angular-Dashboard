import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MasterLayoutPanelComponent } from './Containers';
import { ElementsModule } from './Elements/Dashboard/elements.module';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { SigninComponent } from './Components/Public/signin/signin.component';
import { SignupComponent } from './Components/Public/signup/signup.component';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeaderInterceptor } from './Services/Interceptor/HeaderInterceptor';
import { ResponseInterceptor } from './Services/Interceptor/ResponseInterceptor';

@NgModule({
  declarations: [
    AppComponent,
    MasterLayoutPanelComponent,
    SigninComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ElementsModule
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy,
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: HeaderInterceptor,
    multi: true
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: ResponseInterceptor,
    multi: true
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
