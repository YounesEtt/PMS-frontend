import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { RequestItemService } from '../../services/request-item.service';

@Component({
  selector: 'app-create-item-dialog',
  templateUrl: './create-item-dialog.component.html',
  styleUrl: './create-item-dialog.component.css'
})
export class CreateItemDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<CreateItemDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { nameItem: string },
    private requestItemService: RequestItemService
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  saveItem(): void {
    this.requestItemService.saveRequestItem({ nameItem: this.data.nameItem }).subscribe(
      response => {
        this.dialogRef.close(response);
      },
      error => {
        console.error('Error saving item:', error);
      }
    );
  }
}
