import React from 'react';
import MainNav from '../Components/MainNav/MainNav';
import IconNav from '../Components/IconNav/IconNav';
import api from '../utils/api';
import { EditorState, convertToRaw, convertFromRaw, ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';

class BlogPage extends React.Component {
	state={
		id: '',
		editorHTML: {__html: '<div></div>'}, 
		titleInputVal: '',
		date: ''
	}
	componentDidMount = () => {
    let url = window.location.href.split('/');

    this.setState({
      id: url[4]
		})
		api.loadBlog(url[4]).then(blog => {
      console.log(blog.data)

      this.setState({
        titleInputVal: blog.data.title,
				imageurl: blog.data.img,
				date: blog.data.date
      })

      const blocksFromHTML = htmlToDraft(blog.data.blog);
      const {contentBlocks, entityMap } = blocksFromHTML;
      const contentState= ContentState.createFromBlockArray(contentBlocks, entityMap);
      this.setState({
        editorHTML: {__html: blog.data.blog}
      })
      
    })

		
	}		

	render() {
		return (
			<div className="blogPage">
				<MainNav/>
				<IconNav/>
				<div className="container">
					<div className="row">
						<div className="col-xl-12 center">
							<h1>{this.state.titleInputVal}</h1>
							<p>By: Jennifer Larson</p>	
							<p>{this.state.date}</p>
							<div className="preview">
								<span dangerouslySetInnerHTML={this.state.editorHTML} />
							</div>
						</div>	
					</div>	
				</div>
			</div>
		)
	}	
}

export default BlogPage;