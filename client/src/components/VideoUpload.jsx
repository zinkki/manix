import { useState, useEffect } from 'react';
import AWS from 'aws-sdk';
import ReactPlayer from 'react-player/lazy';

export default function VideoUpload() {
  const BucketName = 'auto-manix.com'
	const Region = process.env.REACT_APP_AWS_REGION;
	const key = process.env.REACT_APP_AWS_ACCESS_KEY;

	AWS.config.update({
		accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY,
		secretAccessKey: process.env.REACT_APP_AWS_SECRET_KEY
	})

	const myBucket = new AWS.S3({
		params: { Bucket : BucketName},
		region: Region
	})

	const [selectedFile, setSelectedFile] = useState(null);
	const [progress, setProgress] = useState(0);

	const handleFileInput = (e) => {
		setSelectedFile(e.target.files[0]);
	}

	const uploadFile = (file) => {
		if(!file) {
			alert('파일을 선택해주세요!');
			return;
		}
		const params = {
			ACL: 'public-read',
			Body: file,
			Bucket: BucketName,
			Key: file.name,
			ContentType: 'video/mp4',
			ContentDisposition:"inline",
			CacheControl: "no-cache"
		};

		myBucket.putObject(params)
			.on('httpUploadProgress', (evt) => {
				setProgress(Math.round((evt.load / evt.total)*100))
			})
			.send((err) => {
				if(err) console.log(err);
				else {
					console.log(params.Key);
				}
			})
	}

	return (
	<>
		S3테스트
		<input type="file" onChange={(handleFileInput)} accept="video/*"/>
		<button onClick={()=>{uploadFile(selectedFile);}}>업로두!</button>

		<h2>ReactPlayer</h2>
		<div className='player-wrapper'>
			<ReactPlayer
				className='react-player'
				url={'https://s3.ap-northeast-2.amazonaws.com/auto-manix.com/video2.mp4'}
				width='500px' height='500px' playing={true} muted={true} controls={true}
				light={false} 
			>
			</ReactPlayer>
			<h2>ddddrnt</h2>
		</div>

	</>);
}