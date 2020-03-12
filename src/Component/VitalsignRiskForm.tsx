import React, { Component } from "react";
import RiskTemplate from "../UserInterface/HealthRisk/RiskTemplate";
import vitalSignNameMap from "../Utility/VitalSignNameMap"
import vitalSignMap from "../Utility/VitalSignNameMap";
import { InputFormRiskRef } from "../Utility/InputFormRiskRef";
import { eventNames } from "cluster";
class VitalsignRiskForm extends Component<any, any> {
    constructor(props: any) {
        super(props)
        let vitalSignName: string = this.props.name
        let currentRisk: RiskTemplate = this.props.risk
        this.state = {
            name: vitalSignName,
            riskData: currentRisk,
            dangerMin: '',
            dangerMax: '',
            riskMin: '',
            riskMax: '',
            safeMin: '',
            safeMax: ''
        }
        // this.keyStageValue = this.keyStageValue.bind(this)
    }

    keyStageValue(riskRef: InputFormRiskRef, event: any) {
        console.log(event)
    }

    render() {
        let dataTypeRef: string = this.state.name
        let dataTypeThaiName: any = vitalSignMap.get(this.state.name)
        let data: RiskTemplate = this.state.riskData
        return (
            <div>
                <div className="card">
                    <div className="card-body">
                        <form>
                            <h5>{dataTypeThaiName}</h5>
                            <label>ค่าที่อยู่ในระดับปลอดภัย</label>
                            <div className="row">
                                <div className="col">
                                    <input type="text" className="form-control" name="safe-min" value={data.safe.min} >  </input> </div>
                                <div className="col">
                                    <p> ถึง </p>
                                </div>
                                <div className="col">
                                    <input type="text" className="form-control" name="safe-max" value={data.safe.max} >  </input> </div>
                            </div>
                            <hr />
                            <label>ค่าที่อยู่ในระดับเสี่ยง</label>
                            <div className="row">
                                <div className="col">
                                    <input type="text" className="form-control" name="risk-min" value={data.risk.min} >  </input>                           </div>
                                <div className="col">
                                    <p> ถึง </p>
                                </div>
                                <div className="col">
                                    <input type="text" className="form-control" name="risk-max" value={data.risk.max} >  </input>                           </div>
                            </div>
                            <hr />
                            <label>ค่าที่อยู่ในระดับอันตราย</label>
                            <div className="row">
                                <div className="col">
                                    <input type="text" className="form-control" name="danger-min" value={data.danger.min}> </input>
                                </div>
                                <div className="col">
                                    <p> ถึง </p>
                                </div>
                                <div className="col">
                                    <input type="text" className="form-control" name="danger-max" value={data.danger.max}> </input>
                                </div>
                            </div>
                            <hr />
                            <button type="submit" className="btn btn-primary">อัพเดท</button>
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
