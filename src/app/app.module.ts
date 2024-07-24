import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { AppMfModule } from './mf/main/app-mf.module';
import { PrimengModule } from './core/modules/primeng.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalNotasComponent } from './main/shared/components/modal-notas/modal-notas.component';
import { FindDescriptionPipe } from './shared/pipes/find-description.pipe';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ModalNotasComponent,
    FindDescriptionPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PrimengModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [AppMfModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
