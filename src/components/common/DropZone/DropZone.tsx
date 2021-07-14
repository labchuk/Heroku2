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