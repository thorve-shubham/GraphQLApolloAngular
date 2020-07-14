import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

const Get_Books = gql`
query {
  books {
    name
    genre
    author{
      name
      address
    }
  }
}
`;



@Injectable({
  providedIn: 'root'
})
export class ApolloserviceService {

  

  constructor(private apollo : Apollo) { 
    console.log('service started');
  }

  getBooks(){
    console.log('called');
    return this.apollo.watchQuery({
      query : Get_Books
    }).valueChanges
  }

  addAuthor(name,age,address){
    console.log(age);
    console.log(name);
    console.log(address);
    return this.apollo.mutate({
      mutation : gql`
      mutation addAuthor($name: String!,$age : Int!,$address : String!){
        addAuthor(name : $name, age : $age, address : $address){
          name
          address
        }
      }
      `,
      variables :{
        name : name,
        age : age,
        address : address
      }
    })
  }
}
