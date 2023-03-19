export interface RequestArticle {
  author: string
  categoryId: string
  pageNo: number
  pageSize: number
  tagId: string
  title: string
}
export interface Article {
  author: string
  categoryId: number
  categoryName?: string
  content: string
  createDate: string
  id: number
  introduction: string
  tagIds: string
  tags?: string
  thumbnail: string
  title: string
  updateDate: string | null
  views: string | number | null
}
