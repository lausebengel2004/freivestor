// 📄 abschlussTexte.js – motivierende Texte für Feier- und Abschlussmonate

export function getFeierText(name, { useEmoji = true } = {}) {
    return useEmoji
      ? `🎉 Du hast deine Schulden bei ${name} komplett bezahlt. Feiere deinen Erfolg!`
      : `Du hast deine Schulden bei ${name} komplett bezahlt.`;
  }
  
  export function getAbschlussText({ useEmoji = true } = {}) {
    return useEmoji
      ? `🚀 Du hast alle deine Schulden getilgt. Du bist jetzt schuldenfrei.`
      : `Du hast alle deine Schulden getilgt.`;
  }
  