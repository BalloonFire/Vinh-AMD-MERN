import { MongoDBService } from '@feathersjs/mongodb'

// Service class for waste categories
export class WasteCategoryService extends MongoDBService {}

export const getOptions = (app) => {
  return {
    paginate: app.get('paginate'),
    Model: app.get('mongodbClient').then((db) => db.collection('waste_categories'))
  }
}
