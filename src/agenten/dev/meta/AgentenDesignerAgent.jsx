// @agenten/dev/meta/AgentenDesignerAgent.js
export const AgentenDesignerAgent = {
  id: "agenten-designer-agent",
  name: "🎨 AgentenDesigner",
  autostart: false,
  visibleInCockpit: true,

  run: (config) => {
    const code = AgentenDesignerAgent.generateTemplate(config);
    return {
      status: "✅ Agentenvorlage erstellt",
      code,
    };
  },

  generateTemplate: ({ name, id, sichtbar, trigger, kategorie }) => {
    return `// @agenten/dev/${kategorie}/${name}.js
export const ${name} = {
  id: "${id}",
  name: "🧠 ${name}",
  autostart: ${trigger === "autostart"},
  visibleInCockpit: ${sichtbar},

  run: (daten) => {
    // TODO: Logik implementieren
    return { status: "🔍 Analyse abgeschlossen", details: [] };
  },

  analyse: () => {
    // TODO: Beispiel-Datenzugriff anpassen
    const daten = JSON.parse(localStorage.getItem("freivestor::daten"));
    return ${name}.run(daten);
  },

  export: () => {
    const result = ${name}.analyse();
    const blob = new Blob([JSON.stringify(result, null, 2)], { type: "application/json" });
    return URL.createObjectURL(blob);
  }
};`;
  },

  export: (config) => {
    const code = AgentenDesignerAgent.generateTemplate(config);
    const blob = new Blob([code], { type: "text/javascript" });
    return URL.createObjectURL(blob);
  }
};
