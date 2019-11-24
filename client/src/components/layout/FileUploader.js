import React from 'react';
import ReactS3 from 'react-s3';

const config = {
	bucketName: 'atthewellnessnetwork',
	dirName: 'uploads',
	region: 'us-east-1',
	accessKeyId: process.env.REACT_APP_AWS_KEY_ID,
	secretAccessKey: process.env.REACT_APP_AWS_SECRET_KEY
};

function FileUploader() {
	console.log('test' + process.env.REACT_APP_AWS_KEY_ID);
	const uploadFile = (e) => {
		console.log(e.target.files[0]);
		ReactS3.uploadFile(e.target.files[0], config)
			.then((data) => {
				console.log(data);
			})
			.catch((err) => {
				console.error(err);
				alert(err.message);
			});
	};

	return (
		<div className="file-uploader">
			<input type="file" onChange={uploadFile} />
		</div>
	);
}

export default FileUploader;
