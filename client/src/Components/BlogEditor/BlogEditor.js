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
//editing funcitons
  
  handleKeyCommand = (command) => {
    const newState = RichUtils.handleKeyCommand(this.state.editorState, command)
    if (newState) {
        this.onChange(newState);
        return 'handled';
    }
    return 'not-handled';
  }

	_onBoldClick() {
		this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'));
	}

	_onItalicClick() {
		this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'ITALIC'));
	}

	_onUnderlineClick() {
		this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'UNDERLINE'));
	}

	_onStrikeThroughClick() {
		this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'STRIKETHROUGH'));
	}

	_onAddLink = () => {
    const editorState = this.state.editorState;
    const selection = editorState.getSelection();
    const link = window.prompt('Paste the link -')
    if (!link) {
      this.onChange(RichUtils.toggleLink(editorState, selection, null));
      return 'handled';
    }
    const content = editorState.getCurrentContent();
    const contentWithEntity = content.createEntity('LINK', 'MUTABLE', { url: link });
    const newEditorState = EditorState.push(editorState, contentWithEntity, 'create-entity');
    const entityKey = contentWithEntity.getLastCreatedEntityKey();
    this.onChange(RichUtils.toggleLink(newEditorState, selection, entityKey))
	}

  //end of function
	render() {
		return (
			<div>
				<button onClick={this._onBoldClick.bind(this)}><b>B</b></button>
				<button onClick={this._onItalicClick.bind(this)}><i>Italic</i></button>
				<button onClick={this._onUnderlineClick.bind(this)}><u>U</u></button>
				<button onClick={this._onStrikeThroughClick.bind(this)}><s>abc</s></button>
				<button onClick={this._onAddLink.bind(this)}>Link</button>
				<div className="editor">
					<Editor editorState={this.state.editorState} onChange={this.onChange} handleKeyCommand={this.handleKeyCommand} />
				</div>
			</div>
		)
	}
}

export default BlogEditor;
