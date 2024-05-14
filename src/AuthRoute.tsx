import { ReactNode } from 'react'
import { useAuth } from './hooks/useAuth'
import { Navigate } from 'react-router-dom'

type Props = {
  children: ReactNode
}

export const PrivateRoute = ({ children }: Props) => {
  const authInfo = useAuth();

  if (!authInfo.checked) {
    return <div>Loading...</div>
  }


  if (authInfo.isAuthenticated) {
    return <>{children}</>
  }

  return <Navigate to='/signin' />
}

export const GuestRoute = ({ children }: Props) => {
  const authInfo = useAuth();

  if (!authInfo.checked) {
    return <div>Loading...</div>
  }


  if (authInfo.isAuthenticated) {
    return <Navigate to='/' />
  }

  return <>{children}</>
}