import { Component, OnInit, ViewChild } from "@angular/core";
import { Chart } from "chart.js";
import * as HighCharts from "highcharts";
import { RetDetailListService } from "src/app/service/ret-detail-list.service";

@Component({
  selector: "app-summary",
  templateUrl: "./summary.page.html",
  styleUrls: ["./summary.page.scss"]
})
export class SummaryPage implements OnInit {
  user_id: number;
  constructor(private RetDetailListService: RetDetailListService) {}

  ngOnInit() {}

  ionViewDidEnter() {
    this.plotSimpleBarChart();
  }

  plotSimpleBarChart() {
    var income = [];
    var outcome = [];
    var categories = [];
    this.user_id = +localStorage.getItem("user_id");
    this.RetDetailListService.get_static_data_month(this.user_id).subscribe(result => {
      
    })
    this.RetDetailListService.get_static_data_yaer(this.user_id).subscribe(result => {
      
    })
    // this.RetDetailListService.get_income_static_data(this.user_id).subscribe(
    //   result => {
    //     console.log(result);
    //     console.log(month.length);
    //     for (let i = 0; i < month.length; i++) {
    //       result.forEach(element => {
    //         console.log(element.month_name);
    //         if (month[i] == element.month_name) {

    //         }
    //       });
    //       // if (month[i] == result[i].month_name) {
    //       //   income.push(result[i].amount);
    //       // } else {
    //       //   income.push(0);
    //       // }
    //     }
    //   }
    // );

    // this.RetDetailListService.get_outcome_static_data(this.user_id).subscribe(
    //   result => {
    //     console.log(result);
    //     console.log(month.length);
    //     for (let i = 0; i < month.length; i++) {
    //       if (month[i] == result[i].month_name) {
    //         outcome.push(result[i].amount);
    //       } else {
    //         outcome.push(0);
    //       }
    //     }
    //   }
    // );
    // for (let i = 0; i < month.length; i++) {
    //   if (i <= result.length - 1) {
    //     if (result[i].type_list == "รายรับ") {
    //       income.push(result[i].amount);
    //     } else {
    //       outcome.push(result[i].amount);
    //     }
    //   } else {
    //     income.push(0);
    //     outcome.push(0);
    //   }
    // }
    // for (let i = 0; i < result.length; i++) {
    //   month.forEach(element => {
    //     if (result[i].month_name == element) {

    //     }
    // });
    // console.log(month[i]);
    // console.log(result[i].month_name);
    // if (month[i] == result[i].month_name) {

    // }
    // income.push(result[0].amount);
    // }
    // for (let i = 0; i < month.length; i++) {
    //   // console.log(month[i]);
    //   // console.log(result[i].month_name);
    //   if (month[i]) {

    //   }
    //   outcome.push(result[0].amount);
    // }
    // console.log(income);
    // console.log(outcome);
    // result.forEach(element => {
    //   if (element.type_list == "รายรับ") {
    //     income.push(element.amount);
    //   } else {
    //     outcome.push(element.amount);
    //   }
    // });
    let myChart = HighCharts.chart("highcharts", {
      chart: {
        type: "bar"
      },
      title: {
        text: " "
      },
      xAxis: {
        categories: categories
      },
      yAxis: {
        title: {
          text: "จำนวนเงิน (บาท)"
        }
      },
      series: [
        {
          name: "รายรับ",
          type: undefined,
          data: income
        },
        {
          name: "รายจ่าย",
          type: undefined,
          data: outcome
        }
      ]
    });
  }
}
