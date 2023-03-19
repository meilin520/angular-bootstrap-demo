import { HttpErrorHandler } from './../../../http-error-handler.service';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { HandleError } from "../../../http-error-handler.service";
import { RequestArticle, Article } from 'src/app/types/article-list.type';
import { catchError, Observable, tap } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'my-auth-token'
  })
}

interface Config {
  heroesUrl: string;
  textfile: string;
  date: any;
}

@Injectable()
export class ArticleListService {
  private articleUrl = 'api/articles'
  private configUrl = 'assets/config.json'

  private handleError: HandleError;

  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('ArticleListService')
  }

  searchArticles(params: RequestArticle): Observable<Article []> {
    const options = params ? params : {};
    return this.http.post<Article[]>(this.articleUrl, options, httpOptions)
      .pipe(
        catchError(this.handleError<Article[]>('searchArticles', []))
      )
  }

  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(this.articleUrl)
    .pipe(
      catchError(this.handleError<Article[]>('getArticles', []))
    );
  }

  getArticleById(id: number): Observable<Article> {
    const url = `${this.articleUrl}/${id}`;
    return this.http.get<Article>(url)
    .pipe(
      tap(_=>console.log(`fetched article id=${id}`)),
      catchError(this.handleError<Article>(`getArticleById id=${id}`))
    )
  }

  addArticle(article: Article): Observable<Article> {
    return this.http.post<Article>(this.articleUrl, article, httpOptions)
    .pipe(
      tap((newArticle: Article) => console.log(`成功添加一条id=${newArticle.id}的新文章`)),
      catchError(this.handleError<Article>('addArticle'))
      )
  }

  updateArticle(article: Article): Observable<Article> {
    return this.http.put<Article>(this.articleUrl, article, httpOptions)
    .pipe(
      tap(_=>console.log(`成功更新id=${article.id}的文章`),
      catchError(this.handleError<Article>('updateArticle'))
      )
    )
  }

  deleteArticle(id: number): Observable<Article> {
    const url = `${this.articleUrl}/${id}`;
    return this.http.delete<Article>(url)
    .pipe(
      tap(_=> console.log(`成功删除id=${id}的文章`),
      catchError(this.handleError<Article>('deleteArticle'))
      )
    )
  }

  getConfig() {
    return this.http.get<Config>(this.configUrl)
    .subscribe((data: Config) => console.log(data)
    );

  }
}
