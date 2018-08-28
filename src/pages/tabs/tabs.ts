import { Component } from '@angular/core';

import { Musicpage } from '../music/music';
import { VideoPage } from '../video/video';
import { Newspage } from '../news/news';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = Musicpage;
  tab2Root = VideoPage;
  tab3Root = Newspage;

  constructor() {

  }
}
