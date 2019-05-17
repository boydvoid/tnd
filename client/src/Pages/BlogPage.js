import React, {useState, useEffect} from 'react';
import MainNav from '../Components/MainNav/MainNav';
import IconNav from '../Components/IconNav/IconNav';
import api from '../utils/api';
import { EditorState, convertToRaw, convertFromRaw, ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';

const BlogPage = (props) => {
	const [id, setId] = useState('')
	const [editorHTML, setEditorHTML] = useState({__html: '<div></div>'})
	const [titleInputVal, setTitleInputVal] = useState('')
	const [date, setDate] = useState('')
	const [imageUrl, setImageUrl]	 = useState('')


	useEffect(() => {

    let url = window.location.href.split('/'); 

		setId(url[4])
		api.loadBlog(url[4]).then(blog => {

			
			setTitleInputVal(blog.data.title)
			setImageUrl(blog.data.img)
			setDate(blog.data.date)

      const blocksFromHTML = htmlToDraft(blog.data.blog);
      const {contentBlocks, entityMap } = blocksFromHTML;
			const contentState= ContentState.createFromBlockArray(contentBlocks, entityMap);
			
			setEditorHTML({__html: blog.data.blog})
    })
		
	}, [])
	

		return (
			<div className="blogPage">
				<MainNav/>
				<IconNav/>
				<div className="container">
					<div className="row">
						<div className="col-xl-12 center">
							<h1>{titleInputVal}</h1>
							<p>By: Jennifer Larson</p>	
							<p>{date}</p>
							<div className="preview">
								<span dangerouslySetInnerHTML={editorHTML} />
							</div>
						</div>	
					</div>	
				</div>
			</div>
		)
	}	

export default BlogPage;