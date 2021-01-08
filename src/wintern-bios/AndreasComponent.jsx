import React from 'react';
import img from '../assets/bio-photos/bio-pic_Andrea.jpg';

const AndreasComponent = ({bioToShow, color='red'}) => {
  const { useState } = React;

  const [showStateEx, setShowStateEx] = useState(false);

  const randomNum = Math.random();


  return (
    <div className = "andreaBGI">  
        <div className='andreasBio'>
            <h1>Bio: Andrea K Cajamarca</h1>

            <img src={img} />
            <div className = "paraLeft">
            <p>My name is Andrea K Cajamarca</p>
            <p>About Me: I am 21-years-old. I am a Junior in CUNY Hunter College. My major is English, concentrated on Creative Writing; minor in Computer Science. Fun Fact: I have plenty! I am the third oldest of 7 kids. I have a 5-year-old cat named Khloe! I know two other languages (Spanish, and Japanese).</p>
             </div>

            <div className = "paraCenter">
            <p>Things I Like: I like to write! I am currently writing an epic that I've planned out for many years. It is currently being revised, and will continue to be revised until I have written every idea out (it may take a while). I also like to play softcore and relaxing games such as Animal Crossing, Harvest Moon, and Minecraft!</p>
               </div>
               <div className = "paraRight">
            <p>Things I Like: I like to write! I am currently writing an epic that I've planned out for many years. It is currently being revised, and will continue to be revised until I have written every idea out (it may take a while). I also like to play softcore and relaxing games such as Animal Crossing, Harvest Moon, and Minecraft!</p>
               </div>
        </ div>
</div>
  );
}

export default AndreasComponent;