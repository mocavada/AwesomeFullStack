import { TonyAdminComponent } from './projects/tonysecurity/tony-admin/tony-admin.component';
import { TonyAuditComponent } from './projects/tonysecurity/tony-audit/tony-audit.component';
import { TonySalesComponent } from './projects/tonysecurity/tony-sales/tony-sales.component';
import { TonySecurityComponent } from './projects/tonysecurity/tony-security.component';
import { TonyLoginComponent } from './projects/tonysecurity/login/tony-login.component';
import { BcbpDataComponent } from './projects/bcbpcrm/bcbp-data/bcbp-data.component';
import { BcbpcrmComponent } from './projects/bcbpcrm/bcbpcrm.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injectable } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpInterceptor, HttpRequest, HttpHandler, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AutoSizeInputModule } from 'ngx-autosize-input';
import { routes } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './templates/header/header.component';
import { AboutComponent } from './templates/about/about.component';
import { ProductsComponent } from './lynda/products/products.component';
import { RedditComponent } from './lynda/reddit/reddit.component';

import { ArtistComponent } from './lynda/artist/artist.component';
import { ArtistItemComponent } from './lynda/artist/artist-item/artist-item.component';
import { ArtistDetailsComponent } from './lynda/artist/artist-details/artist-details.component';

import { PetshopComponent } from './lynda/petshop/petshop.component';
import { AddComponent } from './lynda/petshop/add/add.component';
import { ListComponent } from './lynda/petshop/list/list.component';
import { SearchComponent } from './lynda/petshop/search/search.component';


import { SubjectsComponent } from './lynda/ng-sandbox/subjects/subjects.component';
import { OperatorsComponent } from './lynda/ng-sandbox/operators/operators.component';
import { ObserversComponent } from './lynda/ng-sandbox/observers/observers.component';
import { SearchArtistPipe} from './services/custompipe/search-artist.pipe';


import { JobListComponent } from './busyqademo/jobbusy/job-list/job-list.component';
import { JobPostComponent } from './busyqademo/jobbusy/job-post/job-post.component';
import { UserLoginComponent } from './busyqademo/jobbusy/user-login/user-login.component';
import { ExpCookieSessionComponent } from './services/expcookiesession/exp-cookie-session.component';

import { UploadListComponent } from './services/imageuploader/upload-list/upload-list.component';
import { UploadFormComponent } from './services/imageuploader/upload-form/upload-form.component';
import { UploadDetailsComponent } from './services/imageuploader/upload-details/upload-details.component';
import { ImageUploadComponent } from './busyqademo/image-upload/image-upload.component';


import { SearchJobComponent } from './projects/jobawookie/ui/search/search-job.component';
import { AddJobComponent } from './projects/jobawookie/ui/add/add-job.component';
import { ListJobComponent } from './projects/jobawookie/ui/list/list-job.component';
import { JobawookieUiComponent } from './projects/jobawookie/ui/jobawookie-ui.component';


// @Injectable()
// export class XhrInterceptor implements HttpInterceptor {

//   intercept(req: HttpRequest<any>, next: HttpHandler) {
//     const xhr = req.clone({
//       headers: req.headers.set('X-Requested-With', 'XMLHttpRequest')
//     });
//     return next.handle(xhr);
//   }
// }


@NgModule({
   declarations: [
      AppComponent,
      HeaderComponent,
      AboutComponent,
      ProductsComponent,
      RedditComponent,
      ArtistComponent,
      ArtistItemComponent,
      ArtistDetailsComponent,
      PetshopComponent,
      AddComponent,
      ListComponent,
      SearchComponent,
      SubjectsComponent,
      OperatorsComponent,
      ObserversComponent,
      SearchArtistPipe,
      JobListComponent,
      JobPostComponent,
      UserLoginComponent,
      ExpCookieSessionComponent,
      UploadListComponent,
      UploadFormComponent,
      UploadDetailsComponent,
      ImageUploadComponent,
      SearchJobComponent,
      AddJobComponent,
      ListJobComponent,
      JobawookieUiComponent,
      BcbpcrmComponent,
      BcbpDataComponent,
      TonySecurityComponent,
      TonyLoginComponent,
      TonyAdminComponent,
      TonyAuditComponent,
      TonySalesComponent
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule,
      FontAwesomeModule,
      AutoSizeInputModule,
      routes
   ],
   providers: [],
  //  providers: [TonyLoginService, { provide: HTTP_INTERCEPTORS, useClass: XhrInterceptor, multi: true }],
   bootstrap: [AppComponent]
})
export class AppModule { }
