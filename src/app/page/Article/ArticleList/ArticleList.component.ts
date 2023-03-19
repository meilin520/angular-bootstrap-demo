import { Component, OnInit } from '@angular/core';
import { ArticleListService } from './ArticleList.service';
import { Article, RequestArticle } from 'src/app/types/article-list.type';

@Component({
  selector: 'app-ArticleList',
  templateUrl: './ArticleList.component.html',
  styleUrls: ['./ArticleList.component.sass'],
  providers: [ArticleListService],
})

export class ArticleListComponent implements OnInit {
  articles: Article[] = [];

  constructor(private articleListService: ArticleListService) { }

  ngOnInit() {
    this.getArticle();
  }

  search(){
    const params: RequestArticle = {
      author: '',
      categoryId: '',
      pageNo: 1,
      pageSize: 10,
      tagId: '',
      title: '',
    }
    // this.articleListService.searchArticles(params).subscribe(res=>{
    //   console.log(res,999)
    // });
  }
  // 根据id获取指定文章
  getArticleById(id: number){
    this.articleListService.getArticleById(id).subscribe(res=>{
      console.log(res,9999);

    });
  }

  getArticle(){
    this.articleListService.getArticles().subscribe(res=>{
      this.articles = res;
      console.log(this.articles);

    })
  }

  addArticle(){
    console.log('添加数据');

    const params: Article = {
      id: Math.ceil(Math.random()*1000),
      author: 'omniverse',
      categoryId: 1,
      content: '内容',
      createDate: '2023-03-19',
      introduction: '介绍',
      tagIds: '5',
      thumbnail: '...',
      title: '标题啦',
      updateDate: null,
      views: null,
    }
    this.articleListService.addArticle(params).subscribe(_=>{
      this.getArticle();
    })
  }

  getConfigInfo(){
    this.articleListService.getConfig();
  }
}
