import React, {Component} from 'react';

class HomeDetail extends Component {
    render() {
        return (
            <div>
                homeDetail
            </div>
        );
    }
    componentDidMount() {
        // query传参
        // console.log(this.props.location.query)

        // params传参 在url里面刷新不会丢失
        const { name, id } = this.props.match.params
        console.log(id,name)
    }
}

export default HomeDetail;
