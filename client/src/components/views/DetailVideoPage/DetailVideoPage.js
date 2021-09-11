import React, { useEffect, useState } from 'react'
import { List, Avatar, Row, Col } from 'antd'
import axios from 'axios'
import SideVideo from './Sections/SideVideo'
import Subscriber from './Sections/Subscriber'
import Comments from './Sections/Comments'
import LikeDislikes from './Sections/LikeDislikes'
// test
function DetailVideoPage(props) {
	const videoId = props.match.params.videoId
	const [Video, setVideo] = useState([])
	const [CommentLists, setCommentLists] = useState([])

	const videoVariable = {
		videoId: videoId,
	}

	useEffect(() => {
		axios.post('/api/video/getVideo', videoVariable).then((response) => {
			if (response.data.success) {
				console.log(response.data.video)
				setVideo(response.data.video)
			} else {
				alert('Failed to get video Info')
			}
		})

		axios.post('/api/comment/getComments', videoVariable).then((response) => {
			if (response.data.success) {
				console.log('response.data.comments', response.data.comments)
				setCommentLists(response.data.comments)
			} else {
				alert('Failed to get video Info')
			}
		})
	}, [])

	const updateComment = (newComment) => {
		setCommentLists(CommentLists.concat(newComment))
	}

	if (Video.writer) {
		return (
			<Row>
				<Col lg={24} xs={24}>
					{/*영상 2개 재생 할부분
					todo : 영상 2개 */}
					<div
						className="postPage"
						style={{ width: '100%', padding: '3rem 4em' }}
					>
						<video
							style={{ width: '50%' }}
							src={`http://localhost:5000/${Video.filePath}`}
							controls
						></video>
						<video
							style={{ width: '50%' }}
							src={`http://localhost:5000/${Video.filePath}`}
							controls
						></video>
					</div>
				</Col>
				<Col lg={18} xs={24}>
					{/*subscribe, comment부분 */}
					<div style={{ width: '100%', padding: '3rem 4em' }}>
						<List.Item
							actions={[
								<LikeDislikes
									video
									videoId={videoId}
									userId={localStorage.getItem('userId')}
								/>,
								<Subscriber
									userTo={Video.writer._id}
									userFrom={localStorage.getItem('userId')}
								/>,
							]}
						>
							<List.Item.Meta
								avatar={<Avatar src={Video.writer && Video.writer.image} />}
								title={<a href="https://ant.design">{Video.title}</a>}
								description={Video.description}
							/>
							<div></div>
						</List.Item>

						<Comments
							CommentLists={CommentLists}
							postId={Video._id}
							refreshFunction={updateComment}
						/>
					</div>
				</Col>

				<Col lg={6} xs={24}>
					{/*사이드 비디오 */}
					<SideVideo />
				</Col>
			</Row>
		)
	} else {
		return <div>Loading...</div>
	}
}

export default DetailVideoPage
