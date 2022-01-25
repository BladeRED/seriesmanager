import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SerieService } from 'src/app/services/serie/serie.service';
import { Serie } from '../../models/Serie';

@Component({
  selector: 'app-serie-new',
  templateUrl: './serie-new.component.html',
  styleUrls: ['./serie-new.component.css'],
})
export class SerieNewComponent implements OnInit {
  constructor(private serieService: SerieService, private router: Router) {}

  ngOnInit(): void {}

  onSubmitCreateSerie(serieToAdd: Serie): void {

    // We call the create serie function on the serieService who had the promise. Once it's done, then we go back to the /series view //
    this.serieService.createSerie(serieToAdd).then(() => {
      this.router.navigateByUrl('/series');
    });
  }
}
