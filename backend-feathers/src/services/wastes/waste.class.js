import { MongoDBService } from '@feathersjs/mongodb'

// Service class for managing waste items
export class WasteService extends MongoDBService {}

export const getOptions = (app) => {
  return {
    paginate: app.get('paginate'),
    Model: app.get('mongodbClient').then((db) => db.collection('waste_items'))
  }
}
