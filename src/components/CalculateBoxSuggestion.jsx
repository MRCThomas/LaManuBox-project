export function CalculateBoxSuggestion(result) {
    let text = "";
    let colorClass = "";
    let price = ""
  
    if (result >= 0 && result <= 7.5) {
      text = "Vous pouvez prendre la taille S (7.5 m3)";
      colorClass = "purple"; 
      price = "50€"
      // Texte vert pour "S"
    } else if (result > 7.5 && result <= 15) {
      text = "Vous pouvez prendre la taille M (15 m3) ";
      colorClass = "green"; // Texte bleu pour "M"
      price = "80€"
    } else if (result > 15 && result <= 25) {
      text = "Vous pouvez prendre la taille L (25 m3) prix : 140 €";
      colorClass = "green"; // Texte jaune pour "L"
      price = "1400€"
    } else if (result > 25 && result <= 40) {
      text = "Vous pouvez prendre la taille XL (40 m3) prix : 200 €";
      colorClass = "blue"; // Texte rouge pour "XL"
      price = "200€"
    } else {
      text = "Aucune suggestion possible. Vos articles dépassent nos box, veuillez diminuer les articles sélectionnés.";
      colorClass = "purple"; // Texte noir pour aucune suggestion
      price = "0€"

    }
  
    return { text, colorClass,price };
  }
  