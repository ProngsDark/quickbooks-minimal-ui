import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'connect-button',
  templateUrl: './connect-button.component.html',
  styleUrls: ['./connect-button.component.css']
})
export class ConnectButtonComponent implements OnInit {

  ngOnInit(): void {}

  redirectToConnectPage() {
    window.location.href = 'https://perso2.dev.matrixrom.ro:9000/quickbooks/oauth/connect'
  }
}
