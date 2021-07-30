import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-collection-icon',
  templateUrl: './collection-icon.component.html',
  styleUrls: ['./collection-icon.component.css']
})
export class CollectionIconComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public initializeImagePicker()
  {
    console.log("IninitilaizeImage picker method");
  }
}
