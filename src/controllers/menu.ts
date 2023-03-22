import { Request, Response } from 'express'
import { getNestedMenus, getMenusIdsForExclusion } from '../logic/menu'
import Menu from '../models/menu'

export default {
    create: async (req: Request, res: Response): Promise<Response> => {
        try {
            const { id } = await Menu.create(req.body)

            return res.status(201).json({
                id,
            })
        } catch (err) {
            return res.status(400).json({
                message: 'Name is invalid'
            })
        }
    },
    getAll: async (_: Request, res: Response): Promise<Response> => {
        const menus = await Menu.find()
        const nestedMenus = getNestedMenus(menus)

        return res.json(nestedMenus)
    },
    delete: async (req: Request, res: Response): Promise<Response> => {
        const menus = await Menu.find()
        const menusForExclusion = getMenusIdsForExclusion(menus, req.params.id)

        await Menu.deleteMany({_id: {$in: menusForExclusion}})
        return res.status(200).json()
    },
}
