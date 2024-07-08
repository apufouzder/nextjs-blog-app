import Sidebar from "@/components/admin/Sidebar";
import Topbar from "@/components/admin/Topbar";
import { Toaster } from "react-hot-toast";

export default function AdminLayout({ children }) {
    return (
        <>
            <section className="flex">
            <Toaster />
                <Sidebar />
                <div className="flex flex-col w-full">
                    <Topbar />
                    {children}
                </div>
            </section>

        </>
    );
}