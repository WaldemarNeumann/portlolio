import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { DataProtectionComponent } from './data-protection/data-protection.component';



const routes: Routes = [
  { path: '', component: ProjectsComponent},
  { path: 'impressum', component: ImpressumComponent},
  { path: 'data-protection', component: DataProtectionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
