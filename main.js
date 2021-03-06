let c = {
  1: 0.0313,
  2: 0.0313,
  3: 0.0625,
  4: 0.0313,
  5: 0.0313,
  6: 0.0313,
  7: 0.0313,
  8: 0.05,
  9: 0.025,
  10: 0.025,
  11: 0.025,
  12: 0.0313,
  13: 0.0313,
  14: 0.0313,
  15: 0.0313,
  16: 0.0167,
  17: 0.0167,
  18: 0.0167,
  19: 0.0167,
  20: 0.0167,
  21: 0.0167,
  22: 0.0167,
  23: 0.0167,
  24: 0.0167,
  25: 0.0375,
  26: 0.0375,
  27: 0.0375,
  28: 0.0375,
  29: 0.0075,
  30: 0.0075,
  31: 0.0075,
  32: 0.0075,
  33: 0.0075,
  34: 0.0075,
  35: 0.0075,
  36: 0.0075,
  37: 0.0167,
  38: 0.0167,
  39: 0.0167,
  40: 0.0167,
  41: 0.0167,
  42: 0.0167,
  43: 0.0133,
  44: 0.0133,
  45: 0.0133,
};

let count = 0;
let a = [];
let b = [];
let d = [];
let e = [];
fetch("https://617d4c5a1eadc50017136462.mockapi.io/Raiting")
  .then((res) => {
    return res.json();
  })
  .then((json) => {
    for (i = 0; i <= 24; i++) {
      let sum = 0;
      a.push(json[i].name);
      for (j = 1; j <= 44; j++) {
        sum += json[i].field[j] * c[j];
      }
      b.push(sum);
    }

    const ctx = document.getElementById("myChart");
    const myChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: a,
        datasets: [
          {
            label: "Итоговый балл",
            data: b,
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  });

fetch("https://617d4c5a1eadc50017136462.mockapi.io/RaitingKK")
  .then((res) => {
    return res.json();
  })
  .then((json) => {
    for (i = 0; i <= 4; i++) {
      let sum = 0;
      d.push(json[i].name);
      for (j = 1; j <= 44; j++) {
        sum += json[i].field[j] * c[j];
      }
      e.push(sum);
    }

    const ctx = document.getElementById("KK");
    const KK = new Chart(ctx, {
      type: "bar",
      data: {
        labels: d,
        datasets: [
          {
            label: "Итоговый балл",
            data: e,
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  });
