import { NgModule } from "@angular/core";
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRadioModule } from '@angular/material/radio';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';



@ NgModule({
    exports:[
        
        MatInputModule,
        MatListModule,
        MatProgressBarModule,
        MatMenuModule,
        MatPaginatorModule,
        MatRadioModule,
        MatTableModule,
        MatToolbarModule,
        MatCardModule,
        MatButtonToggleModule,
        MatButtonModule,
        MatDialogModule,
        MatFormFieldModule,
        MatIconModule
        

    ]
})
export class MaterialModule{

}