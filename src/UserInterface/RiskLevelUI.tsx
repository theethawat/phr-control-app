import React, { Component } from "react";
import MyFirebase from "../Firebase"
import RiskTemplate from "./HealthRisk/RiskTemplate";
let db = MyFirebase.firestore()
let ref = db.collection("vitalsign_analyze")
let vitalsignList: Array<string> = ["systolic", "diastolic", "glucose", "spo2"] // heartRate is not now
let unit: Array<string> = ["mmHG", "mmHG", "kg/dL", "%"]
class RiskLevelUI extends Component<any, any> {
    constructor(props: any) {
        super(props)
        let riskArrayTemplate: RiskTemplate[] = []
        this.state = {
            riskLevel: riskArrayTemplate
        }
    }

    componentDidMount() {
        let i: number
        let arrayRisk: RiskTemplate[] = []
        for (i = 0; i < vitalsignList.length; i++) {
            ref.doc(vitalsignList[i]).get().then(snapshot => {
                let data: RiskTemplate = snapshot.data() as RiskTemplate
                console.log(data)
                try {
                    arrayRisk.push(data)
                    this.setState({
                        riskLevel: arrayRisk
                    })
                    console.log(this.state.riskLevel)
                } catch (error) {
                    console.log(error)
                }
            }
            )
        }
    }




    render() {
        let riskLevelData: RiskTemplate[] = this.state.riskLevel
        let i = 0
        let riskLevelTable = riskLevelData.map((riskElement) =>
            <tr>
                <th> {vitalsignList[i]}  </th>
                <td  >
                    <label className="label">ตั้งแต่</label>
                    <input type="number" className="input column is-6" value={riskElement.danger.min} />
                    <label className="label">ถึง</label>
                    <input type="number" className="input column is-6" value={riskElement.danger.max} />

                </td>
                <td>
                    <label className="label">ตั้งแต่</label>
                    <input type="number" className="input column is-6" value={riskElement.risk.min} />
                    <label className="label">ถึง</label>
                    <input type="number" className="input column is-6" value={riskElement.risk.max} />
                </td>
                <td>
                    <label className="label">ตั้งแต่</label>
                    <input type="number" className="input column is-6" value={riskElement.safe.min} />
                    <label className="label">ถึง</label>
                    <input type="number" className="input column is-6" value={riskElement.safe.max} />
                </td>
                <td>
                    {unit[i++]}
                </td>
            </tr>
        )
        return (
            <div>
                <h1 className="title is-4"> เกณฑ์การจำแนกระดับความเสี่ยง </h1>
                <div className="content ">
                    <p>กรุณาใส่ระดับค่าที่จะแบ่งระดับค่าความดันโลหิต ความเข้มข้นของออกซิเจนในเลือด และ ระดับน้ำตาลในเลือด
                        ที่จะใช้ในการแบ่งว่าบุคคลที่มีระดับค่าดังกล่าวอยู่ในค่านี้
                        จัดว่ามีค่าอยู่ในเกณฑ์ ปลอดภัย สุ่มเสี่ยง หรือ อันตรายต่อการเป็นโรคต่าง ๆ
                        ที่สืบเนื่องจากค่าตัวชี้วัดทางสุขภาพนี้</p>
                </div>
                <form>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>ชื่อของสัญญาณสุขภาพ</th>
                                <th>ระดับอันตราย</th>

                                <th>ระดับเสี่ยง</th>

                                <th>ระดับปลอดภัย</th>
                                <th>หน่วย</th>
                            </tr>

                        </thead>

                        <tbody>
                            {riskLevelTable}
                        </tbody>
                    </table>
                </form>
            </div>
        )
    }
}
export default RiskLevelUI