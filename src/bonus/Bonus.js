import { useState } from 'react';
function Bonus() {
    const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const [letter, setLetter] = useState(0)

    return (
        <div>
            <h1>{letters[letter]}</h1>
            <button onClick={()=> setLetter(letter+1)}>NEXT LETTER</button>
        </div>
    )
}
export default Bonus