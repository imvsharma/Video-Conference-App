import { Outlet } from "react-router"

const AuthLayout = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-svh">
      <Outlet />
    </div>
    
  )
}

export default AuthLayout