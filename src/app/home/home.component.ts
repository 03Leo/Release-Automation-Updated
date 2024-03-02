import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{


  appname !: string;
  ind !: any;
  // myForm: any;
  p: number = 1;

  form = new FormGroup({
    appname: new FormControl(''),    // Default value is an empty string
    name: new FormControl(''),
    relstatus:new FormControl(''),
    requestor: new FormControl(''),
    CRno:new FormControl('')
  });
constructor(){}

  deployment: any = [
    
    {
      Application : "",
      Script_Type : "",
      Script_Name : "",
      Host : "",
      Infra_Type : "",
      Execution_Sequence : "",
      Seeded_Flag : "",
    },
    {
      Application : "SSUE",
      Script_Type : "sakjhf",
      Script_Name : "sdlfhsd",
      Host : "dlhgdl",
      Infra_Type : "dlfghdl",
      Execution_Sequence : "dlfh",
      Seeded_Flag : "sdlfgh"
    },

    {
      Application : "NDSA",
      Script_Type : "sakjhf",
      Script_Name : "sdlfhsd",
      Host : "dlhgdl",
      Infra_Type : "dlfghdl",
      Execution_Sequence : "dlfh",
      Seeded_Flag : "sdlfgh",
    },

    {
      Application : "SSUE",
      Script_Type : "sakjhf",
      Script_Name : "sdlfhsd",
      Host : "dlhgdl",
      Infra_Type : "dlfghdl",
      Execution_Sequence : "dlfh",
      Seeded_Flag : "sdlfgh",
    },

    {
      Application : "SLM",
      Script_Type : "sakjhf",
      Script_Name : "sdlfhsd",
      Host : "dlhgdl",
      Infra_Type : "dlfghdl",
      Execution_Sequence : "dlfh",
      Seeded_Flag : "sdlfgh",
    },

    {
      Application : "SSUE",
      Script_Type : "sakjhf",
      Script_Name : "sdlfhsd",
      Host : "dlhgdl",
      Infra_Type : "dlfghdl",
      Execution_Sequence : "dlfh",
      Seeded_Flag : "sdlfgh",
    },

    {
      Application : "NDSA",
      Script_Type : "sakjhf",
      Script_Name : "sdlfhsd",
      Host : "dlhgdl",
      Infra_Type : "dlfghdl",
      Execution_Sequence : "dlfh",
      Seeded_Flag : "sdlfgh",
    }

  ]
  
  // headers = ["Release Number",	"Release Name",	"Application",	"CR Number",	"Release Start Date",	"Release End Date",	"Release Status",	"Requestor",	"Created By",	"Creation Date",	"Last Updated By",	"Last Update Date"];

  rows: any = [
    {
      Release_Number : "12345",
      Release_Name : "ABC12345",
      Application : "SSUE",
      CR_Number : "ABC12345",
      Release_Start_Date : "ABC12345",
      Release_End_Date : "ABC12345",
      Release_Status : "ABC12345",
      Requestor : "ABC12345",
      Created_By : "ABC12345",
      Creation_Date : "ABC12345",
      Last_Updated_By : "ABC12345",
      Last_Update_Date : "ABC12345"
    },

    {
      Release_Number : "ABC12345",
      Release_Name : "ABC12345",
      Application : "CNA",
      CR_Number : "ABC12345",
      Release_Start_Date : "ABC12345",
      Release_End_Date : "ABC12345",
      Release_Status : "ABC12345",
      Requestor : "ABC12345",
      Created_By : "ABC12345",
      Creation_Date : "ABC12345",
      Last_Updated_By : "ABC12345",
      Last_Update_Date : "ABC12345"
    },

    {
      Release_Number : "ABC12345",
      Release_Name : "ABC12345",
      Application : "NXMT",
      CR_Number : "ABC12345",
      Release_Start_Date : "ABC12345",
      Release_End_Date : "ABC12345",
      Release_Status : "ABC12345",
      Requestor : "ABC12345",
      Created_By : "ABC12345",
      Creation_Date : "ABC12345",
      Last_Updated_By : "ABC12345",
      Last_Update_Date : "ABC12345"
    },

    {
      Release_Number : "ABC12345",
      Release_Name : "ABC12345",
      Application : "SSUE",
      CR_Number : "ABC12345",
      Release_Start_Date : "ABC12345",
      Release_End_Date : "ABC12345",
      Release_Status : "ABC12345",
      Requestor : "ABC12345",
      Created_By : "ABC12345",
      Creation_Date : "ABC12345",
      Last_Updated_By : "ABC12345",
      Last_Update_Date : "ABC12345"
    },

    {
      Release_Number : "ABC1234",
      Release_Name : "ABC12345",
      Application : "SSUE",
      CR_Number : "ABC12345",
      Release_Start_Date : "ABC12345",
      Release_End_Date : "ABC12345",
      Release_Status : "ABC12345",
      Requestor : "ABC12345",
      Created_By : "ABC12345",
      Creation_Date : "ABC12345",
      Last_Updated_By : "ABC12345",
      Last_Update_Date : "ABC12345"
    },

    {
      Release_Number : "ABC12",
      Release_Name : "ABC12345",
      Application : "Support Central",
      CR_Number : "ABC12345",
      Release_Start_Date : "ABC12345",
      Release_End_Date : "ABC12345",
      Release_Status : "ABC12345",
      Requestor : "ABC12345",
      Created_By : "ABC12345",
      Creation_Date : "ABC12345",
      Last_Updated_By : "ABC12345",
      Last_Update_Date : "ABC12345"
    },

    {
      Release_Number : "ABC",
      Release_Name : "ABC12345",
      Application : "Oracle Project",
      CR_Number : "ABC12345",
      Release_Start_Date : "ABC12345",
      Release_End_Date : "ABC12345",
      Release_Status : "ABC12345",
      Requestor : "ABC12345",
      Created_By : "ABC12345",
      Creation_Date : "ABC12345",
      Last_Updated_By : "ABC12345",
      Last_Update_Date : "ABC12345"
    },

    {
      Release_Number : "ABC12345",
      Release_Name : "ABC12345",
      Application : "SLM",
      CR_Number : "ABC12345",
      Release_Start_Date : "ABC12345",
      Release_End_Date : "ABC12345",
      Release_Status : "ABC12345",
      Requestor : "ABC12345",
      Created_By : "ABC12345",
      Creation_Date : "ABC12345",
      Last_Updated_By : "ABC12345",
      Last_Update_Date : "ABC12345"
    },

    {
      Release_Number : "ABC12345",
      Release_Name : "ABC12345",
      Application : "SORA",
      CR_Number : "ABC12345",
      Release_Start_Date : "",
      Release_End_Date : "ABC12345",
      Release_Status : "ABC12345",
      Requestor : "ABC12345",
      Created_By : "ABC12345",
      Creation_Date : "ABC12345",
      Last_Updated_By : "ABC12345",
      Last_Update_Date : "ABC12345"
    },

    {
      Release_Number : "ABC12345",
      Release_Name : "ABC12345",
      Application : "NDSA",
      CR_Number : "ABC12345",
      Release_Start_Date : "ABC12345",
      Release_End_Date : "ABC12345",
      Release_Status : "ABC12345",
      Requestor : "ABC12345",
      Created_By : "ABC12345",
      Creation_Date : "ABC12345",
      Last_Updated_By : "ABC12345",
      Last_Update_Date : "ABC12345"
    },
  ]

  Search:boolean = true;
  visible:boolean = false;
  dat: any = [];

  onSubmit(){
    if (this.form.valid) {
      // Process the form data
      console.log(this.form.value);
      // You can perform further actions here
    }
  }

  clearForm(){
    this.visible=false;
    this.visible2=false;
    this.visible3=false;
    this.form.reset();
  }
  onclick(){
    this.Search = this.Search;
    this.visible = this.Search;
    this.dat = [];
    this.rows.forEach((data:any) => {
      if(this.appname == data.Application){
        this.dat.push(data);
      }
    });
    
  }

   rldat: any =[];
   rad:boolean=true;
   visible2:boolean=false;

  rdetail(index:number){
    this.rad= this.rad;
    this.visible2= this.rad;
     this.rldat=[];
     this.rldat.push(this.dat[index]);
     console.log(index);
  }

  Pull_CR_Information:boolean = true;
  visible3:boolean = false;

  depdat: any = [];

  onclick1(){
    this.Pull_CR_Information = this.Pull_CR_Information;
    this.visible3 = this.Pull_CR_Information;
    this.depdat=[];
    this.deployment.forEach((i:any) => {
      if(this.appname == i.Application){
        this.depdat.push(i);
      }
    });
    console.log(this.depdat);
  }

  // adding(){
  //   this.depdat=[];
  //   const newRow =  { column1: 'New Data 1', column2: 'New Data 2', column3: 'New Data 3' };
  //   this.depdat.unshift(newRow);
  //   console.log(newRow);
  // }

  // del(index:number){
  //   this.depdat.splice(index, 1);
  // }








  // fieldArray: Array<any> = [];
  InsertDat: any = {};

  add() {
      // this.depdat.push(this.InsertDat)
      this.depdat.push(this.InsertDat);
    console.log(this.depdat);
  }

  del(index: number) {
      this.depdat.splice(index, 1);
      console.log(index);
  }

  Save() {
    
    this.InsertDat = {};
      console.log(this.depdat);
  }





}

