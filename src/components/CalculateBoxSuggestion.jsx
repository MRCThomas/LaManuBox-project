export function CalculateBoxSuggestion(result) {
    let text = "";
    let colorClass = "";
  
    if (result >= 0 && result <= 7.5) {
      text = "Vous pouvez prendre la taille S (7.5 m3)";
      colorClass = "green"; // Texte vert pour "S"
    } else if (result > 7.5 && result <= 15) {
      text = "Vous pouvez prendre la taille M (15 m3)";
      colorClass = "blue"; // Texte bleu pour "M"
    } else if (result > 15 && result <= 25) {
      text = "Vous pouvez prendre la taille L (25 m3)";
      colorClass = "yellow"; // Texte jaune pour "L"
    } else if (result > 25 && result <= 40) {
      text = "Vous pouvez prendre la taille XL (40 m3)";
      colorClass = "red"; // Texte rouge pour "XL"
    } else {
      text = "Aucune suggestion possible. Vos articles dépassent nos box, veuillez diminuer les articles sélectionnés.";
      colorClass = "black"; // Texte noir pour aucune suggestion
    }
  
    return { text, colorClass };
  }
  