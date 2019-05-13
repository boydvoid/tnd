import React, { Component } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import './BlogEditor.css'
import Input from '../Input/Input.js'
class BlogEditor extends Component {
  state = {
    editorState: EditorState.createEmpty(),
    editorHTML: {__html: '<div></div>'}
  }

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
      editorHTML: {__html: draftToHtml(convertToRaw(editorState.getCurrentContent()))}
    })
  };

  render() {
    const { editorState } = this.state;
    return (
      <div>
      <div class="title">
        <Input/> 
      </div>
      <div className="editorWrapper">
        <Editor
          editorState={editorState}
          onEditorStateChange={this.onEditorStateChange}
        />
      </div>
      <div>
        <span dangerouslySetInnerHTML={this.state.editorHTML} />
      </div>
      </div>
    );
  }
}
export default BlogEditor;
