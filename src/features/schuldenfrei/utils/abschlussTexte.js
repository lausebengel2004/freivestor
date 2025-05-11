export function getFeierText(name, { useEmoji = true } = {}) {
  return useEmoji
    ? `🎉 Du hast deine Schulden bei ${name} komplett bezahlt. Feiere deinen Erfolg!`
    : `Du hast deine Schulden bei ${name} vollständig getilgt.`;
}

export function getAbschlussText({ useEmoji = true } = {}) {
  return useEmoji
    ? `🏁 Du hast alle Schulden getilgt. Willkommen in der Freiheit!`
    : `Alle Schulden sind vollständig zurückgezahlt.`;
}
