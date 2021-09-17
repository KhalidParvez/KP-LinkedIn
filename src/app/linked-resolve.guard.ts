import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Resolve, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LinkedinServiceService } from './linkedin-service.service';
import { LinkedInList } from './models/linkedin';

@Injectable({
  providedIn: 'root'
})

export class LinkedResolveGuard implements Resolve<Array<LinkedInList>> {
  constructor(
    private readonly linkedinServiceService:LinkedinServiceService,
  ) {

   }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): LinkedInList[] | Observable<LinkedInList[]> | Promise<LinkedInList[]> {
    return this.linkedinServiceService.getAllLinkedins();
  }
 
  
  
}
