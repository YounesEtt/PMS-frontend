import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { HomeComponent } from './components/home/home.component';
import { LoginGuard } from './Guards/login.guard';
import { authGuardGuard } from './Guards/auth-guard.guard';
import { AdminSectionComponent } from './components/admin-section/admin-section.component';
import { UsermanagmentComponent } from './components/usermanagment/usermanagment.component';
import { PlantmanagementComponent } from './components/plantmanagement/plantmanagement.component';
import { DepartementmanagementComponent } from './components/departementmanagement/departementmanagement.component';
import { CreatePlantComponent } from './components/create-plant/create-plant.component';
import { CreateDepartementComponent } from './components/create-departement/create-departement.component';
import { ConfigurationSectionComponent } from './components/configuration-section/configuration-section.component';
import { ConfigurationHomeComponent } from './components/configuration-home/configuration-home.component';
import { RequesterDashboardComponent } from './components/requester-dashboard/requester-dashboard.component';
import { ListOfRequesterComponent } from './components/list-of-requester/list-of-requester.component';
import { ManagementShipPointComponent } from './components/management-ship-point/management-ship-point.component';
import { FinanceDashboardComponent } from './components/finance-dashboard/finance-dashboard.component';
import { ListOfRequestFinanceComponent } from './components/list-of-request-finance/list-of-request-finance.component';
import { TradcomplianceDashboardComponent } from './components/tradcompliance-dashboard/tradcompliance-dashboard.component';
import { ListOfRequestTradcomplianceComponent } from './components/list-of-request-tradcompliance/list-of-request-tradcompliance.component';
import { WarehouseDashboardComponent } from './components/warehouse-dashboard/warehouse-dashboard.component';
import { ListOfRequestWarehouseComponent } from './components/list-of-request-warehouse/list-of-request-warehouse.component';

const routes: Routes = [

  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [LoginGuard, authGuardGuard],
    data: { expectedRoles: ['admin'] }
  },
  {
    path: 'admin-section',
    component: AdminSectionComponent,
    canActivate: [LoginGuard, authGuardGuard],
    data: { expectedRoles: ['admin'] }
  },
  {
    path: 'usermanagement',
    component: UsermanagmentComponent,
    canActivate: [LoginGuard, authGuardGuard],
    data: { expectedRoles: ['admin'] }
  },


  {
    path: 'plantmanagement',
    component: PlantmanagementComponent,
    canActivate: [LoginGuard, authGuardGuard],
    data: { expectedRoles: ['admin'] }
  },

  {
    path: 'departementmanagement',
    component: DepartementmanagementComponent,
    canActivate: [LoginGuard, authGuardGuard],
    data: { expectedRoles: ['admin'] }
  },
  {
    path: 'CreatePlant',
    component: CreatePlantComponent,
    canActivate: [LoginGuard, authGuardGuard],
    data: { expectedRoles: ['admin'] }
  },
  {
    path: 'CreateDepartement',
    component: CreateDepartementComponent,
    canActivate: [LoginGuard, authGuardGuard],
    data: { expectedRoles: ['admin'] }
  },
  {
    path: 'ConfigurationSection',
    component: ConfigurationSectionComponent,
    canActivate: [LoginGuard, authGuardGuard],
    data: { expectedRoles: ['admin'] }
  },
  {
    path: 'ShipPoint',
    component: ManagementShipPointComponent,
    canActivate: [LoginGuard, authGuardGuard],
    data: { expectedRoles: ['admin'] }
  },
  {
    path: 'configurationHome',
    component: ConfigurationHomeComponent,
    canActivate: [LoginGuard, authGuardGuard],
    data: { expectedRoles: ['admin'] }
  },
  {
    path: 'requesterdashboard',
    component: RequesterDashboardComponent,
    canActivate: [LoginGuard, authGuardGuard],
    data: { expectedRoles: ['requester'] }
  },
  {
    path: 'listofrequester',
    component: ListOfRequesterComponent,
    canActivate: [LoginGuard, authGuardGuard],
    data: { expectedRoles: ['requester'] }
  },
  {
    path: 'financedashboard',
    component: FinanceDashboardComponent,
    canActivate: [LoginGuard, authGuardGuard],
    data: { expectedRoles: ['finance'] }
  },
  {
    path: 'listofrequestfinance',
    component: ListOfRequestFinanceComponent,
    canActivate: [LoginGuard, authGuardGuard],
    data: { expectedRoles: ['finance'] }
  },
  {
    path: 'tradcompliancedashboard',
    component:TradcomplianceDashboardComponent,
    canActivate: [LoginGuard, authGuardGuard],
    data: { expectedRoles: ['tradcompliance'] }
  },
  {
    path: 'listofrequesttradcompliance',
    component: ListOfRequestTradcomplianceComponent,
    canActivate: [LoginGuard, authGuardGuard],
    data: { expectedRoles: ['tradcompliance'] }
  },
  {
    path: 'warehousedashboard',
    component:WarehouseDashboardComponent,
    canActivate: [LoginGuard, authGuardGuard],
    data: { expectedRoles: ['warehouse'] }
  },
  {
    path: 'listofrequestwarehouse',
    component: ListOfRequestWarehouseComponent,
    canActivate: [LoginGuard, authGuardGuard],
    data: { expectedRoles: ['warehouse'] }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
