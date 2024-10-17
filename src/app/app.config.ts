import {
  ApplicationConfig,
  provideZoneChangeDetection,
  importProvidersFrom,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { provideHttpClient } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire/compat';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'parcial-lab-fb78d',
        appId: '1:991899128504:web:ca1c9c21387886f371da4d',
        storageBucket: 'parcial-lab-fb78d.appspot.com',
        apiKey: 'AIzaSyCDEaoc0_6SidxQzms6cciAJeMDz8V0Pvg',
        authDomain: 'parcial-lab-fb78d.firebaseapp.com',
        messagingSenderId: '991899128504',
      })
    ),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
    provideHttpClient(),
    importProvidersFrom(
      AngularFireModule.initializeApp({
        projectId: 'parcial-lab-fb78d',
        appId: '1:991899128504:web:ca1c9c21387886f371da4d',
        storageBucket: 'parcial-lab-fb78d.appspot.com',
        apiKey: 'AIzaSyCDEaoc0_6SidxQzms6cciAJeMDz8V0Pvg',
        authDomain: 'parcial-lab-fb78d.firebaseapp.com',
        messagingSenderId: '991899128504',
      })
    ),
    provideAnimationsAsync(),
  ],
};
