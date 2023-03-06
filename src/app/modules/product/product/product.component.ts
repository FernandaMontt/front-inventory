import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar, MatSnackBarRef, SimpleSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { ProductService } from '../../shared/services/product.service';
import { NewProductComponent } from '../new-product/new-product.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private productService: ProductService,
    public dialog: MatDialog, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getProduct();
  }

  displayedColumns: string[] = ['id','name','price', 'account','category','picture','actions'];
  dataSource = new MatTableDataSource<ProductElement>();

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  getProduct(){
    this.productService.getProduct()
      .subscribe((data:any) => {
        console.log("respuesta de productos : ", data);
        this.processProductResponse(data);
      }, (error:any) => {
        console.log("error en productos : ", error)
      })
  }

  processProductResponse(resp: any){
    const dateProduct: ProductElement[] = [];
    if(resp.metadata[0].code == "00"){
      let listProduct = resp.product.products;

      listProduct.forEach((element: ProductElement) => {
        element.category = element.category.name;
        element.picture = 'data:image/jpeg;base64,'+element.picture;
        dateProduct.push(element);
      });

      //set datasource
      this.dataSource = new MatTableDataSource<ProductElement>(dateProduct);
      this.dataSource.paginator = this.paginator;
    }
  }

  openProductDialog(){
    const dialogRef = this.dialog.open(NewProductComponent, {
      width:'500px'
    });

    dialogRef.afterClosed().subscribe((result:any) => {
      
      if(result==1){
        this.openSnackBar("Producto Agregado","Exito");
        this.getProduct();
      }else if(result==2){
        this.openSnackBar("Se produjo un error al guardar producto", "Error");
      }
    });
  }

  openSnackBar(message: string, action:string) : MatSnackBarRef<SimpleSnackBar>{
    return this.snackBar.open(message, action, {
      duration: 2000
    })
  }

}

export interface ProductElement {
  id: number;
  name: string;
  price: number;
  account: number;
  category: any;
  picture: any;
}
