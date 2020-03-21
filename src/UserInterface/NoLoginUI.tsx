import React, { Component } from "react"
import Firebase from "../Firebase"
import { UICategory } from "../Utility/UICategory"
let auth = Firebase.auth()
class NoLoginUI extends Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      email: "",
      password: ""
    }
    this.renderDataOnType = this.renderDataOnType.bind(this)
    this.prepareLogin = this.prepareLogin.bind(this)
  }

  renderDataOnType(event: any) {
    let target = event.target
    let inputEmail = target.name == "email" ? target.value : this.state.email
    let inputPassword =
      target.name == "password" ? target.value : this.state.password
    console.log(inputEmail)
    this.setState({
      email: inputEmail,
      password: inputPassword
    })
  }

  prepareLogin() {
    let email: string = this.state.email
    let password: string = this.state.password
    auth
      .signInWithEmailAndPassword(email, password)
      .then(value => {
        console.log(value.user)
        window.alert("Successfully Login")
        this.props.login(email)
      })
      .catch(err => {
        window.alert("Error" + err)
      })
  }

  render() {
    return (
      <div>
        <h4 className="kanit"> Login </h4>
        <hr />
        <p>ท่านยังไม่ได้ลงชื่อเก่าใช้ โปรดลงชื่อเข้าใช้ก่อนใช้งานครับ</p>
        <form>
          <div className="card col-sm-6">
            <div className="card-body">
              <label>Email</label>
              <input
                value={this.state.email}
                name="email"
                type="email"
                className="form-control"
                onChange={this.renderDataOnType}
              />
              <label>Password</label>
              <input
                value={this.state.password}
                name="password"
                type="password"
                className="form-control"
                onChange={this.renderDataOnType}
              />
              <br />
              <button
                className="btn btn-primary"
                onClick={this.prepareLogin}
                type="button"
              >
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}
export default NoLoginUI
