import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs';

import { votingInfo } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  options:any[]=[];

  constructor(private db: AngularFirestore) { }

  ngOnInit(): void {
    this.db.collection('voting').valueChanges()
    .pipe(
      map((res:any[])=> 
      res.map(({name,votes})=>
      ({name,value:votes})
      ))
    )
    .subscribe(res=>{
      this.options=res;
    })
  }

}
