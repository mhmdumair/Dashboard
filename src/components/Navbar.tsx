import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { LogOut, Moon, Settings, User } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

function Navbar() {
  return (
    <div className='px-4 flex items-center justify-between'>
        {/* {left} */}
        Collapse button
        {/* {right} */}
        <div className='flex items-center gap-4'>
            <Link href="/dashboard">Dashboard</Link>
            <Moon />
            
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent sideOffset={10}>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                        <User className="h-[1.2rem] w-[1.2rem] mr-2" />Profile
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Settings className="h-[1.2rem] w-[1.2rem] mr-2" />Settings
                    </DropdownMenuItem>
                    <DropdownMenuItem variant="destructive">
                        <LogOut className="h-[1.2rem] w-[1.2rem] mr-2" />Logout
                    </DropdownMenuItem>
                </DropdownMenuContent>
                </DropdownMenu> 
        </div>
    </div>
  )
}

export default Navbar