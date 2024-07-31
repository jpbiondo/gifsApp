import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';
import { environment } from '../../../environments/environment';

const MAX_TAG_ELEMENTS = 10;

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  public gifList:Gif[] = [];

  private _tagsHistory:string[] = [];
  private serviceUrl: string = 'https://api.giphy.com/v1/gifs';

  constructor(private http: HttpClient){
    console.log(environment.apiKey)
    this.loadLocalStorage();
  }

  get tagsHistory(){
    return [...this._tagsHistory];
  }


  private organizeHistory(tag:string){
    tag = tag.toLowerCase();

    if(this._tagsHistory.includes(tag)){
      this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag);
    }
    if(this._tagsHistory.length === MAX_TAG_ELEMENTS) {
      this._tagsHistory.pop();
    }

    this._tagsHistory.unshift(tag);

    this.saveLocalStorage();
  }

  private saveLocalStorage():void {
    localStorage.setItem('history', JSON.stringify(this._tagsHistory));

  }

  private loadLocalStorage():void{
    if(!localStorage.getItem('history')) return;

    this._tagsHistory = JSON.parse(localStorage.getItem('history')!);

    if(this._tagsHistory.length === 0) return;

    // this.searchTag(this._tagsHistory[0]);
  }

  searchTag(tag:string) {
    if (tag.length === 0) return;
    this.organizeHistory(tag);

    const params = new HttpParams()
      .set('api_key', environment.apiKey)
      .set('limit', 8)
      .set('q', tag);

    this.http.get<SearchResponse>(`${this.serviceUrl}/search`, {params})
      .subscribe(resp => {
        this.gifList = resp.data;
      })
  }


}
