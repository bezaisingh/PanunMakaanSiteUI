import { Component, OnInit, Renderer2, ElementRef, ViewChildren, QueryList, ViewChild, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChildren('drop') dropEl: QueryList<ElementRef>;
  @ViewChild('district') district: ElementRef;

  constructor(
    private _renderer: Renderer2,
  ) { }

  ngOnInit(): void {
  }
  
  ngAfterViewInit(): void {
    this.dropEl.map(el => {
      this._renderer.listen(el.nativeElement, 'click', (event: any) => {
        if (el.nativeElement.classList.contains('open')) {
          this._renderer.removeClass(el.nativeElement, 'open');
        } else {
          this._renderer.addClass(el.nativeElement, 'open');
        }
      });
    })

    this._renderer.listen(this.district.nativeElement, 'click', (event: any) => {
      let parent: Element = this.district.nativeElement.parentElement;
      if (parent.classList.contains('open')) {
        this._renderer.removeClass(parent, 'open');
      } else {
        this._renderer.addClass(parent, 'open');
      }
    })
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: any): any {
    this.dropEl.forEach(el => {
      if (event.target.parentElement != el.nativeElement) {
        this._renderer.removeClass(el.nativeElement, 'open');
      }
    });

    if (event.target != this.district.nativeElement) {
      this._renderer.removeClass(this.district.nativeElement.parentElement, 'open');
    }
  }

}
