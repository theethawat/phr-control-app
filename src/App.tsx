import React, { Component } from 'react';
import Header from "./Component/Header"
import MainUI from "./Component/UIHandling"
import "bulma/css/bulma.min.css"
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
          <div className="columns">
            <div className="column is-3">
              <div>
                <aside className="menu">
                  <p className="menu-label">
                    General
                    </p>
                  <ul className="menu-list">
                    <li><a onClick={() => this.setHandleUI(UICategory.Default)}>หน้าแรก</a></li>

                  </ul>
                  <p className="menu-label">
                    จัดการตัวชี้วัดข้อมูลทางสุขภาพ
                    </p>
                  <ul className="menu-list">
                    <li > <a onClick={() => this.setHandleUI(UICategory.RiskLevel)}>เกณฑ์การจำแนกระดับความเสี่ยง</a></li>
                    <li> <a onClick={() => this.setHandleUI(UICategory.DiseaseSource)}>จัดการโรคที่จะตามมา จากตัวบ่งชี้ทางสุขภาพ</a></li>
                  </ul>
                  <p className="menu-label">
                    จัดการข้อมูลทางสถิติ
                    </p>

                  <ul className="menu-list">
                    <li>
                      <a>จัดการข้อมูลทางสถิติตามตัวชี้วัดทางสุขภาพ</a>
                      <ul>
                        <li> <a onClick={() => this.setHandleUI(UICategory.VitalSignStat, undefined, VitalSignDataType.BloodPressure)} >ความดันโลหิต</a></li>
                        <li> <a onClick={() => this.setHandleUI(UICategory.VitalSignStat, undefined, VitalSignDataType.Glucose)}>ระดับน้ำตาลในเลือด</a></li>
                        <li> <a onClick={() => this.setHandleUI(UICategory.VitalSignStat, undefined, VitalSignDataType.HeartRate)}>อัตราการเต้นของหัวใจ</a></li>
                        <li> <a onClick={() => this.setHandleUI(UICategory.VitalSignStat, undefined, VitalSignDataType.Spo2)}>ระดับออกซิเจนในเลือด</a></li>
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
                        <li><a onClick={() => this.setHandleUI(UICategory.AdviceDisease, Disease.Obesity)} >โรคอ้วน</a></li>
                        <li><a onClick={() => this.setHandleUI(UICategory.AdviceDisease, Disease.Diabetes)}>โรคเบาหวาน</a></li>
                        <li><a onClick={() => this.setHandleUI(UICategory.AdviceDisease, Disease.Hypertension)}>โรคความดันโลหิตสูง</a></li>
                        <li><a onClick={() => this.setHandleUI(UICategory.AdviceDisease, Disease.Hypoxia)}>โรคออกซิเจนในเลือดต่ำ</a></li>
                        <li><a onClick={() => this.setHandleUI(UICategory.AdviceDisease, Disease.Stroke)}>โรคหลอดเลือดสมอง</a></li>
                        <li><a onClick={() => this.setHandleUI(UICategory.AdviceDisease, Disease.Coronary)}>โรคหลอดเลือดหัวใจ</a></li>
                      </ul>
                    </li>

                  </ul>
                </aside>
              </div>
            </div>
            <div className="column is-9">
              {uiComponent}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
