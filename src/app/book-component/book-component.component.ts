import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { ApolloserviceService } from '../apolloservice.service';

@Component({
  selector: 'app-book-component',
  templateUrl: './book-component.component.html',
  styleUrls: ['./book-component.component.css']
})
export class BookComponentComponent implements OnInit {

  public books :any;
  public authorName : String;
  public authorAge : Number;
  public authorAddress : String;

  constructor(private apolloService : ApolloserviceService) {

  }


  ngOnInit(): void {
    console.log('aloo');
    this.apolloService.getBooks().subscribe(
      data=>{
        console.log(data.data["books"]);
      },
      err=>{
        console.log(err);
      }
    );
  }


  addAuthor(){
    console.log(name);
    this.apolloService.addAuthor(this.authorName,this.authorAge,this.authorAddress).subscribe(
      data=>{
        console.log(data.data );
      },
      err=>{
        console.log(err);
      }
    )
  }
}
