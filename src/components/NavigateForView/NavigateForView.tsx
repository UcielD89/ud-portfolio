import { Link } from "react-router-dom";
import "./NavigateForView.css";

interface NavigateForViewInteface {
  to: string;
  select_text: number;
}

function FormatterText({ option = 0 }) {
  switch (option) {
    case 1:
      return (
        <div className="navigate-for-view-text-1">
          <span>
            DESCRUBRIR
          </span>
        </div>
      );
    case 2:
      return (
        <div className="navigate-for-view-text-2">
          <span>REGRESAR</span>
        </div>
      );
  }
}

function NavigateForView({
  to,
  select_text,
}: NavigateForViewInteface) {
  return (
    <div className="navigate-for-view">
      <Link to={to}>
        <FormatterText option={select_text} />
      </Link>
    </div>
  );
}

export default NavigateForView;
