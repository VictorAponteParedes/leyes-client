//

import { useEffect, useState } from "react";
import { getAllAbogado } from "../../api/abogado";
import { AbogadoCard } from "./abogadoCard";

export function ListasDeAbogado() {
  const [abogado, setAbogado] = useState([]);

  useEffect(() => {
    async function loadAbogado() {
      const response = await getAllAbogado();
      setAbogado(response.data);
    }
    loadAbogado();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-33">
      {abogado.map((item, index) => (
        <AbogadoCard item={item} key={index} />
      ))}
    </div>
  );
}
