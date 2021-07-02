import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {

  public userForm : FormGroup;
  public skills:FormArray[]=[];


  constructor(private fb: FormBuilder) {
    this.userForm= this.fb.group({
      username: ['',[Validators.required,Validators.pattern('[A-Za-z]{1,32}')]],
      rollNo: ['',Validators.required],        //[ Validators.pattern('^[0-9]?$')]],
      address: ['',Validators.required],       //[Validators.pattern('^[A-Za-z \-]*$')]
      // address: this.fb.group({}),
      skill: this.fb.array([
        this.fb.control('')
      ])
    })

  }

  // public addressFormGroup(): FormGroup {
  //   return this.fb.group({
  //     skill: ['', Validators.required],
  //   })
  // }

  ngOnInit(): void {

  }
    
  get skill(){
    return this.userForm.get('skill') as FormArray
  }

  public onAddSkill(){
    this.skill.push(this.fb.control(''));
  }

  public onDeleteSkill(index : number){
    const deleteSkillItem = this.userForm.get('skill') as FormArray;
    deleteSkillItem.removeAt(index);
  }

 public  onSubmit(){
    console.log(this.userForm.value);
  }
}
