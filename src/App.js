import React, { useState, useEffect } from 'react';
import './App.css';
import QuestionSpace from './question.js';
import AnswerSpace from './answer.js';

export default function App() {
  const possibleAnswers = [
    'It is certain',
    'It is decidedly so',
    'Without a doubt',
    'Yes definitely',
    'You may rely on it',
    'As I see it, yes',
    'Most likely',
    'Outlook good',
    'Signs point to yes',
    'Yes',
    'Reply hazy, try again',
    'Ask again later',
    'Better not tell you now',
    'Cannot predict now',
    'Concentrate and ask again',
    'Definitely Maybe',
    'Don\'t count on it',
    'My reply is no',
    'My sources say no',
    'Outlook not so good',
    'Very doubtful',
    'No'
  ];

  const possibleAnims = [
    "anim1",
    "anim2",
    "anim3"
  ];

  const [input, setInput] = useState('');
  const [output, setOutput] = useState('Welcome!');
  const [answer, setAnswer] = useState('Ask me, then shake');
  const [anim, setAnim] = useState('');
  const [blur, setBlur] = useState(false);

  useEffect(() => {
    setOutput("Welcome");
  }, []);

  function handleChange(event){
    setInput(event.target.value);
    setAnim('');
    setBlur(false);
  }

  function handleSubmit(event){
    event.preventDefault();
    if(input.length){
      setOutput(input);
      setAnswer(possibleAnswers[Math.floor(Math.random() * possibleAnswers.length)]);
      setInput('');
      setAnim(possibleAnims[Math.floor(Math.random() * possibleAnims.length)])
      setBlur(true);
      console.log(anim);
    }
    
  }

  return (
    <div className="App">
      <QuestionSpace handleChange={handleChange} handleSubmit={handleSubmit} input={input}/>
      <AnswerSpace question={output} answer={answer} anim={anim} blur={blur}/>
      <div className="ground"></div>
    </div>
  );
}

