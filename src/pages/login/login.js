import React, {Component} from 'react';
import ElInput from '@/components/form/ElInput'
const style = {
    text: {"whiteSpace": "pre-line"},
    textarea: {"width": "100%", 'height': '50px'},
}
class Login extends Component {
    constructor(props) {
        super(props);
        const { Configuration, OpenAIApi } = require("openai");
        const configuration = new Configuration({
            apiKey: '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',
        });
        this.openai = new OpenAIApi(configuration);
        this.state = {
            result: '',
            prompt: '',
            name: 'zhangsan1',
            age: 12,
            son: {
                name: 'erzi'
            },
            list: [
                {name: 'zhang', id: 1},
                {name: 'liu', id: 2},
            ]
        }
    }
    render() {
        return (
            <div>
                <ElInput
                    label='姓名'
                    type="text"
                    name='name'
                    defaultValue={this.state.name}
                    onChange={(e) => this.handelInput(e)}
                />
                <ElInput
                    label='年龄'
                    type="text"
                    name='age'
                    defaultValue={this.state.age}
                    onChange={(e) => this.handelInput(e)}
                />
                <ElInput
                    label='儿子姓名'
                    type="text"
                    name='son.name'
                    defaultValue={this.state.son.name}
                    onChange={(e) => this.handelInput(e)}
                />
                <ul>
                    { this.state.list.map(item => <li key={item.id}>{item.name}</li>) }
                </ul>
                <div>
                    <textarea style={style.textarea} value={this.state.prompt} name='prompt' onChange={(e) => this.handelInput(e)}/>
                    <button onClick={() => this.getResult()}>获取解答</button>
                    <p style={style.text}>{ this.state.result }</p>
                </div>
                <div>
                    {/*{ routes }*/}
                </div>
            </div>
        );
    }

    handelInput(e) {
        let arr = e.target.name.split('.')
        if(arr.length === 1) {
            this.setState({
                ...this.state,
                [e.target.name]: e.target.value
            })
        }else if(arr.length === 2) {
            this.setState({
                ...this.state,
                [arr[0]]: {
                    [arr[1]]: e.target.value
                }
            })
        }

    }

    login() {
        this.props.history.push('/home')
    }

    getList() {
        this.openai.listModels().then(res => {
            console.log(res)
        });
    }

    getResult() {
        console.log(this.state)
        this.openai.createCompletion({
            model: "text-davinci-003",
            prompt: this.state.prompt,
            max_tokens: 512,
            temperature: 0.7, // 为 0 时，模型将始终返回相同或非常相似的结果，降低温度意味着风险更小，完井更准确、更确定。温度升高会导致完井更加多样化。
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
        }).then(res => {
            this.setState({
                ...this.state,
                result: res.data.choices[0].text
            })
            console.log(res.data.choices[0].text)
        })
    }
}

export default Login;
