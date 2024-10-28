import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit {

  public currentYear: number = 2024;

  ngOnInit(): void {
    this.currentYear = new Date().getFullYear();
  }

}
