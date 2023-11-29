import { Directive, ElementRef, Input } from '@angular/core';
import { ScrollManagerDirective } from './scroll-manager.directive';

@Directive({
  selector: '[appScrollSection]',
})
export class ScrollSectionDirective {
  @Input('appScrollSection')
  id!: string | number;

  constructor(private host: ElementRef<HTMLElement>,
     private manager: ScrollManagerDirective
    ) {}

  ngOnInit() {
    this.manager.register(this);
  }

  ngOnDestroy() {
    this.manager.remove(this);
  }

  scroll() {
    this.host.nativeElement.scrollIntoView({
      behavior: 'smooth',
    });
  }
}
