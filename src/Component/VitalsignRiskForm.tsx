import React, { Component } from "react";
import RiskTemplate from "../Utility/HealthRisk/RiskTemplate";
import vitalSignMap from "../Utility/VitalSignNameMap";
import firebase from "../Firebase"
let db = firebase.firestore()
class VitalsignRiskForm extends Component<any, any> {
    constructor(props: any) {
        super(props)
        let vitalSignName: string = this.props.name
        let currentRisk: RiskTemplate = this.props.risk
        this.state = {
            name: vitalSignName,
            riskData: currentRisk,
        }
        this.prepareDatabaseUpdate = this.prepareDatabaseUpdate.bind(this)
        this.keyStageValue = this.keyStageValue.bind(this)
    }

    keyStageValue(event: any) {
        let target = event.target

        let vitalSignRiskDataCopy: RiskTemplate = this.state.riskData
        vitalSignRiskDataCopy.risk.min = target.name == "risk-min" ? (+target.value) : vitalSignRiskDataCopy.risk.min
        vitalSignRiskDataCopy.risk.max = target.name == "risk-max" ? (+target.value) : vitalSignRiskDataCopy.risk.max
        vitalSignRiskDataCopy.danger.min = target.value == "danger-min" ? (+target.value) : vitalSignRiskDataCopy.danger.min
        vitalSignRiskDataCopy.danger.max = target.name == "danger-max" ? (+target.value) : vitalSignRiskDataCopy.danger.max
        vitalSignRiskDataCopy.safe.min = target.name == "safe-min" ? (+target.value) : vitalSignRiskDataCopy.safe.min
        vitalSignRiskDataCopy.safe.max = target.name == "safe-max" ? (+target.value) : vitalSignRiskDataCopy.safe.max

        this.setState({
            riskData: vitalSignRiskDataCopy
        })
        console.log(vitalSignRiskDataCopy)
    }

    prepareDatabaseUpdate(event: any) {
        event.preventDefault()
        window.confirm("Confirm Updating")
        let riskLevelState: RiskTemplate = this.state.riskData
        let dataToUpdate = {
            danger: {
                max: riskLevelState.danger.max,
                min: riskLevelState.danger.min
            },
            risk: {
                max: riskLevelState.risk.max,
                min: riskLevelState.risk.min
            },
            safe: {
                max: riskLevelState.safe.max,
                min: riskLevelState.safe.min
            }
        }
        db.collection("vitalsign_analyze").doc(this.state.name).update(dataToUpdate).then(result => {
            console.log("Success")
            window.alert("Success Update")
        }).catch(err => {
            window.alert("Error" + err)
        })
    }

    render() {
        let dataTypeThaiName: any = vitalSignMap.get(this.state.name)
        let data: RiskTemplate = this.state.riskData
        return (
            <div>
                <div className="card">
                    <div className="card-body">
                        <form >
                            <h5>{dataTypeThaiName}</h5>
                            <label>ค่าที่อยู่ในระดับปลอดภัย</label>
                            <div className="row">
                                <div className="col">
                                    <input type="text" onChange={this.keyStageValue} className="form-control" name="safe-min" value={data.safe.min} />  </div>
                                <div className="col">
                                    <p> ถึง </p>
                                </div>
                                <div className="col">
                                    <input type="text" onChange={this.keyStageValue} className="form-control" name="safe-max" value={data.safe.max} /> </div>
                            </div>
                            <hr />
                            <label>ค่าที่อยู่ในระดับเสี่ยง</label>
                            <div className="row">
                                <div className="col">
                                    <input type="text" onChange={this.keyStageValue} className="form-control" name="risk-min" value={data.risk.min} />
                                </div>
                                <div className="col">
                                    <p> ถึง </p>
                                </div>
                                <div className="col">
                                    <input type="text" onChange={this.keyStageValue} className="form-control" name="risk-max" value={data.risk.max} />
                                </div>
                            </div>
                            <hr />
                            <label>ค่าที่อยู่ในระดับอันตราย</label>
                            <div className="row">
                                <div className="col">
                                    <input type="text" onChange={this.keyStageValue} className="form-control" name="danger-min" value={data.danger.min} />
                                </div>
                                <div className="col">
                                    <p> ถึง </p>
                                </div>
                                <div className="col">
                                    <input type="text" onChange={this.keyStageValue} className="form-control" name="danger-max" value={data.danger.max} />
                                </div>
                            </div>
                            <hr />
                            <button onClick={this.prepareDatabaseUpdate} className="btn btn-primary">อัพเดท</button>
                            <br />
                        </form>
                    </div>
                </div>
                <br />
            </div>
        )
    }
}
export default VitalsignRiskForm
