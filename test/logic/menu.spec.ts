import { getNestedMenus, getMenusIdsForExclusion } from "../../src/logic/menu";

const menus = [
  { _id: '1', name: '1' },
  { _id: '2', name: '2', relatedId: '1' },
  { _id: '3', name: '3', relatedId: '1' },
  { _id: '4', name: '4' }
]

describe('Nested menus', () => {
  it('Should return the correct nested menus', () => {
    const nestedMenus = getNestedMenus(menus)
    expect(nestedMenus).toEqual([
      {
        id: '1',
        name: '1',
        submenus: [
          { id: '2', name: '2' },
          { id: '3', name: '3' }
        ],
      },
      { id: '4', name: '4' }
    ])
  })

  it('Should remove the menu and its submenus', () => {
    const menusIdsForExclusion = getMenusIdsForExclusion(menus, '1')
    expect(menusIdsForExclusion).toEqual(['1', '2', '3'])
  })
})