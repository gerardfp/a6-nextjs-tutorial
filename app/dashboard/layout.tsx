import SideNav from "../ui/SideNav";

export default function Layout({children}) {
    return (
        <>
        <div className="flex">
            <SideNav />
            <div>
            {children}
            </div>
        </div>
        </>
    )
}