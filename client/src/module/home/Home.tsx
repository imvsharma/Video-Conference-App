import Header from "@/components/app/header";
import AppSidebar from "@/components/app/sidebar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { useGetUserDetailsQuery } from "@/services/user.services";
import { setCredentials } from "@/store/slices/authSlice";
import { RootState } from "@/store/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router";

const Home = () => {
  const userInfo = useSelector((state: RootState) => state.auth.userInfo);

  const { data, isFetching, isSuccess, isError } = useGetUserDetailsQuery(
    userInfo.email,
    { pollingInterval: 60000 }
  );
  const dispatch = useDispatch();
  useEffect(() => {
    if (data) dispatch(setCredentials(data));
  }, [data, dispatch, userInfo]);

  if (isFetching) {
    return (
      <div>Loading....</div>
    )
  }

  if(isError) {
    return (
      <div>Error occured</div>
    )
  }

  if(isSuccess) {
    return (
      <SidebarProvider>
       <AppSidebar userInfo={userInfo} variant="inset" />
       <SidebarInset>
         <Header />
         <div className="flex flex-1 flex-col">
           <div className="@container/main flex flex-1 flex-col gap-2">
             <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
               <Outlet />
             </div>
           </div>
         </div>
       </SidebarInset>
     </SidebarProvider>
   );
  }
  
};

export default Home;
