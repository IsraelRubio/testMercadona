import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from './shared/components/login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test';

  constructor(
    private dialog: MatDialog,
  ) {}

  eventLogin() {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '480px',
    });
    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        console.log(res)

      }
    });
  }
}
