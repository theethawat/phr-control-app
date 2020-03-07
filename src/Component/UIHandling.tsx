import React, { Component } from "react";
import IUserInterfaceChoice from "./IUserInterfaceChoice";
import { UICategory } from "../Utility/UICategory";
import AdviceDiseaseUI from "../UserInterface/AdviceDiseaseUI";
import AdviceVitalSignUI from "../UserInterface/AdviceVitalSignUI";
import DiseaseSource from "../UserInterface/DiseaseSourceUI";
import RiskLevelUI from "../UserInterface/RiskLevelUI";
import VitalSignStatUI from "../UserInterface/VitalSignStatUI";
import DefaultUI from "../UserInterface/DefaultUI";

class UIHandling extends Component<any, IUserInterfaceChoice> {
    constructor(props: any) {
        super(props)
        this.state = {
            category: this.props.category,
            selectDataType: this.props.selectDataType,
            selectDisease: this.props.selectDisease
        }
    }

    renderUI(requestUI?: UICategory) {
        let shouldShow
        switch (requestUI) {
            case UICategory.AdviceDisease: shouldShow = <AdviceDiseaseUI />
                break;
            case UICategory.AdviceVitalSign: shouldShow = <AdviceVitalSignUI />
                break;
            case UICategory.DiseaseSource: shouldShow = <DiseaseSource />
                break;
            case UICategory.RiskLevel: shouldShow = <RiskLevelUI />
                break;
            case UICategory.VitalSignStat: shouldShow = <VitalSignStatUI />
                break;
            default: shouldShow = <DefaultUI />
                break;
        }
        return shouldShow
    }

    render() {
        let mustHandlingUI: UICategory = this.state.category
        var showingUI = this.renderUI(mustHandlingUI)
        return (
            <div>
                {showingUI}
            </div>
        )
    }
}
export default UIHandling