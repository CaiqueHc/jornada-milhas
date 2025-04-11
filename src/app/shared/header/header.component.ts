import { Component } from '@angular/core';
import { UserService } from '../../core/services/user.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  user$: Observable<any> | undefined;

  ngOnInit(): void {
    this.user$ = this.userService.retornarUser();
  }

  logout(){
    this.userService.logout();
    this.router.navigate(['/login'])
  }
}
