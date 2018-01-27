import {Component, OnInit} from '@angular/core';
import {MediaService} from "../../../shared/api/main/media.service";
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})
export class VideoListComponent implements OnInit {
  public VideoIndex: number;
  public defaultVideoList;
  public videoList;
  public listTile;

  constructor(private videoService: MediaService,
              private router: Router,
              private route: ActivatedRoute) {
    this.getVideos();
  }

  private getVideos() {
    if (!sessionStorage.getItem('hasVideo')) {
      this.videoService.getColorsDefaultList().subscribe(data => {
        this.defaultVideoList = data;
        this.selectList(this.defaultVideoList);
        sessionStorage.setItem("defaultVideoList", this.defaultVideoList);
        sessionStorage.setItem("hasVideo", 'true');
      });
    } else {
      this.defaultVideoList = JSON.parse(sessionStorage.getItem('defaultVideoList'));
      this.selectList(this.defaultVideoList);
    }
  }

  private selectList(defaultList) {
    this.route.params.subscribe((data) => {
      const videoName = data.name;
      this.videoList = defaultList.find(list => {
        return list.title === videoName;
      });
    });
  }

  ngOnInit() {
  }

}
