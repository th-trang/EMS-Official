import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModifyDashboardComponent } from '../../../dashboard/modify-dashboard/modify-dashboard.component';
import { ServerService } from '../../../server.service';

@Component({
  selector: 'app-range-modification',
  templateUrl: './range-modification.component.html',
  styleUrls: ['./range-modification.component.scss']
})
export class RangeModificationComponent {
  alarmCusForm: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private srv: ServerService,
    private _dialogRef: MatDialogRef<ModifyDashboardComponent>,
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
      if (this.data) {
        this.srv
          .updateData(this.data.tag, this.alarmCusForm.value)
          .subscribe({
            next: (val: any) => {
              this.srv.openSnackBar('detail updated!');
              this._dialogRef.close(true);
            },
            error: (err: any) => {
              console.error(err);
            },
          });
      }
    }
  }
}
