import { Directive, OnInit, Input, ViewContainerRef, TemplateRef } from '@angular/core';

@Directive({
  selector: '[myFor]'
})
export class ForDirective implements OnInit {

  @Input('myForEm') numbers: Number[];

  constructor(
    private container: ViewContainerRef,
    private template: TemplateRef<any>) {

  }

  ngOnInit(): void {
    for(let number of this.numbers){
      // $implicit porque o {{ n }} é um valor implicito, number é o $implicit
      this.container.createEmbeddedView(this.template, { $implicit: number });
    }
  }

}
