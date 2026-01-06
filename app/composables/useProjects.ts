import type { ProjectType } from '@/types'
import { companiesProject, gitProjects } from '@/data'

export const useProjects = () => {
  return {
    gitProjects: readonly(gitProjects) as readonly ProjectType[],
    companiesProject: readonly(companiesProject) as readonly ProjectType[],
  }
}
