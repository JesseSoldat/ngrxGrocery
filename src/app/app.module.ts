import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// 3rd party
import { MatListModule, MatButtonModule } from '@angular/material';
// ngrx
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
// custom
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { reducers, metaReducers } from './_reducers';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page.component';

@NgModule({
  declarations: [AppComponent, HomePageComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatListModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      initialState: {
        family: {
          familyMembers: {
            mom: { id: 'mom', name: 'Mary', avatar: '👩' },
            dad: { id: 'dad', name: 'Ted', avatar: '👨' },
            son: { id: 'son', name: 'Billy', avatar: '👦' },
            daughter: { id: 'daughter', name: 'Emily', avatar: '👧' },
            cat: { id: 'cat', name: 'Duke', avatar: '😸' },
          },
        },
      },
    }),
    StoreDevtoolsModule.instrument({
      name: 'Family grocery list',
      logOnly: environment.production,
    }),
    StoreRouterConnectingModule.forRoot({
      stateKey: 'router',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
