import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

import { HeroDetailComponent } from './hero-detail.component';

@NgModule({
    declarations: [ HeroDetailComponent ],
    imports: [ CommonModule, FormsModule, MatButtonModule ],
    exports: [ HeroDetailComponent ],
    providers: []
})
export class HeroDetailModule {}