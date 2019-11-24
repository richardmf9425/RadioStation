import React from 'react';
import ReactS3 from 'react-s3';

const config = {
	bucketName: 'atthewellnessnetwork',
	dirName: 'uploads',
	region: 'us-east-1',
	accessKeyId: 'AKIAS264P6ATCSGV3RIW',
	secretAccessKey: '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',
}

function FileUploader() {
	const uploadFile = (e) => {
		console.log(e.target.files[0]);
		ReactS3.uploadFile(e.target.files[0], config)
		.then((data) => {
			console.log(data);
		})
		.catch((err) => {
			console.error(err);
			alert(err);
		})
	}

	return (
		<div className="file-uploader">
			<input 
			type="file"
			onChange={uploadFile}>
			</input>
		</div>
	);
}

export default FileUploader;
