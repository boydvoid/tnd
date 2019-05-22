import React, { useState, useEffect } from 'react';
import { EditorState, convertToRaw, convertFromRaw, ContentState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import './BlogEditor.css'
import Input from '../Input/Input.js'
import _ from "lodash"
import PBtn from '../PBtn/PBtn';
import api from '../../utils/api';
import CKEditor from '@ckeditor/ckeditor5-react';
import BaloonEditor from '@ckeditor/ckeditor5-build-balloon-block'
const BlogEditor = (props) => {

  const [editorState, setEditorState] = useState('<p></p>')
  const [editorHTML, setEditorHTML] = useState({ __html: '<div></div>' })
  const [titleInputVal, setTitleInputVal] = useState('')
  const [id, setId] = useState('')
  const [imageurl, setImageurl] = useState('')
  const [live, setLive] = useState(false)

  useEffect(() => {
    let url = window.location.href.split('/');

    setId(url[5])

    api.loadBlog(url[5]).then(blog => {

      setTitleInputVal(blog.data.title)
      setImageurl(blog.data.img)
      setLive(blog.data.live)

      setEditorState(blog.data.blog)
      console.log(blog.data.blog)
    })

    return () => {
      console.log('cleaning up');
    }
  }, [])

  const onEditorStateChange = (editorState) => {

    setEditorState(editorState)
    setEditorHTML({ __html: draftToHtml(convertToRaw(editorState.getCurrentContent())) })
    //save on update
    //need to debounce to save when youre done typing
    //need to test w/ localStorage
  };

  const toggleLive = () => {
    let change;

    if (live) {
      change = false
    } else {
      change = true
    }

    let data = {
      username: props.username,
      blog: editorState,
      title: titleInputVal,
      id: id,
      img: imageurl,
      live: change
    }
    api.saveBlog(data).then(res => {
      setLive(change)
    })

  }

  const save = () => {
    console.log('run save')
    // save to db
    let data = {
      username: props.username,
      blog: editorState,
      title: titleInputVal,
      id: id,
      img: imageurl,
      live: live
    }
    api.saveBlog(data).then(res => {
      console.log(res)
    })
  }

  const handleChange = event => {
    if (event.target.name === 'titleInputVal') {
      setTitleInputVal(event.target.value)
    }

    if (event.target.name === 'imageurl') {
      setImageurl(event.target.value)
    }
  }

  return (
    <div className="editorContent">
      <div className="sidebar">
        <Input placeholder="Image URL" className="img-input" value={imageurl} name="imageurl" onChange={handleChange} />
        <PBtn onClick={save}>Save</PBtn>
        <PBtn onClick={toggleLive}>Toggle Live</PBtn>
      </div>
      <div className="editorWrapper">
        <div>
          <div class="title">
            <Input className="title-box" placeholder="Title" onChange={handleChange} name="titleInputVal" value={titleInputVal} />
          </div>
          <CKEditor
            editor={BaloonEditor}
            data={editorState}
            onInit={editor => {
              // You can store the "editor" and use when it is needed.
              console.log('Editor is ready to use!', editor);
            }}
            onChange={(event, editor) => {
              const data = editor.getData();
              setEditorState(data)
              console.log({ event, editor, data });
            }}
          />

        </div>
      </div>

      <div className="preview">
        <span dangerouslySetInnerHTML={editorHTML} />
      </div>

    </div>
  );
}
export default BlogEditor;
