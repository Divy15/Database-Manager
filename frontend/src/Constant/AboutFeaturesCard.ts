type Feature = {
  title: string
  description: string
  icon: string
}

import building from "../assets/buildings.png"
import users from "../assets/user.png"
import database from "../assets/database.png"
import earth from "../assets/earth.png"

export const AboutFeatures: Feature[] = [
  {
    title: "Full Change History",
    description: "Track changes to tables, functions, triggers, and relationships.",
    icon: database,
  },
  {
    title: "Collaboration",
    description: "Know which developer made each change and why.",
    icon: users,
  },
  {
    title: "Documentation",
    description: "Add detailed notes for every database change.",
    icon: building,
  },
  {
    title: "Scalable",
    description: "Works across multiple projects, teams, and databases.",
    icon: earth,
  },
]
