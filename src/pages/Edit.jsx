import React, { useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextInput from '../Components/TextInput';
import { exportComponentAsJPEG } from 'react-component-export-image'

function Edit(props) {
    const [params] = useSearchParams()
    const [textCount, setTextCount] = useState(0)
    const ref = useRef()
    return (
        <div ref={ref}>
            <img src={params.get('url')} width='350px'/>
            <br/>
            {textCount > 0 && Array(textCount).fill(0).map(() => {
                return <>
                    <TextInput />
                </>
            })}
            <br />
            <Stack sx={{ justifyContent: 'center' }} direction="row" spacing={2}>
                <Button onClick={() => setTextCount(prev => prev + 1)} variant="contained" size="small">Add fun</Button>
                <Button onClick={() => exportComponentAsJPEG(ref)} variant="contained" size="small">Save</Button>
            </Stack>
        </div>
    );
}

export default Edit;