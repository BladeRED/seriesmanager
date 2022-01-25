import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  isConnected!: boolean;
  tokenSub!: Subscription;

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit(): void {
    // We subscribe to the login token in login service for change the value of isConnected. The header will add the logout button only if the isConnected is true //
    this.tokenSub = this.loginService.token.subscribe(
      (newTokenValue: string) => {
        this.isConnected = !!newTokenValue;
      }
    );
  }

  onClickSignOut(): void {
    this.loginService.signOut().then(() => {
      this.router.navigateByUrl('');
    });
  }

  ngOnDestroy(): void {
    this.tokenSub.unsubscribe();
  }
}
