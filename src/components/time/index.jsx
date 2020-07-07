import React, {Component} from 'react';

class Index extends Component {
    render() {
        return (
            <div>
                <p>time组件prop传值：{ this.props.time }</p>
                <button onClick={() => this.change()}>time组件内的自定义事件</button>
            </div>
        );
    }

    change() {
        this.props.changeTime('2020-12-31')
    }
}

export default Index;
