import { useState } from 'react';
import AccordionItem from './AccordionItem';

const Accordion = ({ data }) => {
  const [curOpen, setIsOpen] = useState(null);
  return (
    <div className="accordion">
      {data.map((el, i) => (
        <AccordionItem
          curOpen={curOpen}
          onOpen={setIsOpen}
          title={el.title}
          number={i}
          key={i}
        >
          {el.text}
        </AccordionItem>
      ))}
      <AccordionItem
        curOpen={curOpen}
        onOpen={setIsOpen}
        title="Thinking in React"
        number={22}
        key={22}
      >
        <p>Allows React developers to:</p>
        <ul>
          <li>Break up UI into components</li>
          <li>Make components reusable</li>
          <li>Place state efficiently</li>
        </ul>
      </AccordionItem>
    </div>
  );
};

export default Accordion;
