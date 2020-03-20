import React, { Component } from 'react';
import MainUI from "./Component/UIHandling"

import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.bundle'
import 'stisla-theme/dist/scss/style.scss';

/* optional imports */
import 'stisla-theme/dist/scss/components.scss';
// import 'stisla-theme/dist/scss/rtl.scss';
// import 'jquery/dist/jquery.slim';
// import 'popper.js/dist/popper'
// import './stisla'
import '@fortawesome/fontawesome-free/js/all'
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
      selectDisease: Disease.Unknown,
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
      <div id="app" className="main-wrapper" >
        <div className="navbar-bg"></div>
        <nav className="navbar navbar-expand-lg main-navbar">
          <form className="form-inline mr-auto">
            <ul className="navbar-nav mr-3">
              <li><a href="#" data-toggle="sidebar" className="nav-link nav-link-lg"><i className="fas fa-bars"></i></a></li>
            </ul>
          </form>
          <ul className="navbar-nav navbar-right">
          </ul>
        </nav>
        <div className="main-sidebar">
          <aside id="sidebar-wrapper">
            <div className="sidebar-brand">
              <a href="#">Stisla</a>
            </div>

            <ul className="sidebar-menu">
              <li className="menu-header">General Menu</li>
              <li > <a onClick={() => this.setHandleUI(UICategory.Default)}>หน้าแรก</a></li>
              <li><a onClick={() => this.setHandleUI(UICategory.RiskLevel)}>เกณฑ์การจำแนกระดับความเสี่ยง</a></li>
              <li>  <a onClick={() => this.setHandleUI(UICategory.DiseaseSource)}>โรคที่จะตามมา</a></li>
            </ul>
            <ul className="sidebar-menu">
              <li className="menu-header">Statistic Menu</li>
              <li> <a onClick={() => this.setHandleUI(UICategory.VitalSignStat, undefined, VitalSignDataType.BloodPressure)} >ความดันโลหิต</a></li>
              <li> <a onClick={() => this.setHandleUI(UICategory.VitalSignStat, undefined, VitalSignDataType.Glucose)}>ระดับน้ำตาลในเลือด</a></li>
              <li> <a onClick={() => this.setHandleUI(UICategory.VitalSignStat, undefined, VitalSignDataType.HeartRate)}>อัตราการเต้นของหัวใจ</a></li>
              <li> <a onClick={() => this.setHandleUI(UICategory.VitalSignStat, undefined, VitalSignDataType.Spo2)}>ระดับออกซิเจนในเลือด</a></li>
            </ul>

          </aside>
        </div>
        <div className="main-content sidebar-gone">
          <section className="section">
            {uiComponent}
          </section>

        </div>

      </div>
    )
  }
}

export default App;
