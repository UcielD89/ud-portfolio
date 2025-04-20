import "./SelectLanguage.css";

import { HiOutlineLanguage } from "react-icons/hi2";
import { useEffect, useRef, useState } from "react";

import flag_ar from '../../assets/svg/flag_ar.svg';
import flag_eu from '../../assets/svg/flag_eu.svg';

function SelectLanguage() {
  // State
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleChangeVisibility = () => {
    setOpen((prev) => !prev);
  };
  const handleLanguageChange = (lang: string) => {
    console.log(`Idioma seleccionado: ${lang}`);
    setOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <div className="language-selector" ref={dropdownRef}>
      <HiOutlineLanguage
        size={44}
        cursor="pointer"
        color="#F2F2F2"
        style={{ paddingInlineEnd: "1rem" }}
        onClick={handleChangeVisibility}
      />
      {open && (
        <div className="dropdown">
          <div onClick={() => handleLanguageChange("es")} style={{cursor: "pointer"}}>
            <img src={flag_ar} width={30} height={30} alt="Español" className="flag"/>
          </div>
          <div onClick={() => handleLanguageChange("en")} style={{cursor: "pointer"}}>
            <img src={flag_eu} width={30} height={30} alt="English" className="flag" />
          </div>
        </div>
      )}
    </div>
  );
}

export default SelectLanguage;
