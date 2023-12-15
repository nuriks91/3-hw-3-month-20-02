const url = "https://63d304794abff88834170d21.mockapi.io/ss";

const loadingElement = document.createElement("div");
loadingElement.textContent = "Loading...";
const dataContainer = document.getElementById("container");
dataContainer.appendChild(loadingElement);

let originalData = [];

fetch(url)
  .then((res) => {
    if (!res.ok) {
      throw new Error("error");
    }
    return res.json();
  })
  .then((data) => {
    dataContainer.removeChild(loadingElement);

    originalData = data;

    data.forEach((item) => {
      const itemElement = document.createElement("div");
      itemElement.className = "block";

      itemElement.innerHTML = `<img src="${item.avatar}" alt="${item.name}">`;

      itemElement.innerHTML += `ID: ${item.id}, Name: ${item.name}, Age: ${item.age}, Desprition:${item.desprition}`;

      dataContainer.appendChild(itemElement);
    });
  })
  .catch((error) => {
    console.log(error);
  });

function search() {
  const searchInput = document
    .getElementById("searchInput")
    .value.toLowerCase();

  dataContainer.innerHTML = "";

  const filteredData = originalData.filter((item) => {
    return item.name.toLowerCase().includes(searchInput);
  });

  filteredData.forEach((item) => {
    const itemElement = document.createElement("div");
    itemElement.className = "block";

    itemElement.innerHTML = `<img src="${item.avatar}" alt="${item.name}">`;

    itemElement.innerHTML += `ID: ${item.id}, Name: ${item.name}, Age: ${item.age}, Desprition:${item.desprition}`;

    dataContainer.appendChild(itemElement);
  });
}
