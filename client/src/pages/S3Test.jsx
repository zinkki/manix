import { useState, useEffect } from 'react';
import AWS from 'aws-sdk';

export default function S3Test() {
  
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
			ContentType: 'image/jpeg',
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
		<input type="file" multiple onChange={(handleFileInput)} accept="image/jpeg"/>
		<button onClick={()=>{uploadFile(selectedFile);}}>업로두!</button>
	</>);
}
