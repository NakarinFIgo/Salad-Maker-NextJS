import Sidebar from "../components/Sidebar"
export default function DashboardLayout({
    children, 
  }) {
    return (
      <section className="flex">
        <Sidebar/>
        {children}
      </section>
    )
  }