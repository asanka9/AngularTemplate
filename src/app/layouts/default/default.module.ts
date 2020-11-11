import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent  } from './default.component';
import { DashboardComponent,SafePipe } from 'src/app/modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { PostsComponent } from 'src/app/modules/posts/posts.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {YouTubePlayerModule} from '@angular/youtube-player';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatBadgeModule} from '@angular/material/badge';


@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    PostsComponent,
    SafePipe

  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    MatTabsModule,
    MatIconModule,
    YouTubePlayerModule,
    ScrollingModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatBadgeModule
  ]
})
export class DefaultModule { }
