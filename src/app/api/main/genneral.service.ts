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
  // 显示弹窗
  public showDialogEmitter: EventEmitter<object> = new EventEmitter();
  public closeDialogEmitter: EventEmitter<object> = new EventEmitter();

  public loadingEmitter: EventEmitter<object> = new EventEmitter();


  // 显示加载动画
  public showLoadingEmitter: EventEmitter<boolean> = new EventEmitter();
  // 显示蒙版
  public showCoverEmitter: EventEmitter<boolean> = new EventEmitter();
  // 显示提示小弹窗
  public showPromptEmitter: EventEmitter<object> = new EventEmitter();
  private componentRef: ComponentRef<any>;

  constructor(private resolver: ComponentFactoryResolver) {
  }

  ngOnInit() {
  }

  showDialog(data) {
    this.showDialogEmitter.emit(data);
  }

  closeDialog() {
    this.closeDialogEmitter.emit();
  }

  loading(data) {
    this.loadingEmitter.emit(data);
  }

  showLoading(show) {
    this.showLoadingEmitter.emit(show);
  }

  showCover(show) {
    this.showCoverEmitter.emit(show);

  }

  showPrompt(data) {
      this.showPromptEmitter.emit(data);
  }

}
