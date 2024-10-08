
import { Layout } from "antd";
import AdminFooter from "../../../components/layout/admin.footer";
import AdminHeader from "../../../components/layout/admin.header";
import AdminSiderBar from "../../../components/layout/admin.sidebar";
import AdminContent from "../../../components/layout/admin.content";

const AdminLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {

    return (
        <Layout>
            <AdminSiderBar />
            <Layout>
                <AdminHeader />
                <AdminContent>
                    {children}
                </AdminContent>
                <AdminFooter />
            </Layout>
        </Layout>
    )
}

export default AdminLayout;