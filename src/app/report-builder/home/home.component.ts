import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder} from '@angular/forms';
import { FormArray } from '@angular/forms/src/model';
import {Apartment} from '../models/apartment.model';
import {Room} from '../models/room.model';
import { Pipe, PipeTransform } from '@angular/core';
import {KeysPipe} from './pipes/keys.pipe';
import { ReportbuilderService } from 'src/app/services/reportbuilder.service';




@Component({
  selector: 'rb-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  //ERIKOISTILOPJA WC, KPH, SAUNA JA KEITTIÖ
  //lattia on runkomateriaali


  questions = ['sijainti', 'lattia_pintamateriaali', 'seina_runkomateriaali','seina_pintamateriaali','katto'];
  report = [];

  constructor(private fb: FormBuilder, private reportService: ReportbuilderService) {
  
  }
  default_template = {huone: "huone", tarkastusKohteet: ['sijainti', 'lattia', 'seina_pinta','seina_runko','katto_runko','katto_pinta,','iv_putket']}
  rooms = [
  {huone: "asunto", tarkastusKohteet: ['lattia', 'seina_pinta','seina_runko','katto_runko','katto_pinta']},
   {huone: "kylpyhuone", tarkastusKohteet: ['sijainti', 'lattia', 'seina_pinta','seina_runko','katto_runko','katto_pinta','iv_putket']},
   {huone: "wc", tarkastusKohteet: ['sijainti', 'lattia', 'seina_pinta','seina_runko','katto_runko','katto_pinta','iv_putket']},
   {huone: "keittio", tarkastusKohteet: ['sijainti', 'lattia', 'seina_pinta','seina_runko','katto_runko','katto_pinta','iv_putket']},
   {huone: "olohuone", tarkastusKohteet: ['sijainti', 'lattia', 'seina_pinta','seina_runko','katto_runko','katto_pinta','iv_putket']},
   {huone: "makuuhuone", tarkastusKohteet: ['sijainti', 'lattia', 'seina_pinta','seina_runko','katto_runko','katto_pinta']},
  ];


  form = this.fb.group({

  });o

  generateForm() {

    let group = {};


    const appartmentGroup = new FormGroup({
      asunto_lattia: new FormControl(''),
      asunto_walls: new FormControl(''),
      asunto_katto:  new FormControl(''),
    });

    group['appartment'] = appartmentGroup;

    let roomQuestionGroup = {};

    this.rooms.forEach( room => {
    room.tarkastusKohteet.forEach(inspectionTarget => {
      roomQuestionGroup[inspectionTarget] = new FormControl('');
    });
    
    group[room.huone] = new FormGroup(roomQuestionGroup);
    roomQuestionGroup = {};
  })
    console.log(group);

    this.form = this.fb.group(group);
    
    console.log(this.form);
  } 


  ngOnInit() {
    this.generateForm();
  }


  getData(): void{
    this.reportService.parseData(this.form.value).subscribe(
     (dataValue )=> {this.report.push(dataValue);   
     });
    console.log("reportti:")
    console.log(this.report)
  }

  onSubmit() {
    //call for service report = generateReport(this.form.value)
    this.report = [];
    window.scrollTo(0,0);
    this.getData();
  }

}
