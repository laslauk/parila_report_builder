import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'labelize',  pure: false })
export class LabelizePipe implements PipeTransform {
    transform(value: any, args: any[] = null): any {

        switch(value) 
        {
            case 'appartmentfloor':{
                return "Asunnon lattia";
            }
            case 'appartmentroof': {
                return 'Asunnon katto';
            }

            case 'appartmentwalls': {
                return 'Asunnon seinät';
            }
            default: break;
        }
    }
}

