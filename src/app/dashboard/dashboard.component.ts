import { Component } from '@angular/core';
import { SidemenuComponent } from '../shared/sidemenu/sidemenu.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ RouterModule ,SidemenuComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export default class DashboardComponent {

}
