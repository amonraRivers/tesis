import React, { Component } from "react";
import chapters from "../data/chapters.json";
import Text from "./Text";
import Title from "./Title";

export default class ChapterComponent extends Component {
	constructor(props) {
		super(props);
		this.getChapterJSON = this.getChapterJSON.bind(this);
		this.buildChapterText = this.buildChapterText.bind(this);
		this.getSectionContents = this.getSectionContents.bind(this);
		this.state = {
			chapterJSON: "",
			text: []
		};
	}
	componentDidMount() {
		let chapterJSON = this.getChapterJSON(this.props.match.params.url);
		let componentArray = [];
		if (
			chapterJSON &&
			chapterJSON.contents &&
			chapterJSON.contents.length > 0
		) {
			componentArray = this.getSectionContents(chapterJSON, "1");
		}
		this.setState({ chapterJSON, text: componentArray });
	}

	componentWillReceiveProps(next) {
		let chapterJSON = this.getChapterJSON(next.match.params.url);
		let componentArray = [];
		if (
			chapterJSON &&
			chapterJSON.contents &&
			chapterJSON.contents.length > 0
		) {
			componentArray = this.getSectionContents(chapterJSON, "1");
		}
		this.setState({ chapterJSON, text: componentArray });
	}

	buildChapterText() {
		console.log("state", this.state);
		if (this.state.text && this.state.text.length > 0) {
			return this.state.text;
		} else {
			return <h1>Loading...</h1>;
		}
	}

	mergeContents() {}

	getSectionContents(section, n) {
		let componentArray = [];
		let texts = [];
		let newArray = [];
		if (section.title) {
			componentArray.push(<Title key={n + " title"} text={section.title} />);
		}
		if (section.texts && section.texts.length > 0) {
			texts = (
				<p key={n + " paragraph"}>
					{section.texts.map((element, index) => {
						return (
							<Text
								key={n + "." + index + "text"}
								text={element.text}
								tags={element.tags}
							/>
						);
					})}
				</p>
			);
			componentArray.push(texts);
		}
		if (section.contents && section.contents.length > 0) {
			for (var i = 0; i <= section.contents.length - 1; i++) {
				newArray = this.getSectionContents(
					section.contents[i],
					n + "." + i
				);
				componentArray = componentArray.concat(newArray);
			}
		}
		return componentArray;
	}

	getChapterJSON(url) {
		function findByUrl(element) {
			console.log(element);
			return element.url === "/" + url;
		}
		let chapter = chapters.find(findByUrl);
		console.log("chapter", chapter);
		return require("../data/" + chapter.file);
	}

	render() {
		console.log("Hola", this.state);
		return this.buildChapterText();
	}
}
