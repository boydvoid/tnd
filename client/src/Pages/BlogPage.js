import React, { useState, useEffect } from 'react';
import IconNav from '../Components/IconNav/IconNav';
import api from '../utils/api';
import { EditorState, convertToRaw, convertFromRaw, ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import Navbar from '../Components/Navbar/Navbar';
import PBtn from '../Components/PBtn/PBtn'
import Input from '../Components/Input/Input'
import './BlogPage.css'
const BlogPage = (props) => {
	const [id, setId] = useState('')
	const [editorHTML, setEditorHTML] = useState({ __html: '<p></p>' } )
	const [titleInputVal, setTitleInputVal] = useState('')
	const [date, setDate] = useState('')
	const [imageUrl, setImageUrl] = useState('')


	useEffect(() => {

		let url = window.location.href.split('/');

		setId(url[4])
		api.loadBlog(url[4]).then(blog => {
			let viewsUpdate = {
				id: url[4],
				views: blog.data.views + 1
			}

			api.updateViews(viewsUpdate).then(done => {
				console.log('updated views')
			})

			setTitleInputVal(blog.data.title)
			setImageUrl(blog.data.img)
			setDate(blog.data.date)


			setEditorHTML({ __html: blog.data.blog })
		})

	}, [])


	return (
		<div className="blogPage">
			<Navbar position='right'>
				<ul>
					<li> <PBtn link="/" external={false}>Home</PBtn> </li>
					<li> <PBtn link="/my-blog" external={false}>Blog</PBtn> </li>
					<li> <PBtn link="https://www.teacherspayteachers.com/Store/The-Teacher-Next-Door" external={true}>My Store</PBtn> </li>
					<li> <PBtn link="/teacher-freebies" external={false}>Teacher Freebies</PBtn> </li>
					<li> <PBtn link="/meet-jenn" external={false}>Meet Jenn</PBtn> </li>
					<li> <PBtn link="/contact-me" external={false}>Contact Me</PBtn> </li>
					<li> <PBtn link="https://www.facebook.com/TheTeacherNextDoor" external={true}><i className="fab fa-facebook" ></i></PBtn> </li>
					<li> <PBtn link="https://www.instagram.com/theteachernextdoor/" external={true}><i className="fab fa-instagram" ></i></PBtn> </li>
					<li> <PBtn link="https://www.pinterest.com/TeacherNextDoor/" external={true}><i className="fab fa-pinterest-square" ></i></PBtn> </li>
					<li> <PBtn link="https://www.teacherspayteachers.com/Store/The-Teacher-Next-Door" external={true}>TpT</PBtn> </li>
					<li><Input className="searchBar" type="text" placeholder="Search..." /></li>
				</ul>
			</Navbar>
			<IconNav />
			<div className="container-fluid blog-container">
				<div className="row">
					<div className="col-xl-12 center">
						<div className="title-container">
							<h1 className="blog-title">{titleInputVal}</h1>
							<p>By: Jennifer Larson</p>
							<p>{date}</p>
							<ul>
								<li> <PBtn link="https://www.facebook.com/TheTeacherNextDoor" external={true}><i className="fab fa-facebook" ></i></PBtn> </li>
								<li> <PBtn link="https://www.instagram.com/theteachernextdoor/" external={true}><i className="fab fa-instagram" ></i></PBtn> </li>
								<li> <PBtn link="https://www.pinterest.com/TeacherNextDoor/" external={true}><i className="fab fa-pinterest-square" ></i></PBtn> </li>
								<li> <PBtn link="https://www.teacherspayteachers.com/Store/The-Teacher-Next-Door" external={true}>TpT</PBtn> </li>
							</ul>
						</div>
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