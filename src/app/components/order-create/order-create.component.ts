import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-order-create',
  templateUrl: './order-create.component.html',
  styleUrls: ['./order-create.component.scss']
})
export class OrderCreateComponent {
  empForm: FormGroup
  status: string[] = [
    "Recibido",
    "En preparación",
    "Enviado",
    "Entregado"
  ];
  payType: string[] = [
    "Crédito",
    "Débito",
    "Efectivo"
  ];

  constructor(
    private _fb: FormBuilder,
    private _empService: OrdersService,
    private _dialogRef: MatDialogRef<OrderCreateComponent>
  ) {

    this.empForm = this._fb.group({
      firstName: '',
      lastName: '',
      email: '',
      tel: '',
      state: '',
      productName: '',
      amount: '',
      price: '',
      payType: ''

    });
  }

  onFormSubmit() {
    if (this.empForm.valid) {
      this._empService.addOrder(this.empForm.value).subscribe({
        next: (val: any) => {
          alert('Orden guardada con exito')
          this._dialogRef.close(true);
        },
        error: (err: any) => {
          console.error(err)
        }
      })
    }
  }
}
