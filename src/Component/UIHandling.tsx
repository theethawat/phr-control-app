import React, { Component } from "react"
import IUserInterfaceChoice from "./IUserInterfaceChoice"
import { UICategory } from "../Utility/UICategory"
import AdviceDiseaseUI from "../UserInterface/AdviceDiseaseUI"
import AdviceVitalSignUI from "../UserInterface/AdviceVitalSignUI"
import DiseaseSource from "../UserInterface/DiseaseSourceUI"
import RiskLevelUI from "../UserInterface/RiskLevelUI"
import DefaultUI from "../UserInterface/DefaultUI"
import { VitalSignDataType } from "../Utility/VitalSignDataType"
import { isNullOrUndefined } from "util"
import NoLoginUI from "../UserInterface/NoLoginUI"

class UIHandling extends Component<any, IUserInterfaceChoice> {
  constructor(props: any) {
    super(props)
    this.state = {
      category: this.props.category,
      selectDataType: this.props.selectDataType,
      selectDisease: this.props.selectDisease,
      login: this.props.login,
      loginUserName: this.props.loginUserName
    }
    console.log("UI Handling Working")
    console.log(this.state.selectDataType)
    this.renderUI = this.renderUI.bind(this)
    this.onLogin = this.onLogin.bind(this)
  }

  onLogin(userName: string) {
    console.log("On Login has call")
    this.setState({
      category: UICategory.Default,
      login: true,
      loginUserName: userName
    })
    this.props.setUI(userName)
  }

  renderUI(requestUI?: UICategory, dataType?: VitalSignDataType) {
    console.log("At UI Handling RenderUI")
    console.log(dataType)
    let shouldShow
    switch (requestUI) {
      case UICategory.AdviceDisease:
        shouldShow = <AdviceDiseaseUI />
        break
      case UICategory.AdviceVitalSign:
        shouldShow = <AdviceVitalSignUI selectDataType={dataType} />
        break
      case UICategory.DiseaseSource:
        shouldShow = <DiseaseSource />
        break
      case UICategory.RiskLevel:
        shouldShow = <RiskLevelUI />
        break
      case UICategory.Default:
        shouldShow = <DefaultUI />
        break
      case UICategory.NotLogin:
        shouldShow = <NoLoginUI login={this.onLogin} />
        break
      default:
        shouldShow = <DefaultUI />
        break
    }
    return shouldShow
  }

  render() {
    let mustHandlingUI: UICategory = this.props.category
    let mustHandlingDataType: VitalSignDataType = isNullOrUndefined(
      this.props.selectDataType
    )
      ? VitalSignDataType.Unknown
      : this.props.selectDataType
    var showingUI = this.renderUI(mustHandlingUI, mustHandlingDataType)
    return <div>{showingUI}</div>
  }
}
export default UIHandling
