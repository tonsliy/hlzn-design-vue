import { FunctionalComponent, h, VNode } from 'vue'
import { useRoute, useData } from 'vitepress'
import { DefaultTheme } from '../config'
import { joinUrl, isActive } from '../utils'

interface Header {
  title: string,
  level: number,
  slug: string,
  [propname:string]:any
}
interface HeaderWithChildren extends Header {
  children?: Header[]
}

export const SideBarLink: FunctionalComponent<{
  item: DefaultTheme.SideBarItem & { name?: string }
  depth?: number
}> = (props) => {
  const route = useRoute()
  const { site, frontmatter } = useData()
  const depth = props.depth || 1
  const maxDepth = frontmatter.value.sidebarDepth || 2 // todo add it into config

  const headers = route.data.headers
  const text = props.item.text
  const name = props.item.name
  const link = resolveLink(site.value.base, props.item.link)
  const children = (props.item as DefaultTheme.SideBarGroup).children
  const active = isActive(route, props.item.link)
  const childItems =
    depth < maxDepth
      ? createChildren(active, children, headers, depth + 1)
      : null

  return h('li', { class: 'sidebar-link' }, [
    h(
      link ? 'a' : 'p',
      {
        class: { 'sidebar-link-item': true, active, head: !link },
        href: link
      },
      [
        // h('span', { class: 'sidebar-link-item__name' }, name),
        h('span', { class: `sidebar-link-item__text level-${depth}`}, text),
      ]
    ),
    childItems
  ])
}

function resolveLink(base: string, path?: string): string | undefined {
  if (path === undefined) {
    return path
  }

  // keep relative hash to the same page
  if (path.startsWith('#')) {
    return path
  }

  return joinUrl(base, path)
}

function createChildren(
  active: boolean,
  children?: DefaultTheme.SideBarItem[],
  headers?: Header[],
  depth = 1
): VNode | null {
  if (children && children.length > 0) {
    return h(
      'ul',
      { class: 'sidebar-links' },
      children.map((c) => {
        return h(SideBarLink, { item: c, depth })
      })
    )
  }

  return active && headers
    ? createChildren(false, resolveHeaders(headers), undefined, depth)
    : null
}

function resolveHeaders(headers: Header[]): DefaultTheme.SideBarItem[] {
  return mapHeaders(groupHeaders(headers))
}

function groupHeaders(headers: Header[]): HeaderWithChildren[] {
  headers = headers.map((h) => Object.assign({}, h))
  let lastH2: HeaderWithChildren
  headers.forEach((h) => {
    if (h.level === 2) {
      lastH2 = h
    } else if (lastH2) {
      ;(lastH2.children || (lastH2.children = [])).push(h)
    }
  })
  return headers.filter((h) => h.level === 2)
}

function mapHeaders(headers: HeaderWithChildren[]): DefaultTheme.SideBarItem[] {
  return headers.map((header) => ({
    text: header.title,
    link: `#${header.slug}`,
    children: header.children ? mapHeaders(header.children) : undefined
  }))
}