import { Injectable } from '@angular/core';

@Injectable()
export class BlogService {

  constructor() { }

  getBlogs(){
    return[
      { id: 1, title: 'Mr. Lorem',containt:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean ' },
      { id: 2, title: 'Mr. commodo',containt:'commodo ligula eget dolor. Aenean massa. Cum sociis natoque ' },
      { id: 3, title: 'Mr. penatibus',containt:'penatibus et magnis dis parturient montes, nascetur ridiculus mus.'},
      { id: 4, title: 'Mr. Donec',containt:'Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.'  },
      { id: 5, title: 'Mr. Nulla',containt:'Nulla consequat massa quis enim. Donec pede justo, fringilla vel,'},
      { id: 6, title: 'Mr. aliquet',containt:'aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,' },
      { id: 7, title: 'Mr. imperdiet',containt:'imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede' },
      { id: 8, title: 'Mr. mollis',containt:'mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum' },
      { id: 9, title: 'Mr. semper',containt:'semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,' },
      { id: 10, title: 'Mr. porttitor',containt:'porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante' }
    ]
  }
}
