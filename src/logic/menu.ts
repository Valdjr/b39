import { IMenu, IMenus } from "../models/menu";

export function getNestedMenus(menus: IMenu[]) {
  return nestMenus(menus, null)
}

function nestMenus(menus: IMenu[], relatedId: string|null) {
  const nestedMenus = []
  const foundMenus = findMenusByRelatedIds(menus, relatedId)
  for (let menu of foundMenus) {
    let newMenu: IMenus = {
      id: menu._id,
      name: menu.name
    }
    let subMenu = nestMenus(menus, menu._id)
    if (subMenu && subMenu.length > 0) {
      newMenu.submenus = subMenu
    }
    nestedMenus.push(newMenu)
  }
  return nestedMenus
}

function findMenusByRelatedIds(menus: IMenu[], relatedId: string|null) {
  return menus.filter(menu => menu.relatedId == relatedId)
}

export function getMenusIdsForExclusion(menus: IMenu[], id: string) {
  const deleteMenus = [id]
  const foundMenus = findMenusByRelatedIds(menus, id)
  for (let menu of foundMenus) {
    const subMenusIdsForExclusion = getMenusIdsForExclusion(menus, menu._id)
    deleteMenus.push(...subMenusIdsForExclusion)
  }
  return deleteMenus
}