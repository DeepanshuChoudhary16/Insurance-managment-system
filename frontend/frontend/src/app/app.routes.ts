import { Routes } from '@angular/router';

import { LoginComponent }
from './components/login/login';

import { PolicyComponent }
from './components/policy/policy';

export const routes: Routes = [

  {
    path: '',
    component: LoginComponent
  },

  {
    path: 'policy',
    component: PolicyComponent
  }
];