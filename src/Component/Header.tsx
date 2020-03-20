import React, { Component } from "react"
class Header extends Component<any, any> {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light" role="navigation" aria-label="main navigation">
                    <div className="navbar-brand">
                        PHR DB Manager
                    </div>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">

                        <ul className="navbar-nav mr-auto"> </ul>
                        <div className="nav-item">
                            <button className="btn btn-secondary">
                                <strong>Sign up</strong>
                            </button>
                            <button className="btn btn-light">
                                Log in
                                    </button>
                        </div>
                    </div>



                </nav>
                <div className="container acenter">
                    <br />
                    <h3>
                        ระบบจัดการฐานข้อมูลในแอพพลิเคชั่น Personal Health Connect
                    </h3>
                    <br />
                </div>
            </div>
        )
    }
}
export default Header