import { Component, OnInit } from '@angular/core';
import { Multiplo } from 'src/app/models/multiplo.model';
import { MultiploService } from 'src/app/services/multiplo.service';

@Component({
  selector: 'app-list-multiplos',
  templateUrl: './list-multiplos.component.html',
  styleUrls: ['./list-multiplos.component.css']
})
export class ListMultiplosComponent implements OnInit {

  multiplos:Multiplo[] = []

  constructor(private multiploService: MultiploService) { }

  ngOnInit(): void {
    this.multiploService.getMultiplos().subscribe( res => {
      const data = res.map( (e) => {
        return {
          id:e.payload.doc.id,
          ...(e.payload.doc.data() as Multiplo)
        }
      })

     this.multiplos = data
      
    })
  }

  getColorText(numbers:any):string {
    return this.multiploService.changeColorText(numbers)
  }

}
