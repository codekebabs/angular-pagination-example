import { Component, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  currentPageIndex = 0;

  data = [];
  paginatedData = [];
  tableItem: { pageNumber: number; items: Array<any> };
  currentPage: any = [];
  pages: number;

  ngOnInit(): void {
    this.populateFakeData();
    this.paginate(6, this.data.length);
    this.currentPage = this.paginatedData[0];
  }

  populateFakeData() {
    for (let i = 0; i < 20; i++) {
      this.data.push({ name: 'item' + i });
    }
  }

  paginate(pageSize: number, itemsCount: number) {
    let currentIndex = 0;
    this.pages = (itemsCount - 1) / pageSize + 1;
    for (let i = 0; i < this.pages; i++) {
      this.paginatedData.push({
        pageNumber: currentIndex + 1,
        items: this.data.slice(currentIndex, currentIndex + pageSize)
      });
      currentIndex = currentIndex + pageSize;
    }
  }

  previous() {
    this.currentPageIndex -= 1;
    this.currentPage = this.paginatedData[this.currentPageIndex];
  }

  next() {
    this.currentPageIndex += 1;
    this.currentPage = this.paginatedData[this.currentPageIndex];
  }
}
