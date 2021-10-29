import { Router } from 'express'
import SessionController from './controllers/SessionController'
import HouseControllers from './controllers/HouseControllers'
import DashboardController from './controllers/DashboardController'
import multer from 'multer'
import uploadConfig from './config/upload'

const routes = new Router()
const upload = multer(uploadConfig)

routes.get('/dashboard', DashboardController.show)
routes.post('/sessions', SessionController.store)
routes.post('/houses', upload.single('thumbnail') ,HouseControllers.store)
routes.get('/houses', HouseControllers.index)
routes.put('/houses/:house_id', upload.single('thumbnail') ,HouseControllers.update)
routes.delete('/houses', HouseControllers.destroy)



export default routes