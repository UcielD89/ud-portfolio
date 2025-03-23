import { Link } from "react-router-dom";
import "./NavigateForView.css";

interface NavigateForViewInteface {
  to: string;
  select_text: number;
  orientation: number;
}

function FormatterText({ option = 0 }) {
  switch (option) {
    case 1:
      return (
        <div className="navigate-for-view-text-1">
          <span>
            DESCRUBRIR <br /> MÁS
          </span>
        </div>
      );
    case 2:
      return (
        <div className="navigate-for-view-text-2">
          <span>
            VOLVER PARA <br /> ATRAS
          </span>
        </div>
      );
  }
}

function NavigateForView({
  to,
  select_text,
  orientation,
}: NavigateForViewInteface) {
  return (
    <div className="navigate-for-view">
      <Link to={to}>
        <FormatterText option={select_text} />
        {orientation == 1 ? (
          <svg
            width="61"
            height="24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="navigate-for-view-right"
          >
            <path
              d="M1.5 10.5a1.5 1.5 0 000 3v-3zm58.227 2.56a1.5 1.5 0 000-2.12l-9.546-9.547a1.5 1.5 0 10-2.12 2.122L56.544 12l-8.485 8.485a1.5 1.5 0 102.121 2.122l9.546-9.546zM1.5 13.5h57.167v-3H1.5v3z"
              fill="#53C1DE"
            />
          </svg>
        ) : (
          <svg
            width="61"
            height="24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            transform="rotate(180 30.5 12)"
            className="navigate-for-view-left"
          >
            <path
              d="M1.5 10.5a1.5 1.5 0 000 3v-3zm58.227 2.56a1.5 1.5 0 000-2.12l-9.546-9.547a1.5 1.5 0 10-2.12 2.122L56.544 12l-8.485 8.485a1.5 1.5 0 102.121 2.122l9.546-9.546zM1.5 13.5h57.167v-3H1.5v3z"
              fill="#53C1DE"
            />
          </svg>
        )}
      </Link>
    </div>
  );
}

export default NavigateForView;
