import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { filter } from 'rxjs/operators';
import { concat } from 'rxjs/internal/operators/concat';

@Injectable({
  providedIn: 'root'
})
export class ReportbuilderService {

  constructor() { }


  getRoomReportRows(data): string {

    let nonEmptyData = this.dropEmpties(data);
    let roomReport = "";
    
    
    for (var room in nonEmptyData)
    {
      console.log("gay")
      console.log(room);

      var suffix = "";
      var prefix = "";

   

      switch(room){
        case "keittiö":
        suffix = "n"
        break;

        case "makuuhuone":
        suffix = "en"
        break;

        case "wc":
        suffix = ":n"
        break;

        case "kylpyhuone":
        suffix = "en"
        break;

        default:
        console.log("breaking suffix")
        break;

      }

      console.log(nonEmptyData[room]);

      if(nonEmptyData[room]['sijainti'] === 'ylakerta')
      {
        prefix = "Yläkerran"
      } else if (nonEmptyData[room]['sijainti'] === 'alakerta')
      {
        prefix = "Alakerran";
      } else {
        prefix = '';
      }

      for (var inpsectionTarget in nonEmptyData[room])
      {

        const isBlural = this.checkBlural(nonEmptyData[room][inpsectionTarget]);
        //   {huone: "kylpyhuone", tarkastusKohteet: ['sijainti', 'lattia', 'seina_pinta','seina_runko','katto_runko','katto_pinta','iv_putket']},

        switch(inpsectionTarget) 
        {
          case "lattia":
            roomReport += prefix+" "+ room+suffix + " lattialla on " + nonEmptyData[room][inpsectionTarget] + " eikä tämä sisällä asbestia. ";
          break;

          case "seinä":
            roomReport +=prefix+" "+  room+suffix + " seinillä on " + nonEmptyData[room][inpsectionTarget] + " eikä tämä sisällä asbestia. ";
          break;

          case "katto":
            roomReport +=prefix+" "+  room+suffix + " katto on " + nonEmptyData[room][inpsectionTarget] + " eikä tämä sisällä asbestia. ";

            case "valitila":
            roomReport +=prefix+" "+  room+suffix + " välitila on " + nonEmptyData[room][inpsectionTarget] + " eikä tämä sisällä asbestia. ";
          break;


          default: 
            console.log("breaking target")
          break;

        }
      }
    }
    return roomReport;
  }
  
  checkBlural(data: string): boolean {
  return (data.split('/').length > 1);
  }

  dropEmpties(data): any {
    let parsedData = {};

      Object.keys(data).forEach((key) => {
        parsedData[key] = {};

        let allEmpty = true;
        Object.keys(data[key]).forEach(question => {
          if(data[key][question] !== "") {


            parsedData[key][question] = data[key][question]
            allEmpty = false;
          }
        })

        if (allEmpty) {
          delete parsedData[key]
        }

     })
     return parsedData;
  } 

  parseData(data): Observable<string> {

    const reportRows = this.getRoomReportRows(data);

    console.log(reportRows);

    console.log("--")
    return of(reportRows).pipe(filter( item => {
      return item !== "";
    }));  

  }
}

