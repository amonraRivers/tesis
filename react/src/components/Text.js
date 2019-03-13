import React, {Component} from 'react'

export default class Text extends Component {

	constructor(){
		super()
		this.state={element:null}
	}
	componentDidMount(){
		this.setState({element:this.createTextTags(this.props)})
	}
	componentWillReceiveProps(next){
		this.setState({element:this.createTextTags(next)})
	}

	createTextTags(props){
		var surroundElem=this.props.text
		if(props.tags && props.tags.length>0){
			for (var i = props.tags.length - 1; i >= 0; i--) {
				surroundElem=this.createTextTag(props.tags[i],surroundElem)
			}
		}

		return <span>{surroundElem}</span>
	}

	createTextTag(Tag,element){
		return <Tag>{element}</Tag>
	}

	render(){
		return this.state.element
	}

}		