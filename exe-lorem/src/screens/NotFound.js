import React from "react";
import { Link } from "react-router-dom";


const NotFoundScreen = () => {
  return (
    <div>
      <h3> Págin não encontrada</h3>
      <Link to ='/'> Voltar a Listagem</Link>
    </div>
  );
}

export default NotFoundScreen;