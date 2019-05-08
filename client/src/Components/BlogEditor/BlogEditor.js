import React, { Component } from 'react';
import {Editor, EditorState, RichUtils} from 'draft-js';
import './BlogEditor.css'
class BlogEditor extends Component {
	state = {
		editorState: EditorState.createEmpty()
	}

 onChange = (editorState) => {
		this.setState({editorState})
	}

	_onBoldClick() {
		this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'));
	}

	render() {
		return (
			<div>
				<button onClick={this._onBoldClick.bind(this)}>Bold</button>
				<div className="editor">
					<Editor editorState={this.state.editorState} onChange={this.onChange}/>
				</div>
			</div>
		)
	}
}

export default BlogEditor;