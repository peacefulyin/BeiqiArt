export class Menu {
  title:string;
  url: string;
  constructor(title, url) {
    this.title = title;
    this.url = url;
  }
}

export const menu:Menu[] = [
  new Menu('首页', '/'),
  new Menu('视频', '/videoMaster'),
  new Menu('教师', '/teachers'),
  new Menu('申请', '/enroll'),
  new Menu('文章', '/article/firstPage'),
  new Menu('课程', '/course'),
]

