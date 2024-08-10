import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState([]);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleAdd = () => {
    setData([...data, { name, email }]);
    setName("");
    setEmail("");
  };

  const handleDelete = (index) => {
    setData(data.filter((_, i) => i !== index));
  };

  return (
    <div className="flex flex-col items-center mt-10 space-y-6">
      <div className="w-full max-w-4xl p-6 bg-white rounded-lg shadow-lg">
        <Stack direction="row" spacing={2}>
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            value={name}
            onChange={handleNameChange}
          />
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            value={email}
            onChange={handleEmailChange}
          />
          <Button onClick={handleAdd} color="success"  variant="contained">
            <AddIcon />
          </Button>
        </Stack>
      </div>
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg">
        <div className="flex flex-row w-full border-b border-gray-300 bg-gray-100">
          <div className="w-1/3 p-2 text-center font-semibold">Name</div>
          <div className="w-1/3 p-2 text-center font-semibold">Email</div>
          <div className="w-1/3 p-2 text-center font-semibold">Actions</div>
        </div>
        {data.map((entry, index) => (
          <div
            key={index}
            className="flex flex-row w-full border-b border-gray-300"
          >
            <div className="w-1/3 p-2 text-center">{entry.name}</div>
            <div className="w-1/3 p-2 text-center">{entry.email}</div>
            <div className="w-1/3 p-2 text-center">
              <Button
                color="error"
                variant="contained"
                onClick={() => handleDelete(index)}
              >
                <DeleteIcon />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Form;
