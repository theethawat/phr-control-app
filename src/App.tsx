import React, { Component } from 'react';
import Header from "./Component/Header"
import LeftMenu from "./Component/LeftMenu"
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
      category: this.props.category,
      selectDataType: this.props.selectDataType,
      selectDisease: this.props.selectDisease
    }
  }

  setHandleUI(category?: UICategory, disease?: Disease, dataType?: VitalSignDataType): any {
    this.setState({
      category: category!!,
      selectDataType: dataType,
      selectDisease: disease
    })

  }

  render() {
    let activeUI: any = this.setHandleUI(this.state.category, this.state.selectDisease, this.state.selectDataType)
    return (
      <div>
        <Header />
        <div className="container">
          <div className="columns">
            <div className="column is-3">
              <LeftMenu handleMenu={this.setHandleUI} />
            </div>
            <div className="column is-9">
              {activeUI}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
