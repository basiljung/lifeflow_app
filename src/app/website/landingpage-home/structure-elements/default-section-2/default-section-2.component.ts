import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';

@Component({
  selector: 'app-default-section-2',
  imports: [],
  templateUrl: './default-section-2.component.html',
  styleUrl: './default-section-2.component.scss',
})
export class DefaultSection2Component implements AfterViewInit {
  activeStep = 1;

  @ViewChild('rightPane', { static: false })
  rightPane!: ElementRef<HTMLElement>;
  @ViewChildren('storyItem') storyItems!: QueryList<ElementRef<HTMLElement>>;

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const idx =
              this.storyItems
                .toArray()
                .findIndex((ref) => ref.nativeElement === e.target) + 1;
            if (idx > 0 && this.activeStep !== idx) {
              this.activeStep = idx;
              this.cdr.markForCheck();
            }
          }
        });
      },
      {
        // 👇 this is the important change
        root: this.rightPane.nativeElement,
        threshold: 0.15,
        rootMargin: '0px 0px -15% 0px',
      },
    );

    this.storyItems.forEach((ref) => io.observe(ref.nativeElement));
  }
}
