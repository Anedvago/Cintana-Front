import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  NgxChartsModule,
  Color,
  ScaleType,
  LegendPosition,
} from "@swimlane/ngx-charts";

@Component({
  selector: "app-vertical-bar",
  standalone: true,
  imports: [CommonModule, NgxChartsModule],
  templateUrl: "./vertical-bar.component.html",
  styleUrls: ["./vertical-bar.component.css"],
})
export class VerticalBarComponent {
  public monthsValue: { name: string; value: number }[] = [
    { name: "Mar", value: 50000 },
    { name: "Abr", value: 60000 },
    { name: "May", value: 75000 },
    { name: "Jun", value: 90000 },
    { name: "Jul", value: 85000 },
    { name: "Ago", value: 100000 },
    { name: "Sep", value: 50000 },
    { name: "Oct", value: 60000 },
    { name: "Nov", value: 75000 },
  ];

  public view: [number, number] = [470, 130];

  /*   public view: [number, number] = [400, 170]; */
  // options
  public gradient = false;
  public showXAxis = true;
  /*  public showYAxis = true;
  public gradient = false;
  public showLegend = true;
  public showXAxisLabel = true;
  public xAxisLabel = "Country";
  public showYAxisLabel = true;
  public yAxisLabel = "Population";
  public legendPosition: LegendPosition = LegendPosition.Below; */

  public colorScheme: string | Color = {
    name: "Color1",
    selectable: true,
    group: ScaleType.Linear,
    domain: ["#3056D3", "#61BD5F", "#BB4141", "#F19221"],
  };
}
