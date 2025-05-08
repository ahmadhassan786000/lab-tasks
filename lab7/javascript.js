const data = [
    { reg: "04072213041", name: "Ahmad", gpa: 3.9 },
    { reg: "04072213042", name: "Zain" , gpa: 3.8 },
    { reg: "04072213043", name: "Asjad", gpa: 3.7 },
  ];
  
  const table = document.createElement("table");
  
  // Create header row
  const headers = ["Registration", "GPA"];
  const headerRow = document.createElement("tr");
  headers.forEach(text => {
    const th = document.createElement("th");
    th.textContent = text;
    headerRow.appendChild(th);
  });
  table.appendChild(headerRow);
  
  // Add data rows
  data.forEach(item => {
    const row = document.createElement("tr");
    [item.reg, item.gpa].forEach(text => {
      const td = document.createElement("td");
      td.textContent = text;
      row.appendChild(td);
    });
    table.appendChild(row);
  });
  
  // Add average row
  const avgRow = document.createElement("tr");
  [ "", "" ].forEach(() => {
    const td = document.createElement("td");
    avgRow.appendChild(td);
  });
  table.appendChild(avgRow);
  
  // Click to show average GPA
  avgRow.addEventListener("click", () => {
    const avg = (data.reduce((sum, item) => sum + item.gpa, 0) / data.length).toFixed(2);
    avgRow.cells[0].textContent = "Average GPA";
    // avgRow.cells[1].textContent = "";
    avgRow.cells[1].textContent = avg;
  });
  
  // Add table to page
  document.body.appendChild(table);
  