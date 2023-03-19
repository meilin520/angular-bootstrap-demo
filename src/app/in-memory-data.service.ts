import { Article } from 'src/app/types/article-list.type';
import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const articles = [
      { "id": 22, "title": "2023 IT行业前端发展趋势是什么？", "author": "西门吹风", "introduction": "随着JavaScript编程语言成功挤位全球最爱欢迎的编程语言后，下后前端的发展的道路会越来越广阔。", "thumbnail": "http://www.omniverse.top/upload/images/20221209131809.jpeg", "tagIds": "5", "categoryId": 1, "content": "<p></p><p><span style=\"font-size: 18px;\">以下是2021年8月和2022年8年，全球最受欢迎编程语言前15排行对比图：</span></p><img style=\"max-width: 100%;\" src=\"http://www.omniverse.top/upload/images/20221209132618.png\" class=\"fr-fic fr-dii\"><br><p></p>", "views": null, "createDate": "2022-12-09", "updateDate": null, "categoryName": "前端", "tags": "JavaScript" },
      { "id": 21, "title": "人类离月球居住还有多久？", "author": "omniverse", "introduction": "简介", "thumbnail": "http://192.168.32.1:8081/upload/20210523165628.jpg", "tagIds": "5", "categoryId": 1, "content": "<p><img src=\"http://192.168.32.1:8081/upload/20210523165334.jpg\" class=\"fr-fic fr-dii\"><br></p>", "views": null, "createDate": "2021-05-23", "updateDate": null, "categoryName": "前端", "tags": "JavaScript" },
      { "id": 20, "title": "JavaScript的明天在哪儿？", "author": "omniverse", "introduction": "JavaScript的明天在哪儿？这个问题已经有了答案，在2021年，编程界", "thumbnail": "http://192.168.32.1:8081/upload/20210520180405.jpg", "tagIds": "5", "categoryId": 1, "content": "<p>这里是内容部分</p>", "views": null, "createDate": "2021-05-20", "updateDate": null, "categoryName": "前端", "tags": "JavaScript" },
      { "id": 19, "title": "JavaScript的明天在哪儿？", "author": "omniverse", "introduction": "JavaScript的明天在哪儿？这个问题已经有了答案，在2021年，编程界的", "thumbnail": "http://192.168.32.1:8081/upload/20210520180405.jpg", "tagIds": "5", "categoryId": 1, "content": "<p>这里是内容部分</p>", "views": null, "createDate": "2021-05-20", "updateDate": null, "categoryName": "前端", "tags": "JavaScript" },
      { "id": 13, "title": "哥斯拉大战金刚是真的？", "author": "omniverse", "introduction": "这是一条介绍", "thumbnail": "http://www.omniverse.top/upload/images/picture.jpeg", "tagIds": "5,6", "categoryId": 1, "content": "这是内容部分", "views": 100, "createDate": "2021-05-08", "updateDate": null, "categoryName": "前端", "tags": "JavaScript,JAVA" },
      { "id": 12, "title": "哥斯拉大战金刚是真的？", "author": "omniverse", "introduction": "这是一条介绍", "thumbnail": "http://www.omniverse.top/upload/images/picture.jpeg", "tagIds": "5,6", "categoryId": 1, "content": "这是内容部分", "views": 100, "createDate": "2021-05-08", "updateDate": null, "categoryName": "前端", "tags": "JavaScript,JAVA" },
      { "id": 11, "title": "哥斯拉大战金刚是真的？", "author": "omniverse", "introduction": "这是一条介绍", "thumbnail": "http://www.omniverse.top/upload/images/picture.jpeg", "tagIds": "5,6", "categoryId": 1, "content": "这是内容部分", "views": 100, "createDate": "2021-05-08", "updateDate": null, "categoryName": "前端", "tags": "JavaScript,JAVA" },
      { "id": 10, "title": "哥斯拉大战金刚是真的？", "author": "omniverse", "introduction": "这是一条介绍", "thumbnail": "http://www.omniverse.top/upload/images/picture.jpeg", "tagIds": "5,6", "categoryId": 1, "content": "这是内容部分", "views": 100, "createDate": "2021-05-08", "updateDate": null, "categoryName": "前端", "tags": "JavaScript,JAVA" },
      { "id": 9, "title": "哥斯拉大战金刚是真的？", "author": "omniverse", "introduction": "这是一条介绍", "thumbnail": "http://www.omniverse.top/upload/images/picture.jpeg", "tagIds": "5,6", "categoryId": 1, "content": "这是内容部分", "views": 100, "createDate": "2021-05-08", "updateDate": null, "categoryName": "前端", "tags": "JavaScript,JAVA" },
      { "id": 8, "title": "哥斯拉大战金刚是真的？", "author": "omniverse", "introduction": "这是一条介绍", "thumbnail": "http://www.omniverse.top/upload/images/picture.jpeg", "tagIds": "5,6", "categoryId": 6, "content": "这是内容部分", "views": 100, "createDate": "2021-05-08", "updateDate": null, "categoryName": "Linux系统", "tags": "JAVA,JavaScript" }
    ]

    return { articles }
  }

  genId(articles: Article[]): number|string {
    return articles.length > 0 ? Math.max(...articles.map(article => article.id)) + 1 : 11;
  }

}
