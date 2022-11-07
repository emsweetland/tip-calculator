import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import React from 'react';
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import FormHelperText from '@mui/material/FormHelperText'
import Button from '@mui/material/Button'



function Calculator() {
    //label cash tips or credit card tips
    const [type, setType] = React.useState('');
    const handleChange = (event: SelectChangeEvent) => {
        setType(event.target.value);
        console.log(type)
        return type
    };

    //this is inputs of the cash/credit tips
    const [tip, setTip] = React.useState(0)
    const handleTip = (event) => {
        setTip(event.target.value)
        console.log(tip)
        return tip
    }

    //the array that will store the cash/credit tips
    let tips = []
    const addTips = (event) => {
      tips.push({type : type,
         tip : tip})
      return console.log(tips)
    }



    return (
        <div>





            <header className="App-header">
                <h1>Tip Calculator!</h1>
            </header>






            <div>

{/* TOGGLE CASH/CREDIT LABEL */}
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-helper-label">Tips</InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        value={type}
                        label="Type"
                        onChange={handleChange}>
                        <MenuItem value="cash">Cash</MenuItem>
                        <MenuItem value="card">Card</MenuItem>
                    </Select>
                    <FormHelperText>Cash or Credit Card Tips?</FormHelperText>
                </FormControl>


{/* TIP VALUE */}
                <TextField
                    id="outlined-read-only-input"
                    type="number"
                    label="$ Amount"
                    onChange={handleTip}
                    />


{/* ADD TIPS */}
                <Button variant="contained" onClick={addTips}>Add Tips</Button>
                
                <h1>current inputs: {type} ${tip}</h1>
                <h2>tips:</h2>

            </div>






            <div>
                <TextField
                    id="outlined-read-only-input"
                    label="Employee" />

                <TextField
                    id="outlined-read-only-input"
                    label="Hours" />
                <Button variant="contained">Add Employee Hours</Button>
            </div>




            <h1>Total Tips:</h1>


            <h1>Total Hours: ##</h1>





        </div>
    );
}

export default Calculator;