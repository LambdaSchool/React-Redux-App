import React, { useState, useEffect } from "react";
import { Meme } from "./components/Meme";

function App() {
  const [templates, setTemplates] = useState([]);
  const [template, setTemplate] = useState(null);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes").then(x =>
      x.json().then(response => setTemplates(response.data.memes))
    );
  }, []);
  return (
    <div style={{ textAlign: "center" }}>
      {template && <Meme template={template} />} {/*here we are displaying the meme component that was selected by the user */}
      {!template && (//we are displaying a list of templates until the user clicks on a meme => that will update the state and it will set the template/meme
        <>
          <h1>Pick a Meme</h1>
          {templates.map(template => {
          //if not template/meme selected show them the options
            return (
              <Meme //basically we extracted the image logic into its own component that way we can use that twice <Meme/>. 
                template={template}
                onClick={() => {
                  setTemplate(template);
                }}
              />
            );
          })}
        </>
      )}
    </div>
  );
}

export default App;
