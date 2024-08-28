import { user } from './users/users.js'
import { wasteCategory } from './wastes/waste-categories.js'
import { waste } from './wastes/waste.js'

export const services = (app) => {
  // Configure user service
  app.configure(user)

  // Configure waste category service
  app.configure(wasteCategory)

  // Configure waste service
  app.configure(waste)

  // All services will be registered here
}
