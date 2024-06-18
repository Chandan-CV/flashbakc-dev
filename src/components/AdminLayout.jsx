import PropTypes from "prop-types";
import AdminSidebar from "./AdminSidebar";

function AdminLayout({ children }) {
  return (
    <div className="flex">
      <AdminSidebar />
      <div className="w-[calc(100%-16rem)]">{children}</div>
    </div>
  );
}
export default AdminLayout;

AdminLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
