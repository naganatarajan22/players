import { Component, OnInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { AjaxService } from '../ajax.service';
import { MatTable } from '@angular/material/table';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  @ViewChild(MatTable) table:MatTable<any>

  displayedColumns: Array<any>;
  teamName: string;
  loggedinData: any;
  isCreateTeamName: boolean = false;
  isCreateTeamButtonEnable: boolean = false;
  jerseyNo: number;
  playerName: string;
  dataSource: Array<any> = [];
  constructor(private ajaxservice: AjaxService, private router: Router) { }
  temp_data:any;
  ngOnInit() {
    this.displayedColumns = ['name'];
  }

  logout = () => {
    this.router.navigate(['/loginpage']);
  }

  addTeam = () => {
    this.isCreateTeamName = !this.isCreateTeamName;
  }


  createTeamName = () => {
    this.ajaxservice.postMethod('createTeamName', { teamName: this.teamName }).subscribe((data: any) => {
      this.loggedinData = data;
      if (this.loggedinData && this.loggedinData.isSuccess) {
        this.isCreateTeamButtonEnable = true;
        this.dataSource.push({name: this.teamName});
        this.table.renderRows()
      } else {
        console.log("createTeamName call error");
      }
    });
  }

  getRow = (row) => {
    const {name} = row;
    this.router.navigate(['/players']);
  }


  addPlayers = () => {
    const playerDetails = {
      jerseyNo: this.jerseyNo,
      playerName: this.playerName,
      teamName: this.teamName,
    }
    this.ajaxservice.postMethod('addPlayers', playerDetails).subscribe((data: any) => {
      this.loggedinData = data;
      if (this.loggedinData && this.loggedinData.isSuccess) {
        this.isCreateTeamButtonEnable = true;
      } else {
        console.log("createTeamName call error");
      }
    });
  }

}
