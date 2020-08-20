import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NcoviService } from 'src/app/shared/service/ncovi.service';

export interface UserData {
  Country: string;
  CountryCode: string;
  Date: Date;
  NewConfirmed: number;
  NewDeaths: number;
  NewRecovered: number;
  Slug: string;
  TotalConfirmed: number;
  TotalDeaths: number;
  TotalRecovered: number;
}

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.scss'],
})
export class StatisticComponent implements OnInit {
  global: any;
  date: Date;
  countries: UserData[] = [];
  displayedColumns: string[] = [
    'Country',
    'NewConfirmed',
    'NewDeaths',
    'NewRecovered',
  ];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private ncoviService: NcoviService) {}

  ngOnInit() {
    this.ncoviService.getSummary().subscribe((resp) => {
      this.global = resp['Global'];
      this.countries = resp['Countries'];
      this.date = resp['Date'];
      this.dataSource = new MatTableDataSource(this.countries);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log(this.global);
      console.log(resp);
      console.log(this.countries.length);
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  calculateColor(val: number) {
    return val > 0 ? 'red' : val === 0 ? 'black' : 'green';
  }
}
