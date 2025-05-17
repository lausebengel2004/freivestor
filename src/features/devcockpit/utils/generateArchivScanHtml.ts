export function generateArchivScanHtml(rows: string[][]): string {
  const scanDate = new Date().toLocaleString("de-DE");

  const tableRows = rows
    .map(
      ([file, type, size, status, recommendation]) => `
        <tr>
          <td>${file}</td>
          <td>${type}</td>
          <td>${size}</td>
          <td>${status}</td>
          <td>${recommendation}</td>
        </tr>`
    )
    .join("\n");

  return `
<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8" />
  <title>ArchivScan Übersicht</title>
  <style>
    body { font-family: sans-serif; padding: 1rem; }
    table { border-collapse: collapse; width: 100%; font-size: 0.9rem; }
    th, td { border: 1px solid #ccc; padding: 0.5rem; }
    th { background-color: #f0f0f0; }
    input { margin-bottom: 1rem; padding: 0.4rem; width: 300px; }
  </style>
</head>
<body>
  <h2>🧹 ArchivScan Übersicht</h2>
  <p>📅 Stand: ${scanDate}</p>
  <input type="text" id="filterInput" placeholder="🔍 Datei, Status oder Empfehlung filtern..." />
  <table id="scanTable">
    <thead>
      <tr><th>Datei</th><th>Typ</th><th>Größe</th><th>Status</th><th>Empfehlung</th></tr>
    </thead>
    <tbody>
      ${tableRows}
    </tbody>
  </table>
  <script>
    const filterInput = document.getElementById("filterInput");
    filterInput.addEventListener("keyup", () => {
      const val = filterInput.value.toLowerCase();
      document.querySelectorAll("#scanTable tbody tr").forEach(row => {
        row.style.display = [...row.cells].some(cell => cell.textContent.toLowerCase().includes(val)) ? "" : "none";
      });
    });
  </script>
</body>
</html>
`.trim();
}
