import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'json-formatter';
  data = {
    "firstname": "mark",
    "lastname": "webber",
    "technology": "java",
    "age": "60",
    "livedin": [
      {
        "startdate": "10-jan-2012",
        "enddate": "10-jan-2013",
        "address": "address 1, city 1, state 1, country 1, zipcode 1"
      },
      {
        "startdate": "10-jan-2013",
        "enddate": "10-jan-2014",
        "address": "address 2, city 2, state 2, country 2, zipcode 2"
      },
      {
        "startdate": "10-jan-2014",
        "enddate": "10-jan-2015",
        "address": "address 3, city 3, state 3, country 3, zipcode 3"
      },
      {
        "startdate": "10-jan-2015",
        "enddate": "10-jan-2016",
        "address": "address 4, city 4, state 4, country 4, zipcode 4"
      },
      {
        "startdate": "10-jan-2016",
        "enddate": "10-jan-2017",
        "address": "address 5, city 5, state 5, country 5, zipcode 5"
      }
    ]
  }
}
