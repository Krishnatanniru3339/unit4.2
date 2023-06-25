import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  data: any = [];
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.getAllData();
  }
  getAllData() {
    this.apiService.getAllPlayers().subscribe((response: any) => {
      this.data = response?.response;
    });
  }
  getPlayersByMatches() {
    this.apiService.getPlayersByMatches().subscribe((response: any) => {
      this.data = response?.response;
    });
  }
  getHighestRuns() {
    this.apiService.getHighestRuns().subscribe((response: any) => {
      this.data = response?.response;
    });
  }
  getPlayersByRuns() {
    this.apiService.getPlayersByRuns().subscribe((response: any) => {
      this.data = response?.response;
    });
  }
  getPlayersByLeastStrikeRate() {
    this.apiService.getPlayersByLeastStrikeRate().subscribe((response: any) => {
      this.data = response?.response;
    });
  }
  getPlayersHighestMatches() {
    this.apiService.getPlayersHighestMatches().subscribe((response: any) => {
      this.data = response?.response;
    });
  }
  DeletePlayer(data: any) {
    let body = {
      _id: data,
    };
    this.apiService.deletePlayer(body).subscribe((response: any) => {
      this.data = response?.response;
    });
  }
  onOptionsSelected(value: string) {
    if (value === 'get-players-by-matches') {
      this.getPlayersByMatches();
    } else if (value === 'get-highest-runs') {
      this.getHighestRuns();
    } else if (value === 'get-players-by-runs') {
      this.getPlayersByRuns();
    } else if (value === 'get-players-by-least-strike-rate') {
      this.getPlayersByLeastStrikeRate();
    } else if (value === 'get-players-highest-matches') {
      this.getPlayersHighestMatches();
    } else {
      this.getAllData();
    }
  }
  deletePlayer(id: string) {
    this.DeletePlayer(id);
  }
}
