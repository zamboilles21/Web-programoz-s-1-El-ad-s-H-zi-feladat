    const ctx = document.getElementById('barChart').getContext('2d');
    let chart;

    const labels = ["A", "B", "C", "D", "E"];
    const table = document.getElementById("data-table");

    table.querySelectorAll("tbody tr").forEach((row, index) => {
      row.addEventListener("click", () => {
        const data = Array.from(row.children).map(cell => parseInt(cell.textContent));

        if (chart) chart.destroy();

        chart = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: labels,
            datasets: [{
              label: `Sor ${index + 1} adatai`,
              data: data,
              backgroundColor: 'rgba(54, 162, 235, 0.7)',
              borderColor: 'rgba(54, 162, 235, 1)',
              borderWidth: 1
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              y: {
                beginAtZero: true
              }
            },
            plugins: {
              legend: {
                display: true
              }
            }
          }
        });
      });
    });