import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

  }
  
  userForm= this.fb.group({
    username: ['',Validators.required,Validators.pattern('^[A-Za-z \-]*$')],
    rollNo: [''],        //[ Validators.pattern('^[0-9]?$')]],
    address: [''],       //[Validators.pattern('^[A-Za-z \-]*$')]
    // address: this.fb.group({}),
    skill: this.fb.array([
      this.fb.control(''),
    ])
  });

  get skill(){
    return this.userForm.get('skill') as FormArray
  }

  onAddSkill(){
    this.skill.push(this.fb.control(''));
  }

  onDeleteSkill(index:number){
    const deleteSkillItem = this.userForm.get('skill') as FormArray;
    deleteSkillItem.removeAt(index=1);
  }

  onSubmit(value:any){
    console.log(value);
  }
}
