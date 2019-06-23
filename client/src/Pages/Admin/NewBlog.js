import React, { useState, useEffect } from 'react';
import Navbar from '../../Components/Navbar/Navbar'
import PBtn from '../../Components/PBtn/PBtn';
import './NewBlog.css'
import { EditorState, convertToRaw, convertFromRaw, ContentState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import Input from '../../Components/Input/Input'
import _ from "lodash"
import api from '../../utils/api';
import CKEditor from '@ckeditor/ckeditor5-react';
import BaloonEditor from '@ckeditor/ckeditor5-build-balloon-block'
import ToggleSwitch from '../../Components/ToggleSwitch/ToggleSwitch'
const NewBlog = (props) => {
	const [editorState, setEditorState] = useState('<p></p>')
	const [editorHTML, setEditorHTML] = useState({ __html: '<div></div>' })
	const [titleInputVal, setTitleInputVal] = useState('')
	const [id, setId] = useState('')
	const [imageurl, setImageurl] = useState('')
	const [live, setLive] = useState(false)
	const [checked, setChecked] = useState(false)
	const [category, setCategory] = useState([])

	useEffect(() => {
		let url = window.location.href.split('/');

		setId(url[5])

		api.loadBlog(url[5]).then(blog => {

			setTitleInputVal(blog.data.title)
			setImageurl(blog.data.img)
			setLive(blog.data.live)
			setCategory(blog.data.category)
			setEditorState(blog.data.blog)
			if (blog.data.live === true) {
				setChecked(true)
			} else {
				setChecked(false)
			}
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
			category: category,
			live: change
		}
		api.saveBlog(data).then(res => {
			setLive(change)
			if (checked === true) {
				setChecked(false)
			} else {
				setChecked(true)
			}
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
			category: category,
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

		if (event.target.name === 'category') {
			setCategory(event.target.value)
		}
	}


	return (
		<div className="container-fluid new-blog">

			<Navbar className="admin-nav" position="right" title="Admin">
				<PBtn link="/admin" external={false}>Blogs</PBtn>
				<PBtn onClick={props.logout}>Logout</PBtn>
			</Navbar>

			<div className="container">

				<div className="row">

					<div className="col-xl-12">

						<div className="editorContent">

							<div className="sidebar">
							</div>

							<div className="toolbar">
								<ToggleSwitch checkboxChange={toggleLive} checked={checked} />
								<PBtn onClick={save}>Save</PBtn>
								<PBtn onClick={toggleLive}>Preview</PBtn>
								<Input placeholder="Image URL" className="img-input" value={imageurl} name="imageurl" onChange={handleChange} />
								<Input placeholder="Categories" className="img-input" value={category} name="category" onChange={handleChange} />
							</div>

							<div class="title">
								<Input type="textbox" className="title-box" placeholder="Title" onChange={handleChange} name="titleInputVal" value={titleInputVal} />
							</div>

							<div className="editorWrapper">
								<div>

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
					</div>
				</div>
			</div>
		</div>
	)
}

export default NewBlog;
