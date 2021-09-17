
import { Directive, TemplateRef, ViewContainerRef,Input } from '@angular/core';

// Strucal directive

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  hasView= false;

  constructor(private readonly templeteRef:TemplateRef<any>,
    private readonly viewContainer:ViewContainerRef) { 
  }

  @Input() set appUnless(condition:boolean){
    if(!condition && !this.hasView){
      this.viewContainer.createEmbeddedView(this.templeteRef);
      this.hasView= true;

    }else if(condition && !this.hasView){
      this.viewContainer.clear();
      this.hasView= false;

    }
  }

}


