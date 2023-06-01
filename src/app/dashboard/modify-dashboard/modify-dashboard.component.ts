import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ServerService } from '../../server.service';

@Component({
  selector: 'app-modify-dashboard',
  templateUrl: './modify-dashboard.component.html',
  styleUrls: ['./modify-dashboard.component.scss']
})

export class ModifyDashboardComponent {
  dashForm: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private srv: ServerService,
    private _dialogRef: MatDialogRef<ModifyDashboardComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.dashForm = this._fb.group({
      tag: '',
      name: '',
      setPoint: '',
      realtimeValue: '',
      unit: '',
      designP: ''
    });
  }

  ngOnInit(): void {
    this.dashForm.patchValue(this.data);
  }

  onFormSubmit() {
    if (this.dashForm.valid) {
      if (this.data) {
        this.srv
          .updateData(this.data.tag, this.dashForm.value)
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
