import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Serie } from 'src/app/models/Serie';
import { SerieService } from 'src/app/services/serie/serie.service';

@Component({
  selector: 'app-serie-edit',
  templateUrl: './serie-edit.component.html',
  styleUrls: ['./serie-edit.component.css'],
})
export class SerieEditComponent implements OnInit {
  serie!: Serie;

  constructor(
    private serieService: SerieService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {

    // We snapshot with the params id to have the correct ID of the serie we want to edit //
    const id = this.route.snapshot.params['id'];

    this.serieService.findSerieById(+id).then((serie: Serie) => {
      this.serie = serie;
    });
  }

  onSubmitEditSerie(editedSerie: Serie): void {
    this.serieService.editSerie(editedSerie).then(() => {
      this.router.navigateByUrl('/series');
    });
  }
}
