import { Sidebar } from "flowbite-react";
import { HiChartPie, HiInbox, HiUser, HiViewBoards } from "react-icons/hi";

function AdminSidebar() {
  return (
    <div className="h-full">
      <Sidebar aria-label="Default sidebar example" className="h-screen">
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item href="/" icon={HiChartPie}>
              Dashboard
            </Sidebar.Item>
            <Sidebar.Item
              href="/admin/blogs"
              icon={HiViewBoards}
              // label="Pro"
              labelColor="dark"
            >
              Blogs
            </Sidebar.Item>
            <Sidebar.Item href="/admin/photostories" icon={HiInbox} label="3">
              Photo Stories
            </Sidebar.Item>
            <Sidebar.Item href="/admin/videostories" icon={HiUser}>
              Video Stories
            </Sidebar.Item>
            <Sidebar.Item href="/admin/testimonials" icon={HiUser}>
              Testimonials
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
}
export default AdminSidebar;
