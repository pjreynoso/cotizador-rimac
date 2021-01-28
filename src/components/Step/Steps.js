import { Children, cloneElement } from "react";

const Step = (props) => {
  const { styles } = props;
  return (
    <div>
      {Children.map(props.children, (child) => {
        return cloneElement(child, { styles });
      })}
    </div>
  );
};

const Steps = (props) => {
  const { styles, current } = props;

  return (
    <div>
      {Children.map(props.children, (child, index) => {
        const isCurrent = child.type === Step && current === index;
        return isCurrent ? cloneElement(child, { styles }) : null;
      })}
    </div>
  );
};

Steps.Step = Step;

export default Steps;