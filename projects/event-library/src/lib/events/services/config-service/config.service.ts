import { Injectable } from '@angular/core';
//import * as labelConfig from 'label.config.json';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  // urlConFig = (urlConfig as any);
  // categoryConfig = (categoryConfig as any);
  //labelConfig = (labelConfig as any);
  // playerConfig = (playerConfig as any);
  // editorConfig = (editorConfig as any);
  public sessionContext: Array<string> =  ['board', 'medium', 'gradeLevel', 'subject',
       'topic', 'author', 'channel', 'framework', 'copyright', 'attributions', 'audience',  'license' ];
  constructor() { }
}

