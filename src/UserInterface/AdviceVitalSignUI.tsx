import React, { Component } from "react";
import { VitalSignDataType } from "../Utility/VitalSignDataType";
import Firebase from "../Firebase"
import IVitalSignAdvice from "../Utility/Advicing/IVitalSignAdvice";
let db = Firebase.firestore()
class AdviceVitalSignUI extends Component<any, any> {
    constructor(props: any) {
        super(props)
        let dataTypeString: String = this.dataTypeToString(this.props.selectDataType)
        this.state = {
            dataTypeName: dataTypeString,
            adviceDanger: "",
            adviceRisk: "",
            adviceSafe: ""
        }
    }

    componentWillReceiveProps() {
        let refreshDataTypeString = this.dataTypeToString(this.props.selectDataType)
        console.log(this.props.selectDataType)
        console.log("Set State")
        this.setState({
            dataTypeName: refreshDataTypeString
        })
    }

    dataTypeToString(dataType: VitalSignDataType) {
        let outputString: String
        if (dataType == VitalSignDataType.BloodPressure)
            outputString = "blood_pressure"
        else if (dataType == VitalSignDataType.Glucose)
            outputString = "glucose"
        else if (dataType == VitalSignDataType.Spo2)
            outputString = "spo2"
        else if (dataType == VitalSignDataType.HeartRate)
            outputString = "heart_rate"
        else
            outputString = "tba"
        return outputString
    }

    componentDidMount() {
        let dataTypeName = this.state.dataTypeName
        db.collection("vitalsign_advice").doc(dataTypeName).get().then(snapshot => {
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

    renderState() {
        let dataTypeName = this.state.dataTypeName
        return (
            <div>
                <h4> การให้คำแนะนำเกี่ยวกับข้อมูลสุขภาพ </h4><hr />
                <h5>ข้อมูลสุขภาพ {dataTypeName} </h5>
                <form>
                    <label>คำแนะนำสำหรับระยะปลอดภัย</label>
                    <textarea className="form-control" rows={3} name="advice_safe" value={this.state.adviceSafe} ></textarea>
                    <label>คำแนะนำสำหรับระยะเสี่ยง</label>
                    <textarea className="form-control" rows={3} name="advice_risk" value={this.state.adviceRisk}></textarea>
                    <label>คำแนะนำสำหรับระยะอันตราย</label>
                    <textarea className="form-control" rows={3} name="advice_danger" value={this.state.adviceDanger}></textarea>
                    <br />
                    <button className="btn btn-primary" type="submit">Update</button>
                </form>
            </div>
        )
    }

    render() {
        let stateHTMLShow = this.renderState()
        return (
            stateHTMLShow
        )
    }
}
export default AdviceVitalSignUI