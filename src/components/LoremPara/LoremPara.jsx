import { useState } from "react";

const LoremPara = () => {
    const [numParagraphs, setNumParagraphs] = useState(1);
    const [tempNumParagraphs, setTempNumParagraphs] = useState(1);
    const [generatedParagraphs, setGeneratedParagraphs] = useState([]);
  
    const generateRandomWord = () => {
      const wordLength = Math.floor(Math.random() * 10) + 1;
      let word = '';
      for (let j = 0; j < wordLength; j++) {
        const charCode = Math.floor(Math.random() * 26) + 97;
        word += String.fromCharCode(charCode);
      }
      return word;
    };
  
    const generateRandomWords = () => {
      const numWords = Math.floor(Math.random() * 11) + 30;
      const words = [];
      for (let i = 0; i < numWords; i++) {
        words.push(generateRandomWord());
      }
      return words.join(' ');
    };
  
    const generateLorem = () => {
      const currentNumParagraphs = generatedParagraphs.length;
      const newParagraphs = [];
      const difference = tempNumParagraphs - currentNumParagraphs;
      for (let i = 0; i < difference; i++) {
        newParagraphs.push(generateRandomWords());
      }
      setGeneratedParagraphs([...generatedParagraphs, ...newParagraphs]);
      setNumParagraphs(tempNumParagraphs);
    };
  
    const handleChange = (e) => {
      let newTempNumParagraphs = parseInt(e.target.value);
      newTempNumParagraphs = Math.max(1, newTempNumParagraphs); // Ensure the value is not less than 1
      setTempNumParagraphs(newTempNumParagraphs);
    };
  
    return (
      <div style={{display:'flex', flexDirection:'column', alignItems:'center', color:'brown'}}>
        <h1>TIRED OF BORING LOREM IPSUM?</h1>
        <label style={{color:'black', display:'flex', justifyContent:'space-between', width:'25vw'}}>
          Paragraphs:
          <input type="number" value={tempNumParagraphs} onChange={handleChange} />
          <button style={{color:'white', backgroundColor:'brown', border:'none', borderRadius:'10px'}} onClick={generateLorem}>Generate</button>
        </label>
        
        <div style={{width:'50vw', color:'orange'}}>
          <ol>
            {generatedParagraphs.slice(0, numParagraphs).map((paragraph, index) => (
              <li key={index}>{paragraph}</li>
            ))}
          </ol>
        </div>
      </div>
    );
  };
  
  export default LoremPara;
