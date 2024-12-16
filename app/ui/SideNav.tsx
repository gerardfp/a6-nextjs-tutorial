
'use client'
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

function SideNavItem({path, title}) {
    const activePath = usePathname();
    return (<p>
            <Link href={path}
            className={clsx("font-bold text-red-800",{
                "bg-blue-300": activePath === path
            })}
            >{title}</Link>
        </p>);
}

export default function SideNav(){
    return (
        <>
            <nav className="h-screen flex flex-col bg-gray-300 p-8">
                <SideNavItem path="/dashboard" title="Home"/>
                <SideNavItem path="/dashboard/invoices" title="Invoices"/>
                <SideNavItem path="/dashboard/customers" title="Customers"/>
            </nav>
        </>
    )
}
