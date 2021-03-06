import { TonyAdminComponent } from './projects/tonysecurity/tony-admin/tony-admin.component';
import { TonyAuditComponent } from './projects/tonysecurity/tony-audit/tony-audit.component';
import { TonySalesComponent } from './projects/tonysecurity/tony-sales/tony-sales.component';
import { TonyLoginComponent } from './projects/tonysecurity/login/tony-login.component';
import { TonySecurityComponent } from './projects/tonysecurity/tony-security.component';

import { BcbpcrmComponent } from './projects/bcbpcrm/bcbpcrm.component';

import { JobawookieUiComponent } from './projects/jobawookie/ui/jobawookie-ui.component';
import { ImageUploadComponent } from './busyqademo/image-upload/image-upload.component';

import { LoginGuardService } from './busyqademo/jobbusy/service/login-guard.service';
import { ExpCookieSessionComponent } from './services/expcookiesession/exp-cookie-session.component';
import { JobListComponent } from './busyqademo/jobbusy/job-list/job-list.component';
import { UserLoginComponent } from './busyqademo/jobbusy/user-login/user-login.component';
import { JobPostComponent } from './busyqademo/jobbusy/job-post/job-post.component';

import { ProductsComponent } from './lynda/products/products.component';
import { RedditComponent } from './lynda/reddit/reddit.component';
import { ArtistComponent } from './lynda/artist/artist.component';
import { PetshopComponent } from './lynda/petshop/petshop.component';

import { ObserversComponent } from './lynda/ng-sandbox/observers/observers.component';
import { SubjectsComponent } from './lynda/ng-sandbox/subjects/subjects.component';
import { OperatorsComponent } from './lynda/ng-sandbox/operators/operators.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { AppComponent } from './app.component';
import { AboutComponent } from './templates/about/about.component';


export const router: Routes = [
  { path: '', redirectTo: 'about', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'busyqa', children: [
    { path: 'upload', component: ImageUploadComponent}
]},
  { path: 'lynda', children: [
    { path: 'products', component: ProductsComponent},
    { path: 'reddit', component: RedditComponent},
    { path: 'artist' , component: ArtistComponent},
    { path: 'pet', component: PetshopComponent}
]},
  { path: 'sandbox', children: [
    { path: 'observers', component: ObserversComponent},
    { path: 'subjects', component: SubjectsComponent},
    { path: 'operators', component: OperatorsComponent}

]},
{ path: 'tony', children: [
  { path: 'login', component: TonyLoginComponent},
  { path: 'resource', component: TonySecurityComponent},
  { path: 'admin', component: TonyAdminComponent},
  { path: 'audit', component: TonyAuditComponent},
  { path: 'sales', component: TonySalesComponent}
]},
  { path: 'PostJob' , component: JobPostComponent, canActivate: [LoginGuardService]},
  { path: 'UserLoginComponent' , component: UserLoginComponent},
  { path: 'ListJob' , component: JobListComponent},
  { path: 'CheckLogin', component: ExpCookieSessionComponent},
  { path: 'jobpost', component: JobawookieUiComponent },
  { path: 'bcbpcrm', component: BcbpcrmComponent }

];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
