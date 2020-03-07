import React, { Component } from "react"
class LeftMenu extends Component<any, any> {
    render() {
        return (
            <div>
                <aside className="menu">
                    {/* <p className="menu-label">
                        General
                    </p>
                    <ul className="menu-list">
                        <li><a>Dashboard</a></li>
                        <li><a>Customers</a></li>
                    </ul> */}
                    <p className="menu-label">
                        จัดการตัวชี้วัดข้อมูลสุขภาพ
                    </p>
                    <ul className="menu-list">
                        <li><a>Team Settings</a></li>
                        <li>
                            <a className="is-active">เกณฑ์การจำแนกระดับความเสี่ยง</a>
                            <ul>
                                <li><a>ความเข้มข้นของออกซิเจนในเลือด</a></li>
                                <li><a>ความดันโลหิต</a></li>
                                <li><a>อัตราการเต้นของหัวใจ</a></li>
                                <li><a>ระดับน้ำตาลในเลือด</a></li>

                            </ul>
                        </li>
                        <li><a>Invitations</a></li>
                        <li><a>Cloud Storage Environment Settings</a></li>
                        <li><a>Authentication</a></li>
                    </ul>
                    <p className="menu-label">
                        Transactions
                    </p>
                    <ul className="menu-list">
                        <li><a>Payments</a></li>
                        <li><a>Transfers</a></li>
                        <li><a>Balance</a></li>
                    </ul>
                </aside>
            </div>
        )
    }
}
export default LeftMenu