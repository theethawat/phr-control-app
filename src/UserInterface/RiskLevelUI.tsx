import React, { Component } from "react"
import MyFirebase from "../Firebase"
import RiskTemplate from "../Utility/HealthRisk/RiskTemplate"
import VitalsignRiskForm from "../Component/VitalsignRiskForm"
let db = MyFirebase.firestore()
let ref = db.collection("vitalsign_analyze")
let vitalsignList: Array<string> = [
  "systolic",
  "diastolic",
  "glucose",
  "spo2",
  "heart_rate"
] // heartRate is not now
let vitalsignThaiList: Array<string> = [
  "ความดันโลหิตเมื่อหัวใจบีบตัว",
  "ความดันโลหิตเมื่อหัวใจคลายตัว",
  "ระดับน้ำตาลในเลือด",
  "ความเข้มข้นของออกซิเจนในเลือด",
  "อัตราการเต้นของหัวใจ"
]
let unit: Array<string> = ["mmHG", "mmHG", "kg/dL", "%", "bpm"]

class RiskLevelUI extends Component<any, any> {
  constructor(props: any) {
    super(props)

    this.state = {
      riskLevel: []
    }
  }

  componentDidMount() {
    let i: number
    let arrayRisk: RiskTemplate[] = []
    for (i = 0; i < vitalsignList.length; i++) {
      ref
        .doc(vitalsignList[i])
        .get()
        .then(snapshot => {
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
        })
    }
  }

  render() {
    let riskLevelData: RiskTemplate[] = this.state.riskLevel
    let i = 0
    let riskLevelTable = riskLevelData.map(riskElement => (
      <div>
        <VitalsignRiskForm name={vitalsignList[i++]} risk={riskElement} />
      </div>
    ))

    return (
      <div>
        <h3 className="kanit"> เกณฑ์การจำแนกระดับความเสี่ยง </h3>
        <hr />
        <div className="content ">
          <p>
            กรุณาใส่ระดับค่าที่จะแบ่งระดับค่าความดันโลหิต
            ความเข้มข้นของออกซิเจนในเลือด และ ระดับน้ำตาลในเลือด
            ที่จะใช้ในการแบ่งว่าบุคคลที่มีระดับค่าดังกล่าวอยู่ในค่านี้
            จัดว่ามีค่าอยู่ในเกณฑ์ ปลอดภัย สุ่มเสี่ยง หรือ
            อันตรายต่อการเป็นโรคต่าง ๆ ที่สืบเนื่องจากค่าตัวชี้วัดทางสุขภาพนี้
          </p>
        </div>

        {riskLevelTable}
      </div>
    )
  }
}
export default RiskLevelUI
