import React from "react"

interface IDescription{
    description: string;
  }
  
  const Description: React.FC<IDescription> = props => (
  <p>{props.description}</p>
  );

  export default Description;