import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Index extends Component {
    //如果没有传递该属性时的默认值
    static defaultProps = {
        time: '默认props：2020-01-01'
    }
    //如果传递该属性，该属性值必须为字符串
    static propTypes={
        time: PropTypes.string.isRequired // 如果类型不对会有警告！
    }
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
