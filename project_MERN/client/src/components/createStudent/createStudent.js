import * as React from 'react';
import { useState } from 'react'; // import useState
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';

export default function Create() { //if u put a lower case letter in front of text, it will give you an error || the first letter need to be uppercase

const [student, setStudent] = useState({

    regNo: 0,
    studentName: '',
    grade: '',
    section: '' //remember to don't need to put a comma here right after the section bcs it's ending here
});

//function Click Button
const createStudent = () => {
    axios.post('http://localhost:5000/students', student)
}

  return (
      <>
      <h2>Create Student</h2>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Registeration No." variant="outlined" value={student.regNo} onChange={(event) => {
          setStudent({ ...student, regNo: event.target.value})
      }} /> 
      <TextField id="outlined-basic" label="Name" variant="outlined" value={student.studentName} onChange={(event) => {
          setStudent({ ...student, studentName: event.target.value})
      }} />
      <TextField id="outlined-basic" label="Grade" variant="outlined" value={student.grade} onChange={(event) => {
          setStudent({ ...student, grade: event.target.value})
      }} />
      <TextField id="outlined-basic" label="Section" variant="outlined" value={student.section} onChange={(event) => {
          setStudent({ ...student, section: event.target.value})
      }} />

      <Button variant="contained" color="primary" onClick={createStudent}>
          Create
        </Button>
    </Box>
    </> //student value refers to const
  );
}
