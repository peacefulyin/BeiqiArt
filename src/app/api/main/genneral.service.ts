import {
  Injectable,
  Component,
  OnInit,
  EventEmitter,
  ComponentFactoryResolver,
  ComponentRef,
  ComponentFactory
} from '@angular/core';

@Injectable()
export class GenneralService implements OnInit {
  public showDialogEmitter: EventEmitter<object> = new EventEmitter();
  public closeDialogEmitter: EventEmitter<object> = new EventEmitter();
  private componentRef: ComponentRef<any>;

  constructor(private resolver: ComponentFactoryResolver) {
  }

  ngOnInit() {
  }

  showDialog(data) {
    this.showDialogEmitter.emit(data);
  }

  closeDialog() {
    this.closeDialogEmitter.emit()
  }

}
