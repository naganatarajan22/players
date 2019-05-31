import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit() {
  }
  navigateToAddTeam = () => {
      this.router.navigate(['/dashboard']);
  }
}
