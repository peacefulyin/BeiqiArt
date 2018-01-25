import {
  Injectable,
  Component,
  OnInit,
  EventEmitter,
  ComponentFactoryResolver,
  ComponentRef,
  ComponentFactory
} from '@angular/core';
import {Prompt} from "../../model/main/genneral.model";

@Injectable()
export class GenneralService implements OnInit {
  // 显示弹窗
  public DialogEmitter: EventEmitter<object> = new EventEmitter();

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

  /**
   * {component:,
   * title:,
   * subTitle:,
   * describe:,
   * imgUrl:}
   *
   * @param data
   */
  showDialog(data) {
    this.DialogEmitter.emit(data);
  }

  closeDialog() {
    this.DialogEmitter.emit({clear: true});
  }

  /**
   * {component:,
   * prompt?:{title:,info:,color:,},
   * showCover?:,
   * showLoading?:}
   *
   * @param data
   */


  showCover() {
    this.loadingEmitter.emit({showCover: true});
  }

  showPrompt(data: Prompt) {
    this.loadingEmitter.emit({...data, showPrompt: true});
  }

  showLoading() {
    this.loadingEmitter.emit({showLoading: true});
  }

  closeCover() {
    this.loadingEmitter.emit({showCover: false});
  }

  closePrompt() {
    this.loadingEmitter.emit({showPrompt: false});
  }

  closeLoading() {
    this.loadingEmitter.emit({showLoading: false});
  }

  clearAllLoadings() {
    this.loadingEmitter.emit({clear: true});
  }


}
