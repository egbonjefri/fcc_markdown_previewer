import Markdown from 'marked-react'
import { useState } from 'react'
import './materialize.css'
const iniText = `## Welcome to my React Markdown Previewer!


#### This is a capstone project for the freeCodeCamp Front-End Libraries course...

###### You can edit this field with your markdown syntax and preview the output in the box below...

As an example, to preview code, enter a single line of code between 2 back ticks like this: \`<div></div>\` 

For multi-line code, wrap your code between three back ticks in the following manner:

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == \`\`\` && lastLine == \`\`\`) {
    return multiLineCode;
  }
}
\`\`\`
You can also make your text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

[Links](https://egbonjefri.github.io/) can be entered like so, and

> Block Quotes! are created like this.

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.



1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![A cute cat](https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80)
`;

function App() {
  const [text, setText] = useState(iniText);
  function handleChange (e) {
    setText(e.target.value)
  }
  function maximize () {
    const toggleBtn = document.getElementsByClassName('toggle-icon')[0];
    const outBtn = document.getElementsByClassName('out-icon')[0];
    const inputText = document.getElementsByClassName('input-text')[0];
    const outputText = document.getElementsByClassName('output')[0];
    const preview = document.getElementsByClassName('previewer-header')[0]


    toggleBtn.style.display = 'none';
    outBtn.style.display = 'block';
    inputText.style.height = '50rem';
    outputText.style.display = 'none';
    preview.style.display = 'none'


  }
  function minimize() {
    const toggleBtn = document.getElementsByClassName('toggle-icon')[0];
    const outBtn = document.getElementsByClassName('out-icon')[0];
    const inputText = document.getElementsByClassName('input-text')[0];
    const outputText = document.getElementsByClassName('output')[0];
    outputText.style.display = 'block'
    const preview = document.getElementsByClassName('previewer-header')[0]


    preview.style.display = 'flex'

    toggleBtn.style.display = 'block';
    outBtn.style.display = 'none';
    inputText.style.height = '20rem';
    outputText.style.display = 'flex'

  }
  function outputMax () {
    const prevIcon = document.getElementsByClassName('prev-icon')[0];
    const prevOut = document.getElementsByClassName('prev-out')[0];
    const editor = document.getElementsByClassName('editor')[0];


    prevIcon.style.display = 'none';
    prevOut.style.display = 'block';
    editor.style.display = 'none'
 
  }
  function outputMin () {
    const prevIcon = document.getElementsByClassName('prev-icon')[0];
    const prevOut = document.getElementsByClassName('prev-out')[0];
    const editor = document.getElementsByClassName('editor')[0];


    prevIcon.style.display = 'block';
    prevOut.style.display = 'none';
    editor.style.display = 'flex'
  }
  return (
    <div className="App">
      <div className='editor'>
      <div className='editor-header'><h3>Editor</h3>
      <i onClick={maximize} className="material-icons toggle-icon right">zoom_out_map</i>
      <i onClick={minimize} className="material-icons out-icon right">unfold_less</i>
      </div>
      <textarea className='input-text' defaultValue={iniText} onChange={handleChange}></textarea>
      </div>
   
      <div className='previewer-header'>
       <i onClick={outputMax} className="material-icons prev-icon right">zoom_out_map</i>
      <i onClick={outputMin} className="material-icons prev-out right">unfold_less</i>
       </div>

    
      <div className='output'>
        <div className='output-content'>
        <Markdown>{text}</Markdown>
        </div>
      </div>
      
    </div>
  );
}

export default App;
