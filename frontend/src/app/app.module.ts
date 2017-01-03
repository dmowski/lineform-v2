import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';

import { adminMenuAppComponent }  from './components/adminMenu/component';
import { footerAppComponent }  from './components/footer/component';
import { partnersAppComponent }  from './components/partners/component';

import { startPageAppComponent }  from './components/startPage/component';
import { mainMenuAppComponent }  from './components/mainMenu/component';
import { smallProjectAppComponent }  from './components/smallProject/component';
import { smallNewsAppComponent }  from './components/smallNews/component';

import { indexViewAppComponent }  from './views/index/component';
import { projectsViewAppComponent }  from './views/projects/component';
import { servicesViewAppComponent }  from './views/services/component';
import { newsViewAppComponent }  from './views/news/component';
import { aboutViewAppComponent }  from './views/about/component';
import { contactsViewAppComponent }  from './views/contacts/component';

import { oneProjectViewAppComponent }  from './views/oneProject/component';
import { oneAdminProjectViewAppComponent }  from './views/oneAdminProject/component';

import { oneNewsViewAppComponent }  from './views/oneNews/component';

import { adminViewAppComponent }  from './views/admin/component';
import { loginAppComponent }  from './components/login/component';
import { editProjectAppComponent } from './views/editProject/component';
import { editNewsAppComponent } from './views/editNews/component';

import { ReversePipe } from './filters/reverse';

import {routing} from './app.routing';
import { Http, Response, RequestOptions, Headers } from '@angular/http';


@NgModule({
	imports: [
		HttpModule,
		BrowserModule,
		FormsModule,
		routing
	],
	declarations: [
		AppComponent,
		ReversePipe,
		footerAppComponent,
		partnersAppComponent,
		indexViewAppComponent,
		mainMenuAppComponent,
		smallProjectAppComponent,
		startPageAppComponent,
		smallNewsAppComponent,
		adminMenuAppComponent,

		projectsViewAppComponent,
		servicesViewAppComponent,
		newsViewAppComponent,
		aboutViewAppComponent,
		contactsViewAppComponent,
		oneProjectViewAppComponent,
		oneNewsViewAppComponent,
		oneAdminProjectViewAppComponent,

		adminViewAppComponent,
		loginAppComponent,
		editProjectAppComponent,
		editNewsAppComponent
	],
	bootstrap: [
		AppComponent
	]
})

export class AppModule { }
