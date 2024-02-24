import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Fruit } from './fruit';

@Injectable({
  providedIn: 'root'
})
export class FruitService {
  private apiUrl = 'http://localhost:3000/fruits';

  constructor(private http: HttpClient) { }

  /**
   * Récupère la liste de tous les fruits depuis le serveur.
   * @returns Une Observable qui émet un tableau de fruits.
   */
  getFruits(): Observable<Fruit[]> {
    return this.http.get<Fruit[]>(this.apiUrl);
  }

  /**
   * Ajoute un nouveau fruit sur le serveur.
   * @param newFruit Les informations du nouveau fruit à ajouter.
   * @returns Une Observable qui émet le fruit ajouté.
   */
  addFruit(newFruit: Fruit): Observable<Fruit> {
    return this.http.post<Fruit>(this.apiUrl, newFruit);
  }

  /**
   * Met à jour les informations d'un fruit sur le serveur.
   * @param fruit Les nouvelles informations du fruit à mettre à jour.
   * @returns Une Observable qui émet le fruit mis à jour.
   */
  updateFruit(fruit: Fruit): Observable<Fruit> {
    const url = `${this.apiUrl}/${fruit.id}`;
    return this.http.put<Fruit>(url, fruit);
  }

  /**
   * Supprime un fruit du serveur.
   * @param id L'identifiant du fruit à supprimer.
   * @returns Une Observable qui émet une réponse vide si la suppression est réussie.
   */
  deleteFruit(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }

  /**
   * Récupère un fruit spécifique depuis le serveur en fonction de son identifiant.
   * @param id L'identifiant du fruit à récupérer.
   * @returns Une Observable qui émet le fruit trouvé, ou undefined si aucun fruit n'est trouvé avec cet ID.
   */
  getFruitById(id: number): Observable<Fruit> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Fruit>(url);
  }
}
