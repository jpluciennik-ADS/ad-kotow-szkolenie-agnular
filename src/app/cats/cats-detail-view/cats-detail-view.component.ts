import { Component, OnInit } from '@angular/core';
import { Cat } from '../model';
import { CatsDataService } from '../cats-data.service';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'app-cats-detail-view',
  templateUrl: './cats-detail-view.component.html',
  styleUrls: ['./cats-detail-view.component.scss']
})
export class CatsDetailViewComponent implements OnInit {

  constructor(private catsDataService: CatsDataService, private activatedRoute: ActivatedRoute) {
    this.route = activatedRoute.snapshot;
  }

  cat: Cat;
  adoptionFormActive: boolean;
  showConfirmMsg: boolean;
  private route: ActivatedRouteSnapshot;
  picIndex: number = 0;

  ngOnInit(): void {
    const catName = this.route.params['catName'];
    this.catsDataService.getCat(catName).subscribe(data => this.cat = data);
  }

  openAdoptionForm(): void {
    this.adoptionFormActive = true;
  }

  adopt() {
      this.cat.adopted = true;
  }

  nextPic() {
    this.picIndex++;
    if (this.picIndex > this.cat.picUrls.length - 1) {
      this.picIndex = 0;
    }
  }

  prevPic() {
    this.picIndex--;
    if (this.picIndex < 0) {
      this.picIndex = this.cat.picUrls.length - 1;
    }
  }

  onFormClose(success: boolean) {
    this.adoptionFormActive = false;
    this.showConfirmMsg = success;
    this.adopt();
  }
}
