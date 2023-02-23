import React, { useState } from "react";
import { MdOutlineAdd } from "react-icons/md";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
  const [change, setChange] = useState(false);

  function displayTitle(event) {
    setChange(true);
  }

  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  function Input() {
    return (
      <input
        name="title"
        onChange={handleChange}
        value={note.title}
        placeholder="Title"
      />
    );
  }

  return (
    <div>
      <form className="create-note">
        {change ? <Input /> : null}
        <textarea
          name="content"
          onChange={handleChange}
          onClick={displayTitle}
          value={note.content}
          placeholder="Take a note..."
          rows={change ? "3" : "1"}
        />
        <Zoom in={change}>
          <Fab onClick={submitNote}>
            <MdOutlineAdd />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
