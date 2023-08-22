import { Component, ElementRef, OnInit } from '@angular/core';
import { ShepherdService } from 'angular-shepherd';


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
        element: ".step1-li",
        on: "click"
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
        element: ".step2-li",
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
        element: ".step3-li",
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
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  // introJS = introJs();
  constructor(private shepherdService: ShepherdService, private elementRef: ElementRef) {}



  ngOnInit(): void {

  }

  // startSteps(): void {}
  ngAfterViewInit() {

  }

  startTour() {
    this.shepherdService.defaultStepOptions = tour.defaultStepOptions;
    this.shepherdService.modal = true;
    this.shepherdService.confirmCancel = false;
    this.shepherdService.addSteps(tour.steps);
    this.shepherdService.start();
    }
}
