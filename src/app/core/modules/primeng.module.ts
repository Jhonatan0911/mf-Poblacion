import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { ToastModule } from 'primeng/toast';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { TableModule } from 'primeng/table';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputNumberModule } from 'primeng/inputnumber';
import { SliderModule } from 'primeng/slider';
import { RadioButtonModule } from 'primeng/radiobutton';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { MultiSelectModule } from 'primeng/multiselect';
import { SelectButtonModule } from 'primeng/selectbutton';
import { AccordionModule } from 'primeng/accordion';
import { TimelineModule } from 'primeng/timeline';
import { DialogModule } from 'primeng/dialog';
import { TabViewModule } from 'primeng/tabview';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { CheckboxModule } from 'primeng/checkbox';
import { StepsModule } from 'primeng/steps';
import { AvatarModule } from 'primeng/avatar';

// Services
import { ConfirmationService, MessageService } from 'primeng/api';

@NgModule({
  declarations: [],
  providers: [ MessageService, ConfirmationService ],
  imports: [
    CommonModule,
    ToastModule,
    CardModule,
    InputTextModule,
    DropdownModule,
    CalendarModule,
    TableModule,
    InputTextareaModule,
    InputNumberModule,
    SliderModule,
    RadioButtonModule,
    AutoCompleteModule,
    MultiSelectModule,
    SelectButtonModule,
    AccordionModule,
    TimelineModule,
    DialogModule,
    TabViewModule,
    ConfirmDialogModule,
    CheckboxModule,
    StepsModule,
    AvatarModule
  ],
  exports:[
    ToastModule,
    CardModule,
    InputTextModule,
    DropdownModule,
    CalendarModule,
    TableModule,
    InputTextareaModule,
    InputNumberModule,
    SliderModule,
    RadioButtonModule,
    AutoCompleteModule,
    MultiSelectModule,
    SelectButtonModule,
    AccordionModule,
    TimelineModule,
    DialogModule,
    TabViewModule,
    ConfirmDialogModule,
    CheckboxModule,
    StepsModule,
    AvatarModule
  ]
})
export class PrimengModule { }

