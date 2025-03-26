import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  lang: string ='';

  ChangeLang(Lang: any){
    const selectedLanguaje = Lang;
    localStorage.setItem('lang', selectedLanguaje)

  }
  ngOnInit(): void {
    this.lang = localStorage.getItem('Lang') || 'en';
    console.log(this.lang);
  }
}
