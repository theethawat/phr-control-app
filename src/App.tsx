import React, { Component } from "react"
import Footer from "./Component/Footer"
import MainUI from "./Component/UIHandling"
import "bootstrap/dist/css/bootstrap.min.css"
import "./index.css"
import "./PhrApp.css"
import { UICategory } from "./Utility/UICategory"
import { Disease } from "./Utility/Disease"
import { VitalSignDataType } from "./Utility/VitalSignDataType"
import IUserInterfaceChoice from "./Component/IUserInterfaceChoice"
import Firebase from "./Firebase"
let auth = Firebase.auth()

class App extends Component<any, IUserInterfaceChoice> {
  constructor(props: any) {
    super(props)
    this.state = {
      category: UICategory.Default,
      selectDataType: VitalSignDataType.Unknown,
      selectDisease: Disease.Unknown,
      login: false,
      loginUserName: ""
    }
    this.setHandleUI = this.setHandleUI.bind(this)
    this.loginAndhandleUI = this.loginAndhandleUI.bind(this)
    this.logoutClick = this.logoutClick.bind(this)
  }

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      if (user) {
        console.log("Auth State Change has Call")
        console.log(user.email)
        this.setState({
          login: true,
          loginUserName: user.email!!
        })
      } else {
        console.log("Auth State Change has call but not user Found")
      }
    })
  }

  setHandleUI(
    category: UICategory,
    disease?: Disease,
    dataType?: VitalSignDataType
  ): any {
    console.log("Set Handle UI")
    console.log(dataType)
    this.setState({
      category: category,
      selectDataType: dataType,
      selectDisease: disease
    })
  }

  loginAndhandleUI(userName: string) {
    console.log("Login and Handling UI")
    this.setState({
      category: UICategory.Default,
      login: true,
      loginUserName: userName
    })
  }

  logoutClick() {
    auth
      .signOut()
      .then(() => {
        window.alert("Logout Successfully")
        this.setState({
          category: UICategory.Default,
          login: false
        })
      })
      .catch(err => {
        window.alert("Error " + err)
      })
  }

  render() {
    let loginHeadingStatus
    if (this.state.login == false) {
      loginHeadingStatus = <button className="btn btn-light">Log in</button>
    } else {
      loginHeadingStatus = (
        <div>
          <span className="text-light">
            {this.state.loginUserName}{" "}
            <button onClick={this.logoutClick} className="btn btn-light">
              Logout
            </button>
          </span>
        </div>
      )
    }
    let uiComponent
    if (this.state.login == true) {
      uiComponent = (
        <MainUI
          category={this.state.category}
          selectDataType={this.state.selectDataType}
          selectDisease={this.state.selectDisease}
          setUI={this.loginAndhandleUI}
        />
      )
    } else {
      uiComponent = (
        <MainUI
          category={UICategory.NotLogin}
          selectDataType={this.state.selectDataType}
          selectDisease={this.state.selectDisease}
          setUI={this.loginAndhandleUI}
        />
      )
    }

    console.log("App.tsx Rander")
    console.log(this.state.selectDataType)
    return (
      <div>
        <div>
          <nav
            className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top"
            role="navigation"
            aria-label="main navigation"
          >
            <div className="navbar-brand">PHR DB Manager</div>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto"> </ul>
              <div className="nav-item">{loginHeadingStatus}</div>
            </div>
          </nav>

          <div className="acenter jumbotron jumbotron-fluid">
            <br />
            <h3>ระบบจัดการข้อมูลในแอพพลิเคชั่น Personal Health Connect</h3>
            <br />
          </div>
        </div>{" "}
        <div className="container">
          <div className="row">
            <div className="col-sm-3">
              <h5>เมนูทั่วไป</h5>
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a
                    href="#"
                    className="nav-link"
                    onClick={() => this.setHandleUI(UICategory.Default)}
                  >
                    หน้าแรก
                  </a>
                </li>
                <li className="nav-item">
                  {" "}
                  <a
                    href="#"
                    className="nav-link"
                    onClick={() => this.setHandleUI(UICategory.RiskLevel)}
                  >
                    เกณฑ์การจำแนกระดับความเสี่ยง
                  </a>
                </li>
                <li className="nav-item">
                  {" "}
                  <a
                    href="#"
                    className="nav-link"
                    onClick={() => this.setHandleUI(UICategory.DiseaseSource)}
                  >
                    โรคที่ตามมาจากตัวบ่งชี้
                  </a>
                </li>
              </ul>
              <br />
              <h5>คำแนะนำ</h5>
              <ul className="nav flex-column">
                <li className="nav-item">
                  {" "}
                  <a
                    href="#"
                    className="nav-link"
                    onClick={() =>
                      this.setHandleUI(
                        UICategory.AdviceVitalSign,
                        undefined,
                        VitalSignDataType.BloodPressure
                      )
                    }
                  >
                    ความดันโลหิต
                  </a>
                </li>
                <li className="nav-item">
                  {" "}
                  <a
                    href="#"
                    className="nav-link"
                    onClick={() =>
                      this.setHandleUI(
                        UICategory.AdviceVitalSign,
                        undefined,
                        VitalSignDataType.Glucose
                      )
                    }
                  >
                    ระดับน้ำตาลในเลือด
                  </a>
                </li>
                <li className="nav-item">
                  {" "}
                  <a
                    href="#"
                    className="nav-link"
                    onClick={() =>
                      this.setHandleUI(
                        UICategory.AdviceVitalSign,
                        undefined,
                        VitalSignDataType.HeartRate
                      )
                    }
                  >
                    อัตราการเต้นของหัวใจ
                  </a>
                </li>
                <li className="nav-item">
                  {" "}
                  <a
                    href="#"
                    className="nav-link"
                    onClick={() =>
                      this.setHandleUI(
                        UICategory.AdviceVitalSign,
                        undefined,
                        VitalSignDataType.Spo2
                      )
                    }
                  >
                    ระดับออกซิเจนในเลือด
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-sm-9">{uiComponent}</div>
          </div>
          <Footer />
        </div>
      </div>
    )
  }
}

export default App
