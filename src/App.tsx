import React, { Component } from 'react';
import Header from "./Component/Header"
import Footer from './Component/Footer';
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
    this.setHandleUI = this.setHandleUI.bind(this)
  }


  setHandleUI(category: UICategory, disease?: Disease, dataType?: VitalSignDataType): any {
    console.log("Set Handle UI")
    console.log(dataType)
    this.setState({
      category: category,
      selectDataType: dataType,
      selectDisease: disease
    })
  }

  render() {
    let uiComponent = <MainUI category={this.state.category} selectDataType={this.state.selectDataType} selectDisease={this.state.selectDisease} />
    console.log("App.tsx Rander")
    console.log(this.state.selectDataType)
    return (
      <div>
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-sm-3">
              <h5>เมนูทั่วไป</h5>
              <ul className="nav flex-column">
                <li className="nav-item"><a href="#" className="nav-link" onClick={() => this.setHandleUI(UICategory.Default)}>หน้าแรก</a></li>
                <li className="nav-item"> <a href="#" className="nav-link" onClick={() => this.setHandleUI(UICategory.RiskLevel)}>เกณฑ์การจำแนกระดับความเสี่ยง</a></li>
                <li className="nav-item"> <a href="#" className="nav-link" onClick={() => this.setHandleUI(UICategory.DiseaseSource)}>โรคที่ตามมาจากตัวบ่งชี้</a></li>
              </ul>
              <br />
              <h5>คำแนะนำ</h5>
              <ul className="nav flex-column">
                <li className="nav-item"> <a href="#" className="nav-link" onClick={() => this.setHandleUI(UICategory.AdviceVitalSign, undefined, VitalSignDataType.BloodPressure)} >ความดันโลหิต</a></li>
                <li className="nav-item"> <a href="#" className="nav-link" onClick={() => this.setHandleUI(UICategory.AdviceVitalSign, undefined, VitalSignDataType.Glucose)}>ระดับน้ำตาลในเลือด</a></li>
                <li className="nav-item"> <a href="#" className="nav-link" onClick={() => this.setHandleUI(UICategory.AdviceVitalSign, undefined, VitalSignDataType.HeartRate)}>อัตราการเต้นของหัวใจ</a></li>
                <li className="nav-item"> <a href="#" className="nav-link" onClick={() => this.setHandleUI(UICategory.AdviceVitalSign, undefined, VitalSignDataType.Spo2)}>ระดับออกซิเจนในเลือด</a></li>
              </ul>

            </div>


            <div className="col-sm-9" >
              {uiComponent}
            </div>

          </div>
          <Footer />
        </div>
      </div>
    )
  }
}

export default App;
