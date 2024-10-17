import { Injectable } from '@angular/core';
import { Chofer } from '../models/chofer';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { getDocs, collection } from 'firebase/firestore';
@Injectable({
  providedIn: 'root',
})
export class ChoferService {
  choferes: Array<Chofer> = [];

  constructor(private firestore: AngularFirestore) {}

  agregarChofer(chofer: any): Promise<any> {
    return this.firestore.collection('choferes').add(chofer);
  }

  async getChoferes(): Promise<any[]> {
    const querySnapshot = await getDocs(
      collection(this.firestore.firestore, 'choferes')
    );
    const choferes: any[] = [];
    querySnapshot.forEach((doc) => {
      let chofer = doc.data() as any;
      if (chofer.pais) chofer.pais = JSON.parse(chofer.pais);
      choferes.push(chofer);
    });
    return choferes;
  }
}
