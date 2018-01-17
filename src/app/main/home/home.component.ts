import {
  Component,
  OnInit,
  EventEmitter,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  ComponentFactory,
  ComponentRef
} from '@angular/core';
import {DialogComponent} from "../../components/dialog/dialog.component";
import {GenneralService} from "../../api/main/genneral.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.scss']
})

export class HomeComponent implements OnInit {
  private componentRef: ComponentRef<DialogComponent>;
  @ViewChild('dialogContainer', {read: ViewContainerRef}) container: ViewContainerRef

  constructor(private resolver: ComponentFactoryResolver, private generalService: GenneralService) {
  }

  ngOnInit() {
    this.dialogInit();
  }

  dialogInit() {
    this.generalService.showDialogEmitter.subscribe(data => {
      this.container.clear();
      const factory: ComponentFactory<DialogComponent> = this.resolver.resolveComponentFactory(data.component);
      this.componentRef = this.container.createComponent(factory);
      this.componentRef.instance.title = data.title;
    });
    this.generalService.closeDialogEmitter.subscribe(() =>{
      this.componentRef.destroy();

    });
  }

}
