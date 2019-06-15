import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    function changeLight() {
      document.getElementById('green1').classList.add('go');
      document.getElementById('red2').classList.add('stop');

      setTimeout(function() {
        document.getElementById('green1').classList.remove('go');
        document.getElementById('yellow1').classList.add('slow');
      }, 2000);

      setTimeout(function() {
        document.getElementById('yellow1').classList.remove('slow');
        document.getElementById('red2').classList.remove('stop');
        document.getElementById('green2').classList.add('go');
        document.getElementById('red1').classList.add('stop');
      }, 3000);

      setTimeout(function() {
        document.getElementById('green2').classList.remove('go');
        document.getElementById('yellow2').classList.add('slow');
      }, 5000);

      setTimeout(function() {
        document.getElementById('yellow2').classList.remove('slow');
        document.getElementById('red1').classList.remove('stop');
        document.getElementById('green1').classList.add('go');
        document.getElementById('red2').classList.add('stop');
      }, 6000);
    }

    changeLight();
    setInterval(function() { changeLight(); }, 6000);
  }

}
