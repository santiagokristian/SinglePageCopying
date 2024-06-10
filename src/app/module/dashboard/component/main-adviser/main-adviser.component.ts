import { Component } from '@angular/core';
import { map, of, take } from 'rxjs';

@Component({
  selector: 'app-main-adviser',
  templateUrl: './main-adviser.component.html',
  styleUrl: './main-adviser.component.scss'
})
export class MainAdviserComponent {
  public isCollapsed: boolean = true;
  public menuList$ = of(
    [{ id: 1, item: "Book keeping & Payroll" },
    { id: 2, item: "Financial & GST" },
    { id: 3, item: "KiwiSaver advice" },
    { id: 4, item: "Insuring People" },
    { id: 5, item: "Tax & Business advice" },
    { id: 6, item: "Trustee services" },
    { id: 7, item: "Mortgage advice" }]).pipe(map(x => x));

  public activeId: number = 3;

}
