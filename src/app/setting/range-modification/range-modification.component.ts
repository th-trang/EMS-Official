import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ServerService } from '../../server.service';

@Component({
  selector: 'app-range-modification',
  templateUrl: './range-modification.component.html',
  styleUrls: ['./range-modification.component.scss']
})
export class RangeModificationComponent implements OnInit{
  alarmCusForm: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private srv: ServerService,
    private _dialogRef: MatDialogRef<RangeModificationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.alarmCusForm = this._fb.group({
      tag: '',
      name: '',
      upperbound: '',
      lowerbound: ''
    });
  }

  ngOnInit(): void {
    this.alarmCusForm.patchValue(this.data);
  }

  onFormSubmit() {
    if (this.alarmCusForm.valid) {
      if(this.data) {
        this.srv.updateData(this.data.id, {...this.data,...this.alarmCusForm.value} )
        .subscribe({
          next: (val: any) => {
            alert("Data updated")
            this._dialogRef.close(true) 
          }, error(err: any) {
            console.log(err)
          },
        })
      }
    }
  }
}
