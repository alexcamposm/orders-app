import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OrderCreateComponent } from './components/order-create/order-create.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'orders-app';

  constructor(private _dialog: MatDialog ) {}

  openOrdersList() {
    this._dialog.open(OrderCreateComponent)

  }
}
