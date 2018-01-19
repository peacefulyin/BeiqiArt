import {
  Component,
  OnInit,
  OnDestroy,
  EventEmitter,
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

  private hasLoadingComponent: boolean = false;

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

  dialogInit() {
    this.genneralService.showDialogEmitter.subscribe(data => {
      this.dialogContainer.clear();
      const factory: ComponentFactory<DialogComponent> = this.resolver.resolveComponentFactory(data.component);
      this.dialogComponentRef = this.dialogContainer.createComponent(factory);
      this.dialogComponentRef.instance.title = data.title;
      this.dialogComponentRef.instance.subTitle = data.subTitle;
      this.dialogComponentRef.instance.imgUrl = data.imgUrl;
      this.dialogComponentRef.instance.detail = data.detail;
    });
    this.genneralService.closeDialogEmitter.subscribe(() => {
      this.dialogComponentRef.destroy();
    });

  }

  loadingInit() {
    this.genneralService.loadingEmitter.subscribe(data => {
      if (data.clear) {
        this.loadingComponentRef.destroy();
        return;
      }
      this.loadingContainer.clear()
      const factory: ComponentFactory<LoadingComponent> = this.resolver.resolveComponentFactory(data.component);
      this.loadingComponentRef = this.loadingContainer.createComponent(factory);
      this.loadingComponentRef.instance.showCover = data.showCover ? data.showCover : false;
      this.loadingComponentRef.instance.showLoading = data.showLoading ? data.showCover : false;
      if (data.prompt) {
        console.log(data.prompt.color)
        this.loadingComponentRef.instance.showPrompt = true;
        this.loadingComponentRef.instance.promptTitle = data.prompt.title ? data.prompt.title : '';
        this.loadingComponentRef.instance.promptInfo = data.prompt.info ? data.prompt.info : '';
        this.loadingComponentRef.instance.promptColor = data.prompt.color ? data.prompt.color : 'info';
        setTimeout(() => {
          this.loadingComponentRef.instance.showPrompt = false;
          if (!data.prompt && !data.showCover && !data.showLoading) {
            this.loadingComponentRef.destroy();
          }
        }, 2000);
      }

      if (!data.prompt && !data.showCover && !data.showLoading) {
        this.loadingComponentRef.destroy();
      }


    });
  }
}
