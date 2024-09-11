import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserStoreService {
  private fullName = new BehaviorSubject<string>('');
  private role = new BehaviorSubject<string>('');

  setFullNameFromStore(fullName: string) {
    this.fullName.next(fullName);
  }

  getFullNameFromStore(): Observable<string> {
    return this.fullName.asObservable();
  }

  setRoleFromStore(role: string) {
    this.role.next(role);
  }

  getRoleFromStore(): Observable<string> {
    return this.role.asObservable();
  }
}
