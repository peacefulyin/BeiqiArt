import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  ComponentFactory,
  ComponentRef
} from '@angular/core';
import {GenneralService} from "../../shared/api/main/genneral.service";
import {DialogComponent} from "../dialog/dialog.component";
import {LoadingComponent} from "../loading/loading.component";

@Component({
  selector: 'app-genneral',
  templateUrl: './genneral.component.html',
  styleUrls: ['./genneral.component.scss']
})


export class GenneralComponent implements OnInit, OnDestroy {
  private dialogComponentRef: ComponentRef<DialogComponent>;
  @ViewChild('dialogContainer', {read: ViewContainerRef}) dialogContainer: ViewContainerRef;

  private loadingComponentRef: ComponentRef<LoadingComponent>;
  @ViewChild('loadingContainer', {read: ViewContainerRef}) loadingContainer: ViewContainerRef;

  private dialogInstance;
  private loadingInstance;

  constructor(private resolver: ComponentFactoryResolver, private genneralService: GenneralService) {
  }

  ngOnInit() {
    this.dialogInit();
    this.loadingInit();
  }

  ngOnDestroy() {
    this.dialogComponentRef.destroy();
    this.loadingComponentRef.destroy();
  }

  // 弹窗组件初始化
  dialogInit() {
    this.genneralService.DialogEmitter.subscribe(data => {
      // 清楚原来的组件,初始化新组件
      if (!this.dialogInstance) {
        [this.dialogComponentRef, this.dialogInstance] = <[ComponentRef<DialogComponent>, any]>this.genInstance(DialogComponent)
      }
      if (data.clear) {
        this.dialogComponentRef.destroy();
        this.dialogInstance = null;
        return;
      }
      this.dialogInstance.title = data.title ? data.title : '';
      this.dialogInstance.subTitle = data.subTitle ? data.subTitle : '';
      this.dialogInstance.imgUrl = data.imgUrl ? data.imgUrl : '';
      this.dialogInstance.describe = data.describe ? data.describe : '';
    });
  }

  // 组件初始化
  genInstance(component) {
    const factory: ComponentFactory<never> = this.resolver.resolveComponentFactory(component);
    const componentRef = this.loadingContainer.createComponent(factory);
    return [componentRef, componentRef.instance];
  }

  loadingInit() {
    this.genneralService.loadingEmitter.subscribe(data => {

      // 获取初始化组件
      if (!this.loadingInstance) {
        [this.loadingComponentRef, this.loadingInstance] = <[ComponentRef<LoadingComponent>, any]>this.genInstance(LoadingComponent);
      }

      if (data.clear) {
        this.loadingComponentRef.destroy();
        this.loadingInstance = null;
        return;
      }

      // 判断是否显示cover或者loading状态
      if (data.hasOwnProperty('showCover')) {
        this.loadingInstance.showCover = data.showCover;
      }
      if (data.hasOwnProperty('showLoading')) {
        this.loadingInstance.showLoading = data.showLoading;
      }
      // 是否存在提示栏
      if (data.showPrompt) {
        this.loadingInstance.showPrompt = true;
        this.loadingInstance.promptTitle = data.title ? data.title : '';
        this.loadingInstance.promptInfo = data.info ? data.info : '';
        this.loadingInstance.promptColor = data.color ? data.color : 'info';
        if (data.autoHide) {
          setTimeout(() => {
            this.loadingInstance.showPrompt = false;
          }, 2000);
        }
      }
      // loadingComponent 清除条件判断
      if (!this.loadingInstance.showPrompt && !this.loadingInstance.showCover && !this.loadingInstance.showLoading) {
        this.loadingComponentRef.destroy();
        this.loadingInstance = null;

      }


    });
  }
}
