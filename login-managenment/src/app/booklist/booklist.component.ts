import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { BookModel } from './booklist.model';


@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {

formValue!:FormGroup;
bookmodelobj:BookModel = new BookModel();
bookData !:any;
showAdd!:boolean;
showUpdate!:boolean;
emptyState:boolean = false;
constructor(private formbuilder:FormBuilder, private auth:AuthService){

}
msg = "bool list is empty"


ngOnInit(): void {
  this.formValue =this.formbuilder.group({
    book_id: [''],
    title: [''],
    author: [''],
    published_date: [''],
    price: [''],
  })
  this.getAllbook();
}
clickAddBook(){
  this.formValue.reset();
  this.showAdd = true;
  this.showUpdate =false;
}
postBookDetails(){
  this.bookmodelobj.book_id = this.formValue.value.book_id;
  this.bookmodelobj.title = this.formValue.value.title;
  this.bookmodelobj.author = this.formValue.value.author;
  this.bookmodelobj.published_date = this.formValue.value.published_date;
  this.bookmodelobj.price = this.formValue.value.price;

  this.auth.postBook(this.bookmodelobj)
  .subscribe(res=>{
    console.log(res);
      alert("book added succrssfully");
      let ref = document.getElementById('cancel')
      ref?.click();
     this.formValue.reset();
      +this.getAllbook();
  })
}
 getAllbook(){
  this.auth.getBooklist().subscribe(res => {
     this.bookData = res;
     console.log(this.bookData, "this is bookdata")
     if (this.bookData?.length==0){
      this.emptyState = true;
     }
     else{
      this.emptyState = false;
     }

  })
 }
 deletebook(row:any){
  this.auth.deletebook(row.id)
  .subscribe(res=>{
    alert("book deleted")
    this.getAllbook();
  })
 }
 onEdit(row: any){
  this.showAdd = false;
  this.showUpdate = true;
  this.bookmodelobj.id = row.id;
  this.formValue.controls['book_id'].setValue(row.book_id);
  this.formValue.controls['title'].setValue(row.title);
  this.formValue.controls['author'].setValue(row.author);
  this.formValue.controls['published_date'].setValue(row.published_date);
  this.formValue.controls['price'].setValue(row.price);
 }
 
 updateBookDetails(){
  this.bookmodelobj.book_id = this.formValue.value.book_id;
  this.bookmodelobj.title = this.formValue.value.title;
  this.bookmodelobj.author = this.formValue.value.author;
  this.bookmodelobj.published_date = this.formValue.value.published_date;
  this.bookmodelobj.price = this.formValue.value.price;

  this.auth.updateBook(this.bookmodelobj,this.bookmodelobj.id)
  .subscribe(res=>{
    alert("update suceessfully");
    let ref = document.getElementById('cancel')
    ref?.click();
    this.formValue.reset();
    this.getAllbook();
  })
 }
 }



