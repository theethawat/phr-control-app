import React, { Component } from "react"
import { VitalSignDataType } from "../Utility/VitalSignDataType"
import Firebase from "../Firebase"
import IVitalSignAdvice from "../Utility/Advicing/IVitalSignAdvice"
let db = Firebase.firestore()
/**
 * Create by theethawat - 2020-03-21
 */
class AdviceVitalSignUI extends Component<any, any> {
  constructor(props: any) {
    super(props)
    let dataTypeString: String = this.dataTypeToString(
      this.props.selectDataType
    )
    this.state = {
      dataTypeName: dataTypeString,
      adviceDanger: "",
      adviceRisk: "",
      adviceSafe: ""
    }
    this.renderNewAdvice = this.renderNewAdvice.bind(this)
  }

  componentWillReceiveProps(nextProps: any) {
    let refreshDataTypeString = this.dataTypeToString(nextProps.selectDataType)
    console.log(nextProps.selectDataType)
    console.log("Set State")
    this.fetchNewAdvice(refreshDataTypeString)
    this.setState({
      dataTypeName: refreshDataTypeString
    })
  }

  dataTypeToString(dataType: VitalSignDataType) {
    let outputString: string
    if (dataType == VitalSignDataType.BloodPressure)
      outputString = "blood_pressure"
    else if (dataType == VitalSignDataType.Glucose) outputString = "glucose"
    else if (dataType == VitalSignDataType.Spo2) outputString = "spo2"
    else if (dataType == VitalSignDataType.HeartRate)
      outputString = "heart_rate"
    else outputString = "tba"
    return outputString
  }

  fetchNewAdvice(dataTypeString: string) {
    db.collection("vitalsign_advice")
      .doc(dataTypeString)
      .get()
      .then(snapshot => {
        let adviceObject = snapshot.data() as IVitalSignAdvice
        let adviceDanger: string = adviceObject.advice_danger
        let adviceRisk: string = adviceObject.advice_risk
        let adviceSafe: string = adviceObject.advice_safe
        console.log(adviceObject)
        this.setState({
          adviceDanger: adviceDanger,
          adviceRisk: adviceRisk,
          adviceSafe: adviceSafe
        })
      })
  }

  renderNewAdvice(event: any) {
    let target = event.target
    let adviceDangerCopy =
      target.name == "advice_danger" ? target.value : this.state.adviceDanger
    let adviceRiskCopy =
      target.name == "advice_risk" ? target.value : this.state.adviceRisk
    let adviceSafeCopy =
      target.name == "advice_safe" ? target.value : this.state.adviceSafe
    this.setState({
      adviceDanger: adviceDangerCopy,
      adviceRisk: adviceRiskCopy,
      adviceSafe: adviceSafeCopy
    })
  }

  render() {
    return (
      <div>
        <h4> การให้คำแนะนำเกี่ยวกับข้อมูลสุขภาพ </h4>
        <hr />
        <h5>ข้อมูลสุขภาพ {this.state.dataTypeName} </h5>
        <form>
          <label>คำแนะนำสำหรับระยะปลอดภัย</label>
          <textarea
            className="form-control"
            rows={3}
            onChange={this.renderNewAdvice}
            name="advice_safe"
            value={this.state.adviceSafe}
          ></textarea>
          <label>คำแนะนำสำหรับระยะเสี่ยง</label>
          <textarea
            className="form-control"
            rows={3}
            onChange={this.renderNewAdvice}
            name="advice_risk"
            value={this.state.adviceRisk}
          ></textarea>
          <label>คำแนะนำสำหรับระยะอันตราย</label>
          <textarea
            className="form-control"
            rows={3}
            onChange={this.renderNewAdvice}
            name="advice_danger"
            value={this.state.adviceDanger}
          ></textarea>
          <br />
          <button className="btn btn-primary" type="submit">
            Update
          </button>
        </form>
      </div>
    )
  }
}
export default AdviceVitalSignUI
