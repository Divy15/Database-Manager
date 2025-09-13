type CounterCard = {
  title: string
  icon: string   // will hold the imported image path
  count: number
}

import building from "../assets/buildings.png"
import users from "../assets/user.png"
import database from "../assets/database.png"
import earth from "../assets/earth.png"

export const CounterSectionCard: CounterCard[] = [
  { title: "Companies Using", icon: building, count: 100 },
  { title: "Active Developers", icon: users, count: 50000 },
  { title: "Databases Handling", icon: database, count: 1000 },
  { title: "Countries Served", icon: earth, count: 10 },
]