import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// material modules
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
const materialModules = [
  MatCardModule,
  MatButtonModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    materialModules
  ],
  exports: [materialModules]
})
export class MaterialModule { }
