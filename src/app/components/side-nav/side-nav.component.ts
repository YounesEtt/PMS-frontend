import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.css'
})
export class SideNavComponent {
  items: MenuItem[];

  constructor() {
    this.items = [
      {
        label: 'Dashboard',
        icon: 'pi pi-fw pi-chart-bar',
        routerLink: '/admin-section'
      },
      {
        label: 'User Management',
        icon: 'pi pi-fw pi-user',
        routerLink: '/usermanagement'
      },
      {
        label: 'Plant Management',
        icon: 'pi pi-fw pi-building',
        routerLink: '/plantmanagement'
      },
      {
        label: 'Department Management',
        icon: 'pi pi-fw pi-sitemap',
        routerLink: '/departementmanagement'
      },
      {
        label: 'Configuration Section',
        icon: 'pi pi-fw pi-cog',
        routerLink: '/ConfigurationSection'
      },
      {
        label: 'Shipping Point',
        icon: 'pi pi-fw pi-truck',
        routerLink: '/ShipPoint'
      }
    ];
  }
}
