import React, { useState } from 'react';
import Button from '@mui/material/Button';

function TextInput(props) {
    const [isEditingDone, setIsEditingDone] = useState(false);
    const [value, setValue] = useState('')
    return (
        <div>
           {isEditingDone && value ? <h2 onDoubleClick={() => setIsEditingDone(false)}>{value}</h2>
            : 
            <div style={{ display: 'flex', justifyContent: 'center', gap: '5px'}}>
                <input onChange={e => setValue(e.target.value)} value={value}/>
                <Button disabled={value ? false: true} onClick={() => setIsEditingDone(true)} variant="contained" size="small">OK</Button>
            </div>}
        </div>
    );
}

export default TextInput;