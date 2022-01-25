import { Injectable } from '@angular/core';
import { Serie } from '../../models/Serie';
import { Review } from '../../models/Review';

@Injectable({
  providedIn: 'root',
})
export class SerieService {
  seriesList: Serie[];
  dataList!: Review[];
  review!: Review;

  constructor() {
    this.seriesList = [];

    // We create and push in the table the comment and the series. The comment table is a variable in the serie model //

    this.seriesList.push(
      new Serie(
        1,
        'The Witcher',
        new Date('2019-12-20'),
        2,
        'Le sorceleur Geralt, un chasseur de monstres mutant, se bat pour trouver sa place dans un monde où les humains se révèlent souvent plus vicieux que les bêtes.',
        "Il est difficile d'entrer dans The Witcher, entre les noms fantaisistes étranges, la structure de l'histoire hasardeuse et une trame de fond compliquée. C'est beaucoup à avaler d'un coup. Mais on finit par se laisser avoir et par vouloir en savoir plus sur la suite. Si vous avez envie de vous laisser séduire, n'hésitez pas.",
        'https://fr.web.img6.acsta.net/pictures/19/12/12/12/13/2421997.jpg',
        [
          new Review(
            0,
            new Date('2021-12-23'),
            'GerardDeBrives',
            "Je préfère Henry Cavill en Sorceleur plutôt qu'en héros à collant!"
          ),
          new Review(
            1,
            new Date('2021-12-28'),
            'JennyferDeBergues',
            "L'univers est sympa. Mais j'aurais aimé moins de violences."
          ),
        ]
      ),
      new Serie(
        2,
        'Borgia',
        new Date('2011-01-01'),
        3,
        "L'histoire de l'une des familles les plus puissantes de la Renaissance qui s'est faite connaître grâce à l'un de ses membres, Rodrigo Borgia, et son accession au trône de Saint-Pierre.",
        "Malgré de jolis décors, de jolis costumes et de bonnes idées scénaristiques, Borgia est une mauvaise série qui sombre trop souvent de manière gratuite dans l'hystérie et l’obscénité.",
        'https://fr.web.img6.acsta.net/c_310_420/medias/nmedia/18/85/20/48/19777015.jpg',
        [
          new Review(
            0,
            new Date('2013-05-15'),
            'TotoDu38',
            "Sombre, violent, et trash, la série se perd dans l'histoire et les fesses des courtisanes au fil des saisons. Tant mieux ou dommage selon le point de vue de chacun."
          ),
        ]
      ),
      new Serie(
        3,
        'Castlevania',
        new Date('2017-07-07'),
        4,
        "Lorsque sa femme se fait brûler vive, accusée à tort de sorcellerie, le vampire Vlad Dracula Tepes déclare qu'il prendra sa revanche sur le peuple de Wallachia. Aidé du magicien Sypha Belnades et du propre fils de Dracula, Alucard, le chasseur de démons Trevor Belmont lutte contre la terreur qu'il instaure.",
        "Dommage de ne voir que des vieux commentaires qui se sont arrêtés à la 1ere saison, qui recherche le jeux vidéo dans la série ou qui s'attachent qui détails technico technique de la réalisation. Pour ma part, je considère cette série comme un chef d'oeuvre.",
        'https://fr.web.img2.acsta.net/pictures/17/06/05/13/22/514027.jpg',
        [
          new Review(
            0,
            new Date('2017-08-30'),
            'BouffiContreLesTapirs',
            'Moi qui ai joué aux divers jeux de la licence, je ne suis pas déçu. Animation sublime, histoire superbe, je recommande !'
          ),
        ]
      ),
      new Serie(
        4,
        'Good Omens',
        new Date('2019-05-31'),
        1,
        'Un duo improbable, un Ange exigeant et un Démon qui vit en liberté, ont pris goût à la vie sur Terre et sont obligés de former une alliance pour arrêter Armageddon.',
        "Franchement j'ai adoré et j'ai passé un très bon moment en regardant cette mini-série. C'est drôle; loufoque et absurde sans être lourd et sans queue ni tête ... ce qui est extrêmement rare.",
        'https://fr.web.img4.acsta.net/pictures/19/02/18/12/38/0080674.jpg',
        [
          new Review(
            0,
            new Date('2019-06-05'),
            'Brie-Tiche',
            'Une mini-série très sympa à regarder avec une tasse de thé Lipton goût pêche'
          ),
        ]
      ),
      new Serie(
        5,
        'Game of Thrones',
        new Date('2020-10-16'),
        8,
        'A Westeros, un continent chimérique, de puissantes familles se disputent le trône de fer, symbole de pouvoir absolu sur le royaume des Sept Couronnes.',
        "Au fil des années, 'Game of thrones' se sera imposé comme un monument grâce à un art extrêmement habile du rebondissement, bousculant un genre très codé. Une série donnant plus de place à son intrigue et ses personnages qu’à son univers fantaisiste, elle parvient pourtant au fil des saisons à assurer un spectacle grandiose pour la télévision.",
        'https://m.media-amazon.com/images/I/91DjGXn7jXL._AC_SL1500_.jpg',
        [
          new Review(
            0,
            new Date('2018-11-25'),
            'Jean-Neige',
            'Tout simplement la meilleur série de ces 10 dernières années, même si certains ne vont pas aimer la fin.'
          ),
        ]
      )
    );
  }

  // Functions used for Create, Edit and Delete Series //

  createSerie(serieToCreate: Serie): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      serieToCreate.id = this.seriesList[this.seriesList.length - 1].id + 1;
      this.seriesList.push(serieToCreate);
      resolve();
    });
  }

  editSerie(editedSerie: Serie): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      for (let [index, serie] of this.seriesList.entries()) {
        if (serie.id === editedSerie.id) {
          this.seriesList[index] = editedSerie;
          resolve();
          break;
        }
      }
    });
  }

  deleteSerie(serieIdToDelete: number): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      for (let [index, serie] of this.seriesList.entries()) {
        if (serie.id === serieIdToDelete) {
          this.seriesList.splice(index, 1);
          resolve();
          break;
        }
      }
    });
  }

  // Function used for find the ID of a serie. It is used for the edit serie function //

  findSerieById(serieId: number): Promise<Serie> {
    return new Promise<Serie>((res, rej) => {
      for (let serie of this.seriesList) {
        if (serie.id === serieId) {
          res(serie);
          break;
        }
      }
    });
  }

  // Creation of review ///

  createReview(reviewToCreate: Review, SerieToUpdate: Serie): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      for (let [index, review] of this.seriesList.entries()) {
        if (review.id === SerieToUpdate.id) {
          this.seriesList[index] = review;
          this.dataList = review.review;
          reviewToCreate.id = this.dataList[this.dataList.length - 1].id + 1;
          this.seriesList[index].review.push(reviewToCreate);
          resolve();
          break;
        }
      }
    });
  }
}
