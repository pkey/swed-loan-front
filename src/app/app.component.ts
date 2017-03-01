import {Component} from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(private translate: TranslateService) {
    translate.addLangs(["en", "lt"]);
    translate.setDefaultLang('lt');

    let browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/lt|en/) ? browserLang : 'lt');
  }
}
