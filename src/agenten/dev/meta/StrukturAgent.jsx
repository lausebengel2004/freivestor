import React from 'react';

const StrukturAgent = () => {
  return (
    <div className="struktur-agent" style={{ borderBottom: '1px solid #ccc', paddingBottom: '0.5rem', marginBottom: '1rem' }}>
      <h4>🧠 Strukturüberblick</h4>
      <p><strong>Modus:</strong> Entwickleransicht (Meta + Debug)</p>
      <ul>
        <li><strong>/agenten/dev/meta/</strong> – MetaAgenten (nur für dich)</li>
        <li><strong>/agenten/user/</strong> – NutzerAgents (später sichtbar)</li>
      </ul>
    </div>
  );
};

export default StrukturAgent;
