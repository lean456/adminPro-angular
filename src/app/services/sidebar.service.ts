import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  menu: any[] = [
    {
      tittle: ' Dashboard',
      icons: 'mdi mdi-gauge',
      submenu: [
        {tittle:'Main', url:'/'},
        {tittle:'ProgressBar', url:'progress'},
        {tittle:'Graficas', url:'grafica1'},
      ],
    },
  ];

  constructor() {}
}
