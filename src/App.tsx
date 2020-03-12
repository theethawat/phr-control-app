import React, { Component } from 'react';
import Header from "./Component/Header"
import MainUI from "./Component/UIHandling"
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css"
import './PhrApp.css';
import { UICategory } from './Utility/UICategory';
import { Disease } from './Utility/Disease';
import { VitalSignDataType } from './Utility/VitalSignDataType';
import IUserInterfaceChoice from './Component/IUserInterfaceChoice';

class App extends Component<any, IUserInterfaceChoice> {

  constructor(props: any) {
    super(props)
    this.state = {
      category: UICategory.Default,
      selectDataType: VitalSignDataType.Unknown,
      selectDisease: Disease.Unknown
    }
  }


  setHandleUI(category: UICategory, disease?: Disease, dataType?: VitalSignDataType): any {
    this.setState({
      category: category,
      selectDataType: dataType,
      selectDisease: disease
    })
  }

  render() {
    let uiComponent = <MainUI category={this.state.category} selectDataType={this.state.selectDataType} selectDisease={this.state.selectDisease} />
    return (
      <div>
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-sm-3">
              <h5>เมนูทั่วไป</h5>
              <ul className="list-group list-group-flush">
                <li className="list-group-item list-group-item-action"><a onClick={() => this.setHandleUI(UICategory.Default)}>หน้าแรก</a></li>
                <li className="list-group-item list-group-item-action"> <a onClick={() => this.setHandleUI(UICategory.RiskLevel)}>เกณฑ์การจำแนกระดับความเสี่ยง</a></li>
                <li className="list-group-item list-group-item-action"> <a onClick={() => this.setHandleUI(UICategory.DiseaseSource)}>จัดการโรคที่จะตามมา จากตัวบ่งชี้ทางสุขภาพ</a></li>
              </ul>
              <br />
              <h5>แก้ไขสถิติข้อมูลแต่ละหัวข้อ</h5>
              <ul className="list-group list-group-flush">
                <li className="list-group-item list-group-item-action s"> <a onClick={() => this.setHandleUI(UICategory.VitalSignStat, undefined, VitalSignDataType.BloodPressure)} >ความดันโลหิต</a></li>
                <li className="list-group-item list-group-item-action"> <a onClick={() => this.setHandleUI(UICategory.VitalSignStat, undefined, VitalSignDataType.Glucose)}>ระดับน้ำตาลในเลือด</a></li>
                <li className="list-group-item list-group-item-action"> <a onClick={() => this.setHandleUI(UICategory.VitalSignStat, undefined, VitalSignDataType.HeartRate)}>อัตราการเต้นของหัวใจ</a></li>
                <li className="list-group-item list-group-item-action"> <a onClick={() => this.setHandleUI(UICategory.VitalSignStat, undefined, VitalSignDataType.Spo2)}>ระดับออกซิเจนในเลือด</a></li>
              </ul>

            </div>


            <div className="col-sm-9">
              {uiComponent}
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default App;
