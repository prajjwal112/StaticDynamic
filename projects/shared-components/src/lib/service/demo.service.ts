import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class DemoService implements InMemoryDbService {

  constructor() { }

  createDb(): any {
    return {
      orders:[
        {
          id: 1,
          orderNo: 'OR235TR3',
          details:[
            {
              id: 10,
              name: 'Seaman Cap',
              description: 'Lorem ipsum . Voluptatem excepturi magnam nostrum dolore recusandae',
              price: '$40'
            },
            {
              id: 11,
              name: 'T-shirt',
              description: 'amet consectetur adipisicing elit.Lorem ipsum dolor sit ',
              price: '$80'
            },
            {
              id: 12,
              name: 'Back Pack',
              description: 'Voluptatem excepturi harum rerum aliquam magnam nostrum dolore recusandae',
              price: '$30'
            }
          ]
        },
        {
          id: 2,
          orderNo: 'OR235690',
          details:[
            {id: 20,position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
            {id: 21,position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
            {id: 22,position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
            {id: 23,position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
            {id: 24,position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
            {id: 25,position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
            {id: 26,position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
            {id: 27,position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
            {id: 28,position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
            {id: 29,position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'}
          ]
        }
      ],
      products: [
        {
          id: 1,
          name: 'Seaman Cap',
          description: 'Lorem ipsum . Voluptatem excepturi magnam nostrum dolore recusandae',
          price: '$40'
        },
        {
          id: 2,
          name: 'T-shirt',
          description: 'amet consectetur adipisicing elit.Lorem ipsum dolor sit ',
          price: '$80'
        },
        {
          id: 3,
          name: 'Back Pack',
          description: 'Voluptatem excepturi harum rerum aliquam magnam nostrum dolore recusandae',
          price: '$30'
        }
      ],
      elements:[
        {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
        {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
        {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
        {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
        {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
        {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
        {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
        {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
        {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
        {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'}
      ]
    };
  }
  }

