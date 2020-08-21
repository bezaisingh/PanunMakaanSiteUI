import { Component, OnInit, Renderer2, ElementRef, HostListener } from '@angular/core';
import { Options } from 'ng5-slider';

@Component({
  selector: 'app-property-listing',
  templateUrl: './property-listing.component.html',
  styleUrls: ['./property-listing.component.scss']
})
export class PropertyListingComponent implements OnInit {

  list = [];

  public priceRange = {
    minValue: 4000000,
    maxValue: 30000000
  }

  /* Range Slider Options */
  public options: Options = {
    floor: 0,
    ceil: 100000000,
    step: 1000000,
    hidePointerLabels: true,
    hideLimitLabels: true
  }

  constructor(
    private _renderer: Renderer2,
    private _elRef: ElementRef
  ) { }

  ngOnInit(): void {
    for (let i = 1; i <= 5; i++) {
      this.list.push(i);
    }
  }

  ngAfterViewInit() {
    let element: Element = this._elRef.nativeElement.querySelector("#sort-btn");
    let parent: Element = this._elRef.nativeElement.querySelector(".sort-container");
    this._renderer.listen(element, "click", (event) => {
      if (parent.classList.contains("open-drop")) {
        this._renderer.removeClass(parent, "open-drop");
      } else {
        this._renderer.addClass(parent, "open-drop");
      }
    });

    this._renderer.listen(document, "click", (event) => {
      if (event.target != element) {
        this._renderer.removeClass(parent, "open-drop");
      }
    });
  }

}
