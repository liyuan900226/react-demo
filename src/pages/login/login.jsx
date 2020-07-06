import React, {Component} from 'react';

class Login extends Component {
    render() {
        return (
            <div>
                <p onClick={() => this.login()}>登录页</p>
            </div>
        );
    }

    login() {
        this.props.history.push('/home')
    }
}

export default Login;
