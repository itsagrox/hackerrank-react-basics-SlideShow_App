import React,{useState} from "react";

const Slides = ({ slides }) => {
  const [current, setCurrent] = useState(0);

  return (
    <div>
      <div id="navigation" className="text-center">
        <button
          data-testid="button-restart"
          disabled={current === 0}
          onClick={() => setCurrent(0)}
          
        >
          Restart
        </button>
        <button
          data-testid="button-prev"
          disabled={current === 0}
          onClick={() => setCurrent(current - 1)}
          
        >
          Prev
        </button>
        <button
          data-testid="button-next"
          onClick={() => setCurrent(current + 1)}
          disabled={current === slides.length - 1}
         
        >
          Next
        </button>
      </div>
      <div id="slide" className="card text-center">
        <h1 data-testid="title">{slides[current]["title"]}</h1>
        <p data-testid="text">{slides[current]["text"]}</p>
      </div>
    </div>
  );
};

export default Slides;
