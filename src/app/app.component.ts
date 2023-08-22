import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { SidebarComponent } from './sidebar/sidebar.component';
// import { ShepherdService } from 'angular-shepherd/public_api';
// import { ShepherdService } from './shepherd.service';
import { ShepherdService } from 'angular-shepherd';
// import { steps as defaultSteps, defaultStepOptions } from './data';

const tour = {
  defaultStepOptions: {
    scrollTo: true,
    cancelIcon: {
      enabled: true
    },
    canClickTarget: true,
    popperOptions: {
      modifiers: [
        {
          name: "offset",
          options: {
            offset: [0, 20]
          }
        }
      ]
    },
    modalOverlayOpeningPadding: 8,
    modalOverlayOpeningRadius: 4
  },
  steps: [
    {
      id: "btn-1",
      attachTo: {
        element: ".title",
        on: "bottom"
      },
      buttons: [
        {
          classes: "cancel-button",
          text: "Exit",
          type: "cancel"
        },
        {
          classes: "shepherd-button-primary",
          text: "Back",
          type: "back"
        },
        {
          classes: "shepherd-button-primary",
          text: "Next",
          type: "next"
        }
      ],
      classes: "",
      highlightClass: "highlight",
      title: "Step 1",
      text: "This is content"
    },
    {
      id: "btn-2",
      attachTo: {
        element: ".step-2",
        on: "bottom"
      },
      buttons: [
        {
          classes: "mat-raised-button",
          text: "Exit",
          type: "cancel"
        },
        {
          classes: "mat-raised-button",
          text: "Back",
          type: "back"
        },
        {
          classes: "mat-raised-button",
          text: "Next",
          type: "next"
        }
      ],
      classes: "",
      highlightClass: "highlight",
      title: "Step 2",
      text: "This is content"
    },
    {
      id: "btn-3",
      attachTo: {
        element: ".step-3",
        on: "bottom"
      },
      buttons: [
        {
          classes: "cancel-button",
          text: "Exit",
          type: "cancel"
        },
        {
          classes: "shepherd-button-primary",
          text: "Back",
          type: "back"
        },
        {
          classes: "shepherd-button-primary",
          text: "Next",
          type: "next"
        }
      ],
      classes: "",
      highlightClass: "highlight",
      title: "Step 3",
      text: "This is content"
    },
  ]
};


@Component({
  selector: 'app-root',
  // template: '<app-store></app-store>',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title = 'angular-project';

  constructor(private shepherdService: ShepherdService) { }

  ngAfterViewInit() {
    this.shepherdService.defaultStepOptions = tour.defaultStepOptions;
    this.shepherdService.modal = true;
    this.shepherdService.confirmCancel = false;
    this.shepherdService.addSteps(tour.steps);
    this.shepherdService.start();
  }
}
