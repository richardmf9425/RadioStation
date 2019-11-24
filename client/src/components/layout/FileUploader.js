import React, { useState } from 'react';
import ReactS3 from 'react-s3';

const config = {
	bucketName: 'atthewellnessnetwork',
	dirName: 'uploads',
	region: 'us-east-1',
	accessKeyId: process.env.REACT_APP_AWS_KEY_ID,
	secretAccessKey: process.env.REACT_APP_AWS_SECRET_KEY
};

function FileUploader() {
	const [ fileName, setFileName ] = useState('');
	const uploadFile = (e) => {
		setFileName(e.target.files[0].name);
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
			{/* <input type="file" className="file-picker" onChange={uploadFile} /> */}
			<div className="browse-wrap">
				<div className="title">Choose a file to upload</div>
				<input type="file" name="upload" class="upload" title="Choose a file to upload" onChange={uploadFile} />
			</div>
			<span className="upload-path">{fileName}</span>
		</div>
	);
}

export default FileUploader;
