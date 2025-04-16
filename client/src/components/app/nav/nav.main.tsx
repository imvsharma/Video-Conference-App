import { SidebarGroup, SidebarGroupContent, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { VideoIcon, type LucideIcon } from "lucide-react";

type NavItem = {
  title: string, 
  url: string, 
  icon?: LucideIcon
}

const MainNav = ({ items}: {items: NavItem[]}) => {
  return (
    <SidebarGroup className=" p-2.5">
      <SidebarGroupContent className="flex flex-col gap-2">
        <SidebarMenu>
          <SidebarMenuItem className="flex items-center gap-2">
            <SidebarMenuButton tooltip="Start Personal Meeting" className="h-9 text-base min-w-8 bg-primary text-primary-foreground duration-200 ease-linear hover:bg-primary/90 hover:text-primary-foreground active:bg-primary/90 active:text-primary-foreground">
              <VideoIcon size={32} />
              <span>Start Personal Meeting</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem className="flex items-center gap-4 my-1.5" key={item.title}>
              <SidebarMenuButton tooltip={item.title} className="min-w-8 cursor-pointer">
                {item.icon && <item.icon className="w-10 h-10" />}
                <span className="text-base font-medium">{item.title}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
        
      </SidebarGroupContent>
    </SidebarGroup>
  )
}

export default MainNav