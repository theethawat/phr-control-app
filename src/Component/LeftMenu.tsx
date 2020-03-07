import React, { Component } from "react"
import { UICategory } from "../Utility/UICategory"
import { Disease } from "../Utility/Disease"
import { VitalSignDataType } from "../Utility/VitalSignDataType"
class LeftMenu extends Component<any, any> {
    constructor(props: any) {
        super(props)
    }

    handleMenu(category: UICategory, disease?: Disease, dataType?: VitalSignDataType): void {
        this.props.setHandleUI(category, disease, dataType)
    }

    render() {
        return (
            <div>
                <aside className="menu">
                    <p className="menu-label">
                        General
                    </p>
                    <ul className="menu-list">
                        <li><a>หน้าแรก</a></li>

                    </ul>
                    <p className="menu-label">
                        จัดการตัวชี้วัดข้อมูลทางสุขภาพ
                    </p>
                    <ul className="menu-list">
                        <li > <a onClick={() => this.handleMenu(UICategory.RiskLevel)}>เกณฑ์การจำแนกระดับความเสี่ยง</a></li>
                        <li> <a>จัดการโรคที่จะตามมา จากตัวบ่งชี้ทางสุขภาพ</a></li>
                    </ul>
                    <p className="menu-label">
                        จัดการข้อมูลทางสถิติ
                    </p>

                    <ul className="menu-list">
                        <li>
                            <a>จัดการข้อมูลทางสถิติตามตัวชี้วัดทางสุขภาพ</a>
                            <ul>
                                <li> <a>ความดันโลหิต</a></li>
                                <li> <a>ระดับน้ำตาลในเลือด</a></li>
                                <li> <a>อัตราการเต้นของหัวใจ</a></li>
                                <li> <a>ระดับออกซิเจนในเลือด</a></li>
                            </ul>
                        </li>
                    </ul>
                    <p className="menu-label">
                        จัดการคำแนะนำ
                    </p>
                    <ul className="menu-list">
                        <li>
                            <a>คำแนะนำต่อโรคต่าง ๆ ในกลุ่มโรคไม่ติดต่อเรื้อรัง</a>
                            <ul>
                                <li><a>โรคอ้วน</a></li>
                                <li><a>โรคเบาหวาน</a></li>
                                <li><a>โรคความดันโลหิตสูง</a></li>
                                <li><a>โรคออกซิเจนในเลือดต่ำ</a></li>
                                <li><a>โรคหลอดเลือดสมอง</a></li>
                                <li><a>โรคหลอดเลือดหัวใจ</a></li>
                            </ul>
                        </li>

                    </ul>
                </aside>
            </div>
        )
    }
}
export default LeftMenu