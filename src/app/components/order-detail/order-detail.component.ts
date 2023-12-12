import { Component, OnInit, Inject } from '@angular/core';
import { OrdersService } from 'src/app/services/orders.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent implements OnInit {
  orderId: number = 1;
  orderDetails: any;

  constructor(
    private ordService: OrdersService,
    @Inject(MAT_DIALOG_DATA) private data: any
  ){
    this.orderId = data.orderId;
  }

  ngOnInit(): void {
    this.ordService.getOrderbyId(this.orderId).subscribe({
      next: (val: any) => {
        this.orderDetails = val;
        console.log(this.orderDetails);
      },
      error: (err: any) => {
        console.error(err)
      }
    })
  }

}

