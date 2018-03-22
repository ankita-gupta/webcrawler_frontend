import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RestService } from './services/rest_service';
import { URLS } from './common/url-constant';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  form: FormGroup;
  images:any;
  msgerror:string;
  error:boolean=false
  constructor(private _formBuilder:FormBuilder, private _restService:RestService){

  }
  ngOnInit(){
    this.form = this._formBuilder.group({
      'url':['',Validators.required]
    })
  }
  submit(){
    let data={
      inputURL:this.form.value.url
    }
    let dataObj1 = JSON.stringify(data)
    this._restService.post(URLS.SCRAPDATA, dataObj1).subscribe(
      (result) => {
        this.images = result.all_images;
        this.error = false;
      },
      (err)=>{
        this.error = true;
        this.msgerror = "Unable to browse the url."
      }
    )
  }
}
