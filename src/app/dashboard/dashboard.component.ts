import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import * as ctAxisTitle from 'chartist-plugin-axistitle/dist/chartist-plugin-axistitle.js';
//import { ctAxisTitle } from 'chartist-plugin-axistitle';
import * as ctThreshold from 'chartist-plugin-threshold/dist/chartist-plugin-threshold.js';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

declare var $:any;
interface Post {
  title: string;
  status: string;
}
@Component({
    selector: 'dashboard-cmp',
    moduleId: module.id,
    templateUrl: 'dashboard.component.html'
})

export class DashboardComponent implements OnInit{
  postsCol: AngularFirestoreCollection<Post>;
  posts: Observable<Post[]>;
    constructor(private afs: AngularFirestore) {}
    ngOnInit(){
      this.postsCol = this.afs.collection('stats');
    this.posts = this.postsCol.valueChanges();
      //  var dataSales = {
        /*  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
          series: [
             [10,12,15,12,14.5,16],
            [2,2.8,3,4,4.4,6]
          ]
        };

        var optionsSales = {
          low: 0,
          high: 20,
          showArea: true,
          height: "245px",
          axisX: {
            showGrid: false,
          },
          lineSmooth: Chartist.Interpolation.simple({
            divisor: 3
          }),
            createLabel :Chartist.createLabel(

            ),
          showLine: true,
          showPoint: false,
        };

        var responsiveSales: any[] = [
          ['screen and (max-width: 640px)', {
            axisX: {
              labelInterpolationFnc: function (value) {
                return value[0];
              }
            }
          }]
        ];

        new Chartist.Line('#chartHours', dataSales, optionsSales, responsiveSales);*/
        var chart = new Chartist.Line('.ct-chart', {
                    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
                        series: [ [10,12,15,12,14.5,16],
                        [2,2.8,3,4,4.4,6]]
                    }, {
                        chartPadding: {
                            top: 20,
                            right: 0,
                            bottom: 20,
                            left: 0
                        },
                        axisY: {
                            onlyInteger: true
                        },
                        plugins: [
                            ctAxisTitle({
                                axisX: {
                                    axisTitle: 'Month',
                                    axisClass: 'ct-axis-title',
                                    offset: {
                                        x: 0,
                                        y: 50
                                    },
                                    textAnchor: 'middle'
                                },
                                axisY: {
                                    axisTitle: 'Revenue (in mil)',
                                    axisClass: 'ct-axis-title',
                                    offset: {
                                        x: 0,
                                        y: -1
                                    },
                                    flipTitle: false
                                }
                            })
                        ]
                    });

        var data = {
          labels: ['App1', 'App2', 'App3', 'App4'],
          series: [
            [4,1.2,2,17]
          ]
        };

        var options = {
          seriesBarDistance: 10,
          reverseData: true,
          horizontalBars: true,
          axisY: {
            offset: 70
          },
          plugins: [
              ctAxisTitle({
                  axisX: {
                      axisTitle: 'Quality(Defects/100PDs)',
                      axisClass: 'ct-axis-title',
                      offset: {
                          x: 0,
                          y: 32
                      },
                      textAnchor: 'middle'
                  },
                  axisY: {
                      axisTitle: 'Apps/Projects',
                      axisClass: 'ct-axis-title',
                      offset: {
                          x: 0,
                          y: 0
                      },
                      flipTitle: false
                  }
              })
          ]
        };


        new Chartist.Bar('#chartActivity', data, options);

        var dataPreferences = {

            labels: ['Solution Design','Testing','Development','HR','Customer Requirements',],
            series: [1.2,2,2.5,4.8,7.2]
        };

        var optionsPreferences = {
          distributeSeries: true,
          plugins: [
            ctThreshold({
              threshold: 4

            }
          ),
              ctAxisTitle({
                  axisX: {
                      axisTitle: 'Risk Categories',
                      axisClass: 'ct-axis-title',
                      offset: {
                          x: 0,
                          y: 32
                      },
                      textAnchor: 'middle'
                  },
                  axisY: {
                      axisTitle: 'Risk Exposure',
                      axisClass: 'ct-axis-title',
                      offset: {
                          x: 0,
                          y: 0
                      },
                      flipTitle: false
                  }
              })

          ]

        };

        new Chartist.Bar('#chartPreferences', dataPreferences, optionsPreferences);

    }
}
