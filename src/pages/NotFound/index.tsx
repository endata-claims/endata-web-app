import React from 'react'
import { useHistory } from 'react-router-dom'

const NotFound = () => {
  const token = localStorage.getItem('ACCESS_TOKEN')

  const history = useHistory()
  React.useEffect(() => {
    if(!token) history.push('/user/login')
    else history.push('/claims')
  }, [token])

  return (
    <>Not found 404</>
  )
}
export default NotFound