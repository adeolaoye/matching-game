import React from "react";
import { useState } from "react";

export default function Card({ card }) {
  return (
    <div className="card">
      <img src={card.img} alt={card.name} />
    </div>
  );
}
