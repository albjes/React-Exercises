import React, { useState } from "react";

import SelectList from "./SelectList";

const SelectsAnidados = () => {
  const [state, setState] = useState("");
  const [town, setTown] = useState("");
  const [suburb, setSuburb] = useState("");

  const TOKEN = "";
  //const TOKEN = "a66a2c06-faa7-4a31-bf0a-3864405c1dad";

  return (
    <div className="mt-8 mb-8 border-b-gray-800 border-b-8">
      <h2 className="bg-gray-800 text-white text-xl p-4 text-center">
        SELECTS ANIDADOS
      </h2>
      <div className="lg:flex lg:justify-center">
        <h3 className="text-center mt-8 mb-8 text-xl">México</h3>
        <SelectList
          title="estado"
          url={`https://api-sepomex.hckdrk.mx/query/get_estados?token=${TOKEN}`}
          handleChange={(e) => {
            setState(e.target.value);
          }}
        />
        {state && (
          <SelectList
            title="municipios"
            url={`https://api-sepomex.hckdrk.mx/query/get_municipio_por_estado/${state}?token=${TOKEN}`}
            handleChange={(e) => {
              setTown(e.target.value);
            }}
          />
        )}
        {town && (
          <SelectList
            title="colonia"
            url={`https://api-sepomex.hckdrk.mx/query/get_colonia_por_municipio/${town}?token=${TOKEN}`}
            handleChange={(e) => {
              setSuburb(e.target.value);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default SelectsAnidados;
