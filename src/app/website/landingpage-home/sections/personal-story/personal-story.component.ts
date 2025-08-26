import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { LanguageService } from '../../../../services/language.service';

@Component({
  selector: 'app-personal-story',
  templateUrl: './personal-story.component.html',
  styleUrl: './personal-story.component.scss',
})
export class PersonalStoryComponent
  implements OnInit, AfterViewInit, OnDestroy
{
  activeStep = 1;
  private destroy$ = new Subject<void>();
  currentLang: string | null = null;

  @ViewChild('rightPane', { static: false })
  rightPane!: ElementRef<HTMLElement>;
  @ViewChildren('storyItem') storyItems!: QueryList<ElementRef<HTMLElement>>;

  private io?: IntersectionObserver;

  constructor(private langService: LanguageService) {}

  ngOnInit(): void {
    this.langService.lang$.pipe(takeUntil(this.destroy$)).subscribe((lang) => {
      this.currentLang = lang;
    });
  }

  ngAfterViewInit(): void {
    this.io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            const idx =
              this.storyItems
                .toArray()
                .findIndex((ref) => ref.nativeElement === e.target) + 1;
            if (idx > 0 && this.activeStep !== idx) this.activeStep = idx;
          }
        }
      },
      {
        root: this.rightPane.nativeElement,
        threshold: 0.9,
        rootMargin: '0px',
      },
    );

    this.storyItems.forEach((ref) => this.io!.observe(ref.nativeElement));
  }

  ngOnDestroy(): void {
    this.io?.disconnect();
    this.destroy$.next();
    this.destroy$.complete();
  }
}
