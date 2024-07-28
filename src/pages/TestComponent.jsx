import React, { useState } from "react";
import BtnDropdown from "@/components/dropdown/Dropdwon";
import { ButtonAlt, ButtonIcon} from "@/components/ButtonAlt";
import { CardMutation } from "@/components/Card";
import FilterDate from "@/components/FilterDate";

const TestComponent = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionSelect = (value) => {
    setSelectedOption(value);
    console.log("Selected option:", value);
  };

  const options = [
    { value: "action1", label: "Action 1" },
    { value: "action2", label: "Action 2" },
    { value: "action3", label: "Action 3" },
  ];

  return (
    <div style={{ marginLeft: "80px" }}>
      <h3>Variant ButtonIcon</h3>
      <FilterDate />
      <ButtonIcon
        label="Download"
        onClick={() => console.log("Solid Download Clicked")}
        variant="btnDownload2nd"
      />
      <ButtonIcon
        label="Download Two"
        onClick={() => console.log("Solid Download Two Clicked")}
        variant="btnDownload1st"
      />
      <ButtonIcon
        label="Add Button"
        onClick={() => console.log("Outline Add Button Clicked")}
        variant="btnAdd"
      />
      <ButtonIcon
        label="Share Button"
        onClick={() => console.log("Outline Add Button Clicked")}
        variant="btnShare"
      />
      <ButtonIcon
        label="Back Button"
        onClick={() => console.log("Outline Add Button Clicked")}
        variant="btnBack"
      />
      <h3>Variant Alternatif Button</h3>
      <div className="d-flex flex-row">
        <ButtonAlt
          label="Secondary"
          onClick={() => console.log("secondary Button")}
          variant="btnAltSecondary"
        />
        <ButtonAlt
          label="Primary"
          onClick={() => console.log("secondary Button")}
          variant="btnAltPrimary"
        />
        <ButtonAlt
          label="SecondaryIcon"
          onClick={() => console.log("secondary Button")}
          variant="btnAltSecondaryIcon"
        />
      </div>
      <h3>Dropdown</h3>
      <BtnDropdown
        options={options}
        onOptionSelect={handleOptionSelect}
        title="Select an option"
      />
      <h3>Card for mutation </h3>
      <CardMutation
        color="red"
        dateTXN="7 juli 2024"
        noTXN="121313112343111 DBT4"
        nominal="- Rp. 200.000"
        time="11:12:21 WIB"
        typeTXN="Uang Keluar"
      />
    </div>
  );
};

export default TestComponent;
