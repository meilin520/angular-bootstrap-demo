export type SubMenu = {
  id: string | number
  title: string
  url: string
}

export type Menu = {
  id: string|number
  title: string
  url?: string
  children?: SubMenu[]
}

export type Breadcrumb = {
  title: string
  href: string|boolean|undefined
}
