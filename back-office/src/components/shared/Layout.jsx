import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar"
import Navbar from "./Navbar"

export default function Layout() {
    return (
        <div className='flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden'>
           <Sidebar/>
           <div className="flex-1 flex flex-col">
                <Navbar/>
                <div className="flex-1 overflow-auto">
                    <div className="p-4 min-h-0"><Outlet/></div>
                </div>
           </div>
        </div>
    )
}
