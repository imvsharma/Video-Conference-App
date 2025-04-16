import { Outlet } from "react-router"
import {Provider} from 'react-redux'
import {store} from "./store/store"

 
function App() {
  return (
    <>
      <Provider store={store}>
        <Outlet />
      </Provider>
      
    </>
    // <div className="flex flex-col items-center justify-center min-h-svh">
    //   <LoginFormComponent />
    // </div>
  )
}
 
export default App