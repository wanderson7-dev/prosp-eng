"use client";

import { useEffect } from "react";

export default function DigistoreScript() {
  useEffect(() => {
    // Evita carregar duas vezes
    if (document.getElementById("digistore-js")) return;

    const script = document.createElement("script");
    script.id = "digistore-js";
    script.src = "https://www.digistore24-scripts.com/service/digistore.js";
    script.async = true;
    
    script.onload = () => {
      // @ts-ignore
      if (typeof window.digistoreUpsell === "function") {
        // @ts-ignore
        window.digistoreUpsell();
      }
    };

    document.body.appendChild(script);

    return () => {
      // Limpeza opcional
    };
  }, []);

  return null;
}
