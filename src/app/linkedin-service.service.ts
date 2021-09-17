import { Injectable } from '@angular/core';
import { LinkedInList,LinkedinPost, LinkedInComments,LinkedInLike} from './models/linkedin';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LinkedinServiceService {
  public linkedInDatas:Array<LinkedInList>;
  private readonly baseurl : string = "https://localhost:44309/api/LinkedIns";
  formData: LinkedinPost = new LinkedinPost();
  constructor(
    private readonly http:HttpClient,
  ) {
    this.linkedInDatas = new Array<LinkedInList>();
   }
// Post methods Two ways
   postLinkedin1(data:LinkedinPost):Observable<Array<LinkedinPost>>{
     return this.http.post<Array<LinkedinPost>>(`${this.baseurl}`,data);
   }
// Or
  postLinkedin(data:LinkedinPost):Observable<Array<LinkedinPost>>{
    return this.http.post<Array<LinkedinPost>>(`${this.baseurl}`,data);
  }

  // Get All LinkedIn Data
   getAllLinkedins(): Observable<Array<LinkedInList>>{
    return this.http.get<Array<LinkedInList>>(`${this.baseurl}`);
   }

   async getAllLinkedinsAnsyc(): Promise<Array<LinkedInList>>{
    return await this.http.get<Array<LinkedInList>>(`${this.baseurl}`).toPromise();
   }
   // Post Method likes
   postLinkedinLikes(id:number |undefined,data:LinkedInLike):Observable<Array<LinkedInLike>>{
    return this.http.post<Array<LinkedInLike>>(`${this.baseurl}/like/${id}`,data);
  }

  postLinkedinComments(id:number|undefined,data:LinkedInComments):Observable<Array<LinkedInComments>>{
    return this.http.post<Array<LinkedInComments>>(`${this.baseurl}/comments/${id}`,data);
  }
  deletLinkedin(id:number|undefined):Observable<Array<LinkedinPost>>{
    return this.http.delete<Array<LinkedinPost>>(`${this.baseurl}/delete/${id}`);
  }

}
