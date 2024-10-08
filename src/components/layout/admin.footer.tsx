'use client'
import { Layout } from "antd";

const AdminFooter = () => {
    const { Footer } = Layout;

    return (
        <>
            <Footer style={{ textAlign: "center" }}>
                Duong Hai ©{new Date().getFullYear()} Created by Duong Hai
            </Footer>
        </>
    )
}

export default AdminFooter;