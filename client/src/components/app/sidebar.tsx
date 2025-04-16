import {Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem} from '@/components/ui/sidebar'
import { HelpCircleIcon, SearchIcon, SettingsIcon, MessageCircleIcon, CalendarDaysIcon, BookUserIcon, ArrowUpCircleIcon, LayoutDashboardIcon, LayoutDashboard } from 'lucide-react'
import MainNav from './nav/nav.main'
import { ComponentProps } from 'react'
import { SecondaryNav } from './nav/nav.secondary'
import { NavUser } from './nav/nav.user'

const user = {
  name : 'Vaibhav Sharma',
  email: 'vaibsha3@cisco.com',
}

const primaryNav = [
  {
    title: "Dashboard",
    url: "#",
    icon: LayoutDashboardIcon,
  },
  {
    title: "Messages",
    url: "#",
    icon: MessageCircleIcon,
  },
  {
    title: "Meetings",
    url: "#",
    icon: CalendarDaysIcon,
  },
  {
    title: "Contacts",
    url: "#",
    icon: BookUserIcon,
  },
  {
    title: "Meeting History",
    url: "#",
    icon: SearchIcon,
  },
]

const secondaryNav = [
  {
    title: "Settings",
    url: "#",
    icon: SettingsIcon,
  },
  {
    title: "Get Help",
    url: "#",
    icon: HelpCircleIcon,
  },
  {
    title: "Search",
    url: "#",
    icon: SearchIcon,
  },
]

type UserInfoProps = {
  name: string;
  email: string
}

const AppSidebar = ({userInfo}:{userInfo: UserInfoProps}) => {
  const user = {
    name : userInfo.name,
    email: userInfo.email,
  }
  return (
    <Sidebar collapsible="offcanvas">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <a href="#">
                <ArrowUpCircleIcon className="h-5 w-5" />
                <span className="text-base font-semibold">NexCall Inc.</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <MainNav items={primaryNav} />
        <SecondaryNav items={secondaryNav} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
    </Sidebar>
  )
}

export default AppSidebar