import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import "./DropZone.scss";
function DropZone(updateData: any) {
    const style = {
        height: 100,
        padding: 20
    }
    const [fileName, setFileName] = React.useState('')
    const onDrop = useCallback(acceptedFiles => {
        updateData(setFileName(acceptedFiles[0].name))
    }, [updateData])
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

