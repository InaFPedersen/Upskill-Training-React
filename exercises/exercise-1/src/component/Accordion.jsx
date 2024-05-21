import AccordionItem from './AccordionItem';

const Accordion = ({ data }) => {
  return (
    <div className="accordion">
      {data.map((el, i) => (
        <AccordionItem title={el.title} text={el.text} number={i} key={i} />
      ))}
    </div>
  );
};

export default Accordion;
