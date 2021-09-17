import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDelayRendering]'
})
export class DelayRenderingDirective {
  waitTime: number | undefined;

  constructor(
    private readonly template:TemplateRef<any>,
    private container: ViewContainerRef
  ) { 
  }

  @Input() public set appDelayRendering(delayTime : number) {
    this.waitTime = delayTime;
  }
  
  // @Input() appDelayRendering:number =0;

  ngOnInit(): void {

    setTimeout(()=>{
      this.container.createEmbeddedView(this.template);
    },this.waitTime)

  }

}
