import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { StatusBar, Splashscreen } from 'ionic-native';

import { HelloIonicPage } from '../pages/search/hello-ionic';
import{ HomePage } from '../pages/home/home';
import{ShoppingCartPage} from '../pages/cart/shopping-cart';



@Component({
  templateUrl: 'app.html',
})
export class MyApp {
  
  @ViewChild(Nav) nav: Nav;

  // make HomePage the root (or first) page
  rootPage: any = HomePage;
  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public menu: MenuController
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Grocery Search', component: HelloIonicPage },
      { title: 'Home', component: HomePage },
      {title:'My Cart',component:ShoppingCartPage}

    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }

  
}
