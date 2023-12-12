import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

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

  constructor(private _fb: FormBuilder) {
    this.empForm = this._fb.group({
      firstName: '',
      lastName: '',
      email: '',
      tel: '',
      state: '',
      productName: '',
      amount: '',
      price:  '',
      payType: ''

    });
  }

  onFormSubmit() {
    if(this.empForm.valid) {
      console.log(this.empForm.value);
    }
  }
}
