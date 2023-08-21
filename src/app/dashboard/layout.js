// ***** Metadata *****
export const metadata = {
  title: "Qualhub Dashboard",
  description: "Powered by Qualhub Dashboard",
};

// ***** DashboardLayout Component *****
const DashboardLayout = ({ children }) => {
  return (
    <div className="dashboard">
      Sidebar
      <br />
      Header
      <br />
      <div className="main-content">{children}</div>
      <br />
      footer
    </div>
  );
};

export default DashboardLayout;
