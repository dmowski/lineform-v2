import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { indexViewAppComponent }  from './views/index/component';
import { projectsViewAppComponent }  from './views/projects/component';
import { servicesViewAppComponent }  from './views/services/component';
import { newsViewAppComponent }  from './views/news/component';
import { aboutViewAppComponent }  from './views/about/component';
import { contactsViewAppComponent }  from './views/contacts/component';
import { oneProjectViewAppComponent }  from './views/oneProject/component';
//import { oneNewsViewAppComponent }  from './views/oneNews/component';

import { editProjectAppComponent } from './views/editProject/component';
//import { editNewsAppComponent } from './views/editNews/component';
import { adminViewAppComponent }  from './views/admin/component';

const appRoutes: Routes = [
	{
		path: '',
		component: indexViewAppComponent
	},
	{
		path: 'projects',
		component: projectsViewAppComponent,
	},
	{
		path: 'services',
		component: servicesViewAppComponent,
	},
	/*{
		path: 'news',
		component: newsViewAppComponent,
	},*/
	{
		path: 'about',
		component: aboutViewAppComponent,
	},
	{
		path: 'contacts',
		component: contactsViewAppComponent,
	},
	{
		path: 'project/:id',
		component: oneProjectViewAppComponent,
	},
	/*{
		path: 'news/:id',
		component: oneNewsViewAppComponent,
	},*/
	{
		path: 'admin',
		component: adminViewAppComponent,
	},
	{
		path: 'admin/project/:id',
		component: editProjectAppComponent,
	}/*,
	{
		path: 'admin/news/:id',
		component: editNewsAppComponent,
	},*/
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true });
