import { Review } from './Review';

export class Serie {
  private _id: number;
  private _name: string;
  private _firstSeasonRelease: string | Date;
  private _numberOfSeasons: number;
  private _description: string;
  private _critic: string;
  private _imgUrl: string;
  private _review: Review[];

  constructor(
    id: number,
    name: string,
    firstSeasonRelease: string | Date,
    numberOfSeasons: number,
    description: string,
    critic: string,
    imgUrl: string,
    review: Review[] // this variable is a table because we will need to push the datas of the Review model in it //
  ) {
    this._id = id;
    this._name = name;
    this._firstSeasonRelease =
      typeof firstSeasonRelease === 'string'
        ? new Date(firstSeasonRelease)
        : firstSeasonRelease;
    this._numberOfSeasons = numberOfSeasons;
    this._description = description;
    this._critic = critic;
    this._imgUrl = imgUrl;
    this._review = review;
  }

  /**
   * Getter id
   * @return {string}
   */
  public get id(): number {
    return this._id;
  }

  /**
   * Getter name
   * @return {string}
   */
  public get name(): string {
    return this._name;
  }

  /**
   * Getter firstSeasonRelease
   * @return {Date}
   */
  public get firstSeasonRelease(): string | Date {
    return this._firstSeasonRelease;
  }

  /**
   * Getter numberOfSeasons
   * @return {number}
   */
  public get numberOfSeasons(): number {
    return this._numberOfSeasons;
  }

  /**
   * Getter description
   * @return {string}
   */
  public get description(): string {
    return this._description;
  }

  /**
   * Getter critic
   * @return {string}
   */
  public get critic(): string {
    return this._critic;
  }

  /**
   * Getter imgUrl
   * @return {string}
   */
  public get imgUrl(): string {
    return this._imgUrl;
  }

  /**
   * Getter review
   * @return {Review[]}
   */
  public get review(): Review[] {
    return this._review;
  }

  /**
   * Setter id
   * @param {string} value
   */
  public set id(value: number) {
    this._id = value;
  }

  /**
   * Setter name
   * @param {string} value
   */
  public set name(value: string) {
    this._name = value;
  }

  /**
   * Setter firstSeasonRelease
   * @param {Date} value
   */
  public set firstSeasonRelease(value: string | Date) {
    this._firstSeasonRelease = value;
  }

  /**
   * Setter numberOfSeasons
   * @param {number} value
   */
  public set numberOfSeasons(value: number) {
    this._numberOfSeasons = value;
  }

  /**
   * Setter description
   * @param {string} value
   */
  public set description(value: string) {
    this._description = value;
  }

  /**
   * Setter critic
   * @param {string} value
   */
  public set critic(value: string) {
    this._critic = value;
  }

  /**
   * Setter imgUrl
   * @param {string} value
   */
  public set imgUrl(value: string) {
    this._imgUrl = value;
  }

  /**
   * Setter review
   * @param {Review[]} value
   */
  public set review(value: Review[]) {
    this._review = value;
  }
}
