import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './static/header/header.component';
import { ContentComponent } from './content/content.component';
import { DetailComponent } from './home/detail/detail.component';
import { ZipComponent } from './content/zip/zip.component';
import { ls } from './services/jsdata.service';
import { HttpClientModule } from '@angular/common/http';
import { IntervalComponent } from './content/interval/interval.component';
import { CombinelatestComponent } from './content/combinelatest/combinelatest.component';
import { FromeventComponent } from './content/fromevent/fromevent.component';
import { RangeComponent } from './content/range/range.component';
import { GroupbyComponent } from './content/groupby/groupby.component';
import { FromComponent } from './content/from/from.component';
import { DebouncetimeComponent } from './content/debouncetime/debouncetime.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './static/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    HomeComponent,
    DetailComponent,
    DebouncetimeComponent,
    ZipComponent,
    IntervalComponent,
    CombinelatestComponent,
    FromeventComponent,
    RangeComponent,
    GroupbyComponent,
    FromComponent,
    SidebarComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgxDatatableModule, HttpClientModule],
  providers: [ls, HomeComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}