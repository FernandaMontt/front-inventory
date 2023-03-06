import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CategoryService } from '../../shared/services/category.service';
import { ProductService } from '../../shared/services/product.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit{

  public productForm: FormGroup;
  estadoFormulario: string = "";
  constructor(private fb: FormBuilder, private categoryService: CategoryService,
              private productService: ProductService, private dialogRef: MatDialogRef<NewProductComponent>, 
              @Inject(MAT_DIALOG_DATA) public data: any){

                this.estadoFormulario = "Agregar";
                this.productForm = this.fb.group({
                  name: ['', Validators.required],
                  price: ['', Validators.required],
                  account: ['', Validators.required],
                  category: ['', Validators.required],
                  picture: ['', Validators.required]
                })

              }
  ngOnInit(): void {
      
  }

  onSave(){

  }

  onCancel(){
    this.dialogRef.close(3);
  }

  getCategories(){
    this.categoryService.getCategories()
    .subscribe( (data:any) =>{
      console.log("respuesta categories: ", data);
    }, (error:any) => {
      console.log("error: ", error);
    })
    
  }


}
