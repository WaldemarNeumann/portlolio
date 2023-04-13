import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  @Input() startColor = true;
  public isClicked: boolean = true;
  public mobile: boolean = true;
  active = 0;

  constructor() { }

  ngOnInit(): void {
  
  }

  
  public openMenu() {
    this.isClicked = false;
    console.log('open Menu', this.isClicked)
  }

  
  public closeMenu() {
    this.isClicked = true;
    console.log('close Menu', this.isClicked)
  }


  oK(active){
    if (this.active == active){
      this.active = 0;
    }
    else {
      this.active = active;
      this.startColor = false;
    }
  }
}
