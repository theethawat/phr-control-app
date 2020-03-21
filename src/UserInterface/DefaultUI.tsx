import React, { Component } from "react"
import Firebase from "../Firebase"
import RiskTemplate from "../Utility/HealthRisk/RiskTemplate"
let db = Firebase.firestore()
let vitalsignList: Array<string> = [
  "systolic",
  "diastolic",
  "glucose",
  "spo2",
  "heart_rate"
] // heartRate is not now
class DefaultUI extends Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      riskLevel: []
    }
  }

  componentDidMount() {
    let riskArray: RiskTemplate[] = []
    for (let i: number = 0; i < 5; i++) {
      db.collection("vitalsign_analyze")
        .doc(vitalsignList[i])
        .get()
        .then(snapshot => {
          let riskElement = snapshot.data() as RiskTemplate
          riskArray[i] = riskElement
          this.setState({
            riskLevel: riskArray
          })
        })
    }
  }

  render() {
    let riskLevelArray: RiskTemplate[] = this.state.riskLevel
    console.log(riskLevelArray)
    let refIndex: number = 0

    let riskLevelDetail = (this.state.riskLevel as RiskTemplate[]).map(
      riskElement => (
        <tr>
          <th scope="row"> {vitalsignList[refIndex++]} </th>
          <td> {riskElement.safe.min} </td>
          <td> {riskElement.safe.max} </td>
          <td> {riskElement.risk.min} </td>
          <td> {riskElement.risk.max} </td>
          <td> {riskElement.danger.min} </td>
          <td> {riskElement.danger.max} </td>
        </tr>
      )
    )
    return (
      <div>
        <h4 className="kanit"> Dashboard</h4>
        <hr />
        <h5>
          สถานะของเกณฑ์จัดกลุ่ม ณ ปัจจุบัน{" "}
          <span className="badge badge-success"> Current</span>
        </h5>
        <table className="table">
          <thead>
            <tr>
              <th scope="col"> Disease </th>
              <th scope="col"> Safe (Min) </th>
              <th scope="col"> Safe (Max) </th>
              <th scope="col"> Risk (Min) </th>
              <th scope="col"> Risk (Max) </th>
              <th scope="col"> Danger (Min) </th>
              <th scope="col"> Danger (Max) </th>
            </tr>
          </thead>
          <tbody>{riskLevelDetail}</tbody>
        </table>
      </div>
    )
  }
}
export default DefaultUI
