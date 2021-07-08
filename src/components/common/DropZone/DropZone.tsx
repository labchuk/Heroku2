import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import "./DropZone.scss";
import { t } from 'ttag';


function DropZone(props: { uploadPhoto: any }) {
    const onDrop = useCallback(acceptedFiles => {
        props.uploadPhoto(acceptedFiles[0])
    }, [])
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })
    return (
        <div className='wrapper' {...getRootProps()}>
            <input {...getInputProps()} />
            <div className="dropzone__label">
                {
                    isDragActive ?
                        <p>{t`Drop the photo here...`}</p> :
                        <p>{t`Drag and drop file here, or click to select the file`}</p>
                }
            </div>
        </div>
    )
}
export default DropZone;

// import React, { Component } from 'react'
// import { DropzoneArea } from 'material-ui-dropzone'

// class DropZone extends Component {
//     constructor(props: any) {
//         super(props);
//         this.state = {
//             files: []
//         };
//     }
//     handleChange(files: any) {
//         this.setState({
//             files: files
//         });
//     }
//     render() {
//         return (
//             <DropzoneArea
//                 onChange={() => {
//                     this.handleChange.bind(this);

//                 }}
//             />
//         )
//     }
// }

// function DropZone(props: any) {
//     const [files, setFiles] = React.useState([])

//     return (
//         <DropzoneArea
//             onChange={() => console.log(DropZone}
//         />
//     )

// }

// export default DropZone