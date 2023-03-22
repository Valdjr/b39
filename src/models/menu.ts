import { model, Schema } from 'mongoose'

export interface IMenu {
    _id: string
    name: string
    relatedId?: string
}

const schema = new Schema<IMenu>({
    name: { type: String, unique: true, required: true },
    relatedId: { type: String, required: false },
})

export default model<IMenu>('menu', schema, 'menus')

export interface IMenus {
    id: string
    name: string
    submenus?: IMenus[]
}