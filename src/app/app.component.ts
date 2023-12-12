import { Component, OnInit, ViewChild} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OrderCreateComponent } from './components/order-create/order-create.component';
import { OrdersService } from './services/orders.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  displayedColumns: string[] = ['id', 'state', 'firstName', 'lastName', 'productName', 'action',];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _dialog: MatDialog, private _ordSevice: OrdersService) {}

  ngOnInit(): void {
    this.getOrderList();
}

  openOrdersList() {
    const dialogRef = this._dialog.open(OrderCreateComponent)
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getOrderList();
        }
      }
    })

  }

  getOrderList() {
    this._ordSevice.getOrderList().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteEmployee(id: number) {
    this._ordSevice.deleteOrder(id).subscribe({
      next: (res) => {
        alert('orden eliminada');
        this.getOrderList();
      },
      error: console.log,
    })
  }
}
