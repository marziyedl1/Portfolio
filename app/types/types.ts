export interface ProjectBadgeType {
  label: string
}

export interface ProjectType {
  title: string
  role: string
  description: string
  badges: ProjectBadgeType[]
}
