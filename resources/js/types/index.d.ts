export interface User {
  id: number
  name: string
  email: string
  position?: string
  avatar?: string
  is_team?: boolean
  bio?: string | null
}

export interface PageProps {
  auth: {
    user: User | null
  }
  errors: Record<string, string>
  flash?: {
    success?: string
    error?: string
    message?: string
  }
  [key: string]: any
} 