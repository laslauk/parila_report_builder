import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'; 
import { ReportBuilderRoutingModule } from './report-builder-routing.module';
import { HomeComponent } from './home/home.component';
import { KeysPipe } from 'src/app/report-builder/home/pipes/keys.pipe';
import { LabelizePipe } from 'src/app/report-builder/home/pipes/labelize.pipe';
import { ReportViewComponent } from './report-view/report-view.component';
import { ReportbuilderService } from 'src/app/services/reportbuilder.service';
import { ClipboardModule } from 'ngx-clipboard';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ReportBuilderRoutingModule,
    ClipboardModule
  ],
  declarations: [HomeComponent,KeysPipe, LabelizePipe, ReportViewComponent],
  providers: [
    ReportbuilderService
  ]
})
export class ReportBuilderModule { }
