import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import "./DropZone.scss";
function DropZone(props: { updateImage: any }) {
    const style = {
        width: '134px',
        height: '40px',
    }
    const [fileName, setFileName] = React.useState('')
    const onDrop = useCallback(acceptedFiles => {
        props.updateImage(setFileName(acceptedFiles[0].name))
    }, [props.updateImage])
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })
    return (
        <div style={style} {...getRootProps()}>
            <input {...getInputProps()}
            />
            <div className="dropzone__label">
                {
                    isDragActive ?
                        <p>Drop the photo here...</p> :
                        <p>Drag and drop file here, or click to select the file</p>
                }
            </div>
            <span className='filename'>{fileName}</span>
        </div>
    )
}
export default DropZone;

