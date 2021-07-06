import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import "./DropZone.scss";

// interface Props {
//     uploadPhoto: (image: any) => {},
// }

function DropZone(props: { uploadPhoto: any }) {
    const [fileName, setFileName] = React.useState()
    const onDrop = useCallback(acceptedFiles => {
        // props.updateImage(setFileName(acceptedFiles[0].name))
        // setFileName(acceptedFiles[0].name)
        // uploadPhoto(acceptedFiles[0].name)
        props.uploadPhoto(acceptedFiles[0].name)
        console.log('acceptedFiles ===== ', acceptedFiles[0].name)
        // console.log('fileName ===== ', fileName)

    }, [])
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })
    return (
        <div className='wrapper' {...getRootProps()}>
            <input {...getInputProps()}
            // onChange={() => { console.log('fileName ===', fileName) }}
            // onChange={() => props.uploadPhoto(fileName)}
            />
            <div className="dropzone__label">
                {
                    isDragActive ?
                        <p>Drop the photo here...</p> :
                        <p>Drag and drop file here, or click to select the file</p>
                }
            </div>
        </div>
    )
}
export default DropZone;

