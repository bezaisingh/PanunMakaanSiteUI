import { Component, OnInit, Renderer2, ElementRef, ViewChildren, QueryList } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChildren('drop') dropEl: QueryList<ElementRef>;

  constructor(
    private _renderer: Renderer2,
  ) { }

  ngOnInit(): void {
  }
  
  ngAfterViewInit(): void {
    this.dropEl.map(el => {
      this._renderer.listen(el.nativeElement, 'click', (event) => {
        if (el.nativeElement.classList.contains('open')) {
          this._renderer.removeClass(el.nativeElement, 'open');
        } else {
          this._renderer.addClass(el.nativeElement, 'open');
        }
      });
    })
  }

}
