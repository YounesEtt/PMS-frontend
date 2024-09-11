import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MessageService } from 'primeng/api'; // Import MessageService

@Component({
  selector: 'app-reject-comment-dialog',
  templateUrl: './reject-comment-dialog.component.html',
  styleUrls: ['./reject-comment-dialog.component.css']
})
export class RejectCommentDialogComponent {
  rejectForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<RejectCommentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private messageService: MessageService // Inject MessageService
  ) {
    this.rejectForm = this.fb.group({
      comment: ['', Validators.required]
    });
  }

  onCancel(): void {
    this.messageService.add({ severity: 'info', summary: 'Info', detail: 'Rejection cancelled' });
    this.dialogRef.close();
  }

  onReject(): void {
    if (this.rejectForm.valid) {
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Rejection submitted' });
      this.dialogRef.close(this.rejectForm.value.comment);
    } else {
      this.messageService.add({ severity: 'warn', summary: 'Warning', detail: 'Comment is required' });
    }
  }
}
