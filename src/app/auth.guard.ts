import { PatientService } from './services/patient.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private patientService: PatientService,
              private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const patientId = localStorage.getItem('patientId');
    if(patientId){
      this.patientService.patientId= +patientId; 
      return true;
    }
    else {
      this.router.navigate(["patient-login"]);
      this.patientService.patientId= 0;
      return false;
    }

  }
  
}
