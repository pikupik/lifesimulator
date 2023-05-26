let player = {
  name: "John Doe",
  money: 50000,
  level: 1,
  energy: 100,
  maxEnergy: 100,
  inventory: [],
  inventoryHouse: [],
  gadget: []
};


 
 let isMapOpen = false;
let isJobFound = false;

function goToMap() {
  lowenergy();
  let gameMap = document.getElementById("game-map");

  if (!isMapOpen) {
    // Cek apakah sedang tidur

    gameMap.innerHTML = `
      <h3>Pilih Map</h3>
      <ul style="list-style-type: none;">
        <li><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIwMmnnN6jcbppprivTMVM_-0XfBpKZkT_DA&usqp=CAU" style="width: 300px; height: 200px; margin-bottom: 20px;" alt="Rumah" onclick="showRumah()"></li>
        <li><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJaXMZ7ESN3mwt9Jtty4apCsDYmkNnKSKSCQ&usqp=CAU" style="width: 300px; height: 200px; margin-bottom: 20px;" alt="Kantor" onclick="showKantor()"></li>
        <li><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnJxFUZWaOk2Zu-CJ3DSkv2FTfeX25NrYpyg&usqp=CAU" style="width: 300px; height: 200px; margin-bottom: 20px;" alt="Supermarket" onclick="showSupermarket()"></li>
        <li><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS80j5vsAMqRboxOfT8FxT71XgLabdD4YiUCA&usqp=CAU" style="width: 300px; height: 200px; margin-bottom: 20px;" alt="FoodMarket" onclick="showFoodmarket()"></li>
        <li><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx3_mjWnZrk8ybrfMiI8lwsBUeMTo2oh3EJQ&usqp=CAU" style="width: 300px; height: 200px; margin-bottom: 20px;" alt="Minimarket" onclick="showMinimarket()"></li>
        <li><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMxU_CLxvdnlKHho6jYZOsPtYer2qtBnFCwYank-n-89Qq5zmpzM7tGJzj&s=10" style="width: 300px; height: 200px; margin-bottom: 20px;" alt="Kebun" onclick="showPerkebunan()"></li>
      </ul>
    `;
    isMapOpen = true;
  } else {
    gameMap.innerHTML = ""
    isMapOpen = false;
  }
}

function showKantor() {
  lowenergy();
  let gameMap = document.getElementById("game-map");
  if (!isJobFound) {
    alert("Kamu Belum Mencari Pekerjaan!");
  } else {
  gameMap.innerHTML = `
    <h3>Kantor</h3>
    <div style="display: flex; flex-direction: column; align-items: center; justify-content: flex-end; height: 600px;">
    <div style="display: flex; justify-content: center; align-items: center; height: 600px;">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJaXMZ7ESN3mwt9Jtty4apCsDYmkNnKSKSCQ&usqp=CAU" alt="Kantor" style="width: 300px; height: 200px;">
   </div>
    <button id="start-working-button" onclick="startWorking()">Mulai Bekerja</button>
    </div>
  `;
  }
}


function startFindJob() {
  lowenergy();
  isJobFound = true;
  isMapOpen = false;
  // findJobButton.disabled = true; // Menonaktifkan tombol saat proses berlangsung

  let findjob = 20;
  let progressContainer = document.createElement("div");
  progressContainer.classList.add("progress-container");
  progressContainer.style.display = "block"; // Menampilkan progress bar
  document.body.appendChild(progressContainer);

  let progressBar = document.createElement("div");
  progressBar.classList.add("progress-bar");
  progressContainer.appendChild(progressBar);

  let progressText = document.createElement("span");
  progressText.textContent = "Sedang Mencari Pekerjaan...";
  progressContainer.appendChild(progressText);

  let progress = 0;
  let intervalId = setInterval(function() {
    progress += 1;
    progressBar.style.width = `${progress}%`;

    if (progress === 100) {
      clearInterval(intervalId);
      document.body.removeChild(progressContainer);

     // findJobButton.remove(); // Menghapus tombol setelah proses selesai
      // Update tampilan info pemain
      displayPlayerInfo();
      showNotification('Selamat Kamu Diterima Kerja');
    }
  }, findjob * 10);

  // Panggil fungsi untuk menampilkan kantor setelah proses selesai
  isJobFound = true;
  isMapOpen = true;
}



// Fungsi untuk mengatur tampilan game-ma



function showRumah() {
  lowenergy();
  let gameMap = document.getElementById("game-map");
  gameMap.innerHTML = `
    <h3>Rumah</h3>
  <div style="display: flex; flex-direction: column; align-items: center; justify-content: flex-end; height: 600px;">
    <div style="display: flex; justify-content: center; align-items: center; height: 600px;">
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIwMmnnN6jcbppprivTMVM_-0XfBpKZkT_DA&usqp=CAU" alt="Kantor" style="width: 300px; height: 200px;">
  </div>
  <button id="start-sleeping-button" onclick="startSleeping()" style="margin-bottom: 10px; font-size: 20px;">Tidur</button>
  <button id="show-inventory-button" onclick="toggleInventoryHouse('inventoryHouse')" style="font-size: 20px;">Lihat Inventory</button>
  </div>


    `;  
}


//fungsi tamp
function showMinimarket() {
  lowenergy();
  let gameMap = document.getElementById("game-map");
  gameMap.innerHTML = `
    <h3>Electronic Shop</h3>
    <div style="display: flex; flex-direction: column; align-items: center; justify-content: flex-end; height: 600px;">
    <div style="display: flex; justify-content: center; align-items: center; height: 600px;">
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx3_mjWnZrk8ybrfMiI8lwsBUeMTo2oh3EJQ&usqp=CAU" alt="electronic" style="width: 300px; height: 200px;">
  </div>
      <button onclick="buyItem('Laptop', 10000)">Beli Laptop (Spec Low) ($10000)</button>
      <button onclick="('Handphone', 500)">Beli Handphone ($500)</button>
      </div>
   `;
}

function showFoodmarket() {
  lowenergy();
  let gameMap = document.getElementById("game-map");
  gameMap.innerHTML = `
    <h3>Food Market</h3>
   <div style="display: flex; flex-direction: column; align-items: center; justify-content: flex-end; height: 600px;">
    <div style="display: flex; justify-content: center; align-items: center; height: 600px;">
    
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS80j5vsAMqRboxOfT8FxT71XgLabdD4YiUCA&usqp=CAU" alt="Kantor" style="width: 300px; height: 200px;">
  
  </div>
        <button onclick="buyItem('Nasi Uduk', 500)">Beli Nasi Ayam $500 (500)</button>
        <button onclick="buyItem('Air Putih', 20)">Beli Air Putih $20 (20)</button>
        <button onclick="buyItem('Bibit Jeruk', 200)">Beli Bibit Jeruk $200</button>
    </div>
  `;
}

function showSupermarket() {
  lowenergy();
  let gameMap = document.getElementById("game-map");
  gameMap.innerHTML = `
    <h3>IKEI</h3>
     <div style="display: flex; flex-direction: column; align-items: center; justify-content: flex-end; height: 600px;">
    <div style="display: flex; justify-content: center; align-items: center; height: 600px;">
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnJxFUZWaOk2Zu-CJ3DSkv2FTfeX25NrYpyg&usqp=CAU" alt="ikei" style="width: 300px; height: 200px;">
  </div>
        <button onclick="buyItems('Bed', 800)">Buy Bed $800</button>
        <button onclick="buyItems('Chair', 80)">Buy Chair $80</button>
     </div>
  `;
}


let isPerkebunanUnlocked = false;
let isPerkebunanUnderConstruction = false;
let perkebunanConstructionTime = 60; // 15 menit dalam detik
let perkebunanProgress = 0;
let perkebunanInterval;

function showPerkebunan() {
  lowenergy();
  const gameMap = document.getElementById("game-map");

  if (!isPerkebunanUnlocked) {
    if (!isPerkebunanUnderConstruction) {
      if (player.money >= 10000) {
        player.money -= 10000;
        displayGameMessage("Membangun Perkebunan....");
        isPerkebunanUnderConstruction = true;
        startPerkebunanConstruction();
        displayPlayerInfo();
      } else {
        displayGameMessage("Uang Anda tidak mencukupi untuk membuka perkebunan.");
      }
    } else {
      displayGameMessage("Perkebunan sedang dalam tahap pembangunan.");
      displayGameMessage("Waktu yang dibutuhkan:", formatTime(perkebunanConstructionTime - perkebunanProgress));
    }
  } else {
    //masukan function
    gameMap.innerHTML = `
    <h3>Perkebunan</h3>
    <div style="display: flex; flex-direction: column; align-items: center; justify-content: flex-end; height: 600px;">
    <div style="display: flex; justify-content: center; align-items: center; height: 600px;">
  <img src="#" alt="perkebunan" style="width: 300px; height: 200px;">
  </div>
        <button onclick="tanamJeruk()">Tanam Jeruk (Harus memiliki Bibit Jeruk)</button>
         <br>
         <br>
         <br>
         <p>
         Ini adalah perkebunanmu, kamu bisa menjual hasil bibitmu di toko penjualan atau ke player lain di exchange market. Jika kamu beruntung
            kamu akan mendapatkan Gold Level, itu berharga!
         
         </p>
      </div>
     `;
  }
}

function startPerkebunanConstruction() {
  let progressContainer = document.createElement("div");
  progressContainer.classList.add("progress-container");
  progressContainer.style.display = "block"; // Menampilkan progress bar
  document.body.appendChild(progressContainer);

  let progressBar = document.createElement("div");
  progressBar.classList.add("progress-bar");
  progressContainer.appendChild(progressBar);

  let progressText = document.createElement("span");
  progressText.textContent = "Sedang Dalam Pembangunan...";
  progressContainer.appendChild(progressText);

  let progress = 0;
  let intervalId = setInterval(function() {
    progress += 1;
    progressBar.style.width = `${progress}%`;

    if (progress === 100) {
      clearInterval(intervalId);
      document.body.removeChild(progressContainer);
      isPerkebunanUnlocked = true;

      displayGameMessage("Perkebunan berhasil dibuka!");
    }
  }, perkebunanConstructionTime * 10);
}


function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
}





function goToMarket() {
  showNotification("Roboto: Beep Beepp.... Under Construction. Updated Soon!")
  
}  
  
  
//fungsii berkurangnya energi setiap 5 detik
function decreaseEnergy() {
  setInterval(function() {
    if (player.energy > 0) {
      player.energy--;
      displayPlayerInfo(); // Update tampilan info pemain
    }
  }, 20000); // Mengurangi energi setiap 5 detik (5000 milidetik)
}
 
 
//low energy
function lowenergy() {
  if (player.energy === 0) {
    showNotification("Kamu harus beristirahat.");
    startPingsan();
    return;
  } else if (player.energy === 10){
    showNotification("Karakter kamu lelah, dia akan pingsan jika kamu tidak tidur")
    return;
  } else if (player.energy >= 10) {
    let buttons = document.getElementsByTagName("button");
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].style.display = "";
    }
    return;
  }

  let buttons = document.getElementsByTagName("button");
  for (let i = 0; i < buttons.length; i++) {
    if (buttons[i].id !== "start-sleeping-button") {
      buttons[i].style.display = "none";
    }
  }
}




function generateRandomText() {
  var items = ["Apel", "Anggur", "Jeruk", "Strawberi", "Pisang", "Mangga", "Nanas", "Melon", "Pepaya"];
  var randomItems = [];

  // Generate random items
  while (randomItems.length < 3) {
    var randomIndex = Math.floor(Math.random() * items.length);
    var randomItem = items[randomIndex];

    if (!randomItems.includes(randomItem)) {
      randomItems.push(randomItem);
    }
  }

  var text = "Hari ini ";

  // Add random items to the text
  for (var i = 0; i < randomItems.length; i++) {
    text += randomItems[i] + " Naik ";
    text += (Math.random() * (1 - 0.01) + 0.01).toFixed(2) + " per unit";

    if (i !== randomItems.length - 1) {
      text += ", ";
    }
  }
  
  document.getElementById("marqueeText").textContent = text;
}

window.onload = function() {
  generateRandomText();
};

  
// Fungsi untuk menampilkan informasi pemain di pojok kanan atas lay

function displayPlayerInfo() {
  lowenergy();
  let playerInfo = document.getElementById("game-info");
  
  playerInfo.innerHTML = `
    <div class="player-info">
      <div class="player-info-item">
        <div class="player-info-value" style="background-color: green; color: white;">
          $${player.money}
        </div>
      </div>
      <div class="player-info-item">
        <div class="player-info-value" style="background-color: blue; color: white;">
          ${player.level}
        </div>
      </div>
      <div class="player-info-item">
        <div class="player-info-value" style="background-color: red; color: white; display: flex; align-items: center;">
          ${player.energy}/${player.maxEnergy}
        </div>
       <h4> Action </h4>
          <button id="start-makan-button" onclick="eatFood()">Makan</button>
          <button id="start-minum-button" onclick="drinkWater()">Minum</button>
          <button onclick="toggleInventory()">Inventory</button>
          ${isJobFound ? '' : '<button id="start-findjob-button" onclick="startFindJob()">Mencari Pekerjaan</button>'}
          <button id="show-id-pass" onclick="showPass()"> ID Card </button>
      </div>
    </div>
  `;
}

lowenergy();
decreaseEnergy();

//memasukan item kedalam inventory
function addItemToInventory(item, quantity) {
  let existingItem = player.inventory.find(i => i.name === item);

  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
   player.inventory.push({name: item, quantity: quantity });
  }

  displayPlayerInfo();
  displayInventory();
}

//mengeluarkan atau mengkosongan item didalam inventory
function removeItemFromInventory(item, quantity) {
  let existingItem = player.inventory.find(i => i.name === item);

  if (existingItem) {
    // periksa apakah nilai energi setelah ditambahkan melebihi nilai maksimal
    if (player.energy + quantity * existingItem.energyRestore > player.maxEnergy) {
      alert("Energi kamu sudah terpenuhi");
      return;
    }
    existingItem.quantity -= quantity;

    if (existingItem.quantity <= 0) {
      player.inventory = player.inventory.filter(i => i !== existingItem);
    }
    
    //player.energy += quantity * existingItem.energyRestore;
    // periksa apakah nilai energi sudah mencapai nilai maksimal
    if (player.energy > player.maxEnergy) {
      player.energy = player.maxEnergy;
    }
  }

  displayPlayerInfo();
  displayInventory();
}


//display inventory
function displayInventory() {
  let inventoryContainer = document.getElementById("inventory");

  if (inventoryContainer) {
    let inventoryList = inventoryContainer.querySelector("ul");

    if (inventoryList) {
      inventoryList.innerHTML = "";

      player.inventory.forEach(item => {
        let listItem = document.createElement("li");
        listItem.textContent = `${item.name}: ${item.quantity}`;
        inventoryList.appendChild(listItem);
      });
    }

    // Tambahkan kondisi untuk menampilkan atau menyembunyikan inventory
    inventoryContainer.style.display = "block"; // Menampilkan inventory
  }
}

//display inventory House
function displayInventoryHouse() {
  let inventoryContainer = document.getElementById("inventoryHouse");

  if (inventoryContainer) {
    let inventoryList = inventoryContainer.querySelector("ul");

    if (inventoryList) {
      inventoryList.innerHTML = "";

      player.inventoryHouse.forEach(item => {
        let listItem = document.createElement("li");
        listItem.textContent = `${item.name}: ${item.quantity}`;
        inventoryList.appendChild(listItem);
      });
    }
    
    // Tambahkan kondisi untuk menampilkan atau menyembunyikan inventory
    inventoryContainer.style.display = "block"; // Menampilkan inventory

    
  }
}

//memasukan item kedalam inventory Runah
function addItemToInventoryHouse(item, quantity) {
  let existingItem = player.inventoryHouse.find(i => i.name === item);

  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
   player.inventoryHouse.push({name: item, quantity: quantity });
  }

  displayPlayerInfo();
  displayInventoryHouse();
}

//mengeluarkan atau mengkosongan item didalam inventory
function sellItemFromInventoryHouse(item, quantity) {
  let existingItem = player.inventoryHouse.find(i => i.name === item);

  if (existingItem) {
    // periksa apakah nilai energi setelah ditambahkan melebihi nilai maksimal
    existingItem.quantity -= quantity;

    if (existingItem.quantity <= 0) {
      player.inventory = player.inventory.filter(i => i !== existingItem);
    }
    
    
  }

  displayPlayerInfo();
  displayInventoryHouse();
}


//function makan
function eatFood() {
  if (player.inventory <= 0){
    showNotification("Kamu tidak punya makanan");
  }
  if (player.energy === player.maxEnergy) {
    alert("Energi kamu sudah terpenuhi");
  } else {
    removeItemFromInventory("Nasi Uduk", 1);
    player.energy += 10;
    // periksa apakah nilai energi sudah mencapai nilai maksimal
    if (player.energy > player.maxEnergy) {
      player.energy = player.maxEnergy;
    }
  }
  displayPlayerInfo();
}


//function mjnum
function drinkWater() {
  if (player.inventory <= 0){
    showNotification("Kamu tidak punya minuman.");
  }
  if (player.energy == player.maxEnergy) {
    alert("Energi kamu sudah terpenuhi");
  } else {
    removeItemFromInventory("Air Putih", 1);
    player.energy += 10;
    // periksa apakah nilai energi sudah mencapai nilai maksimal
    if (player.energy > player.maxEnergy) {
      player.energy = player.maxEnergy;
    }
  }
  displayPlayerInfo();
}


// Fungsi untuk membeli barang dari toko
function buyItem(itemName, price) {
  if (player.money < price) {
    alert("Uang kamu tidak cukup!");
  } else {
    player.money -= price;
    addItemToInventory(itemName, 1);
    displayPlayerInfo();
    displayInventory();
    alert(`Kamu berhasil membeli ${itemName}!`);
  }
}

// Fungsi untuk membeli barang untuk rumah
function buyItems(itemName, price) {
  if (player.money < price) {
    alert("Uang kamu tidak cukup!");
  } else {
    player.money -= price;
    addItemToInventoryHouse(itemName, 1);
    displayPlayerInfo();
    displayInventoryHouse();
    alert(`Kamu berhasil membeli ${itemName}!`);
  }
}


//fungsi bekerja
function startWorking() {
  let workTime = 60; // Waktu bekerja dalam detik (1 menit)
  let minEarning = 500; // Penghasilan minimum dari bekerja
  let maxEarning = 10000; // Penghasilan maksimum dari bekerja

  let laptopItem = player.inventory.find(item => item.name === "Laptop");
  if (!laptopItem || laptopItem.quantity <= 0) {
    alert("Anda tidak bisa bekerja jika tidak ada laptop");
    return;
  }

  let currentDate = new Date();
  let currentHour = currentDate.getHours();

  if (currentHour >= 6 && currentHour <= 17) {
    if (player.energy >= 10) {
      let energyCost = Math.floor(Math.random() * (10 - 5 + 1) + 5);
      player.energy -= energyCost;

      let progressContainer = document.createElement("div");
      progressContainer.classList.add("progress-container");
      progressContainer.style.display = "block"; // Menampilkan progress bar
      document.body.appendChild(progressContainer);

      let progressBar = document.createElement("div");
      progressBar.classList.add("progress-bar");
      progressContainer.appendChild(progressBar);

      let progressText = document.createElement("span");
      progressText.textContent = "Sedang Bekerja...";
      progressContainer.appendChild(progressText);

      let progress = 0;
      let intervalId = setInterval(function() {
        progress += 1;
        progressBar.style.width = `${progress}%`;

        if (progress === 100) {
          clearInterval(intervalId);
          document.body.removeChild(progressContainer);

          let earning = Math.floor(Math.random() * (maxEarning - minEarning + 1) + minEarning);
          player.money += earning;
          displayPlayerInfo(); // Update tampilan info pemain
          let message;
          if (earning === minEarning) {
            showNotification(`Kerjamu kurang maksimal, kamu hanya mendapatkan $${earning}.`);
          } else if (earning === maxEarning) {
             showNotification(`Kerjamu bagus! Kamu mendapatkan bonus menjadi $${earning}!`);
          } else {
            showNotification(`Kamu mendapatkan $${earning} dari pekerjaanmu.`);
          }
         // displayGameMessage(`Anda telah bekerja. ${message} Sisa energi Anda ${player.energy}`);
          document.querySelector('#start-working-button').removeAttribute('disabled');
        }
      }, workTime * 10); // Mengubah waktu ke dalam milidetik

      document.querySelector('#start-working-button').setAttribute('disabled', true);
    } else {
      alert("Energi Anda tidak cukup!");
    }
  } else {
    alert("Anda hanya bisa bekerja antara jam 6 pagi sampai jam 5 sore");
  }
}

//funsgi tanam
function tanamJeruk() {
  let waktutanam = 60; // Waktu bekerja dalam detik (1 menit)

  let bibitJeruk = player.inventory.find(item => item.name === "Bibit Jeruk");
  if (!bibitJeruk || bibitJeruk.quantity <= 0) {
    alert("Anda tidak punya bibit");
    return;
  }
  
    if (player.energy >= 10) {
      let energyCost = Math.floor(Math.random() * (10 - 5 + 1) + 5);
      player.energy -= energyCost;

      let progressContainer = document.createElement("div");
      progressContainer.classList.add("progress-container");
      progressContainer.style.display = "block"; // Menampilkan progress bar
      document.body.appendChild(progressContainer);

      let progressBar = document.createElement("div");
      progressBar.classList.add("progress-bar");
      progressContainer.appendChild(progressBar);

      let progressText = document.createElement("span");
      progressText.textContent = "Sedang Menanam...";
      progressContainer.appendChild(progressText);

      let progress = 0;
      let intervalId = setInterval(function() {
        progress += 1;
        progressBar.style.width = `${progress}%`;

        if (progress === 100) {
          clearInterval(intervalId);
          document.body.removeChild(progressContainer);

          
          addItemToInventory("Jeruk", 100);
          displayPlayerInfo(); // Update tampilan info pemain
         removeItemFromInventory("Bibit Jeruk", 1);
          document.querySelector('#start-working-button').removeAttribute('disabled');
        }
      }, waktutanam * 10); // Mengubah waktu ke dalam milidetik

      document.querySelector('#start-working-button').setAttribute('disabled', true);
    } else {
      alert("Energi Anda tidak cukup!");
    }
  }



//fungsi tidur
function startPingsan() {
  // Kode sebelumnya
  
  let sleepingTime = 60; // Waktu bekerja dalam detik (1 menit)   
  if (player.energy <= 100) {    
    // Kode sebelumnya
    let progressContainer = document.createElement("div");
    progressContainer.classList.add("progress-container");
    progressContainer.style.display = "block"; // Menampilkan progress bar
    document.body.appendChild(progressContainer);


    let progressBar = document.createElement("div");
    progressBar.classList.add("progress-bar");
    progressContainer.appendChild(progressBar);
    
    let progressText = document.createElement("span");
    progressText.textContent = "Sedang Tidur...";
    progressContainer.appendChild(progressText);


    let progress = 0;
    let intervalId = setInterval(function() {
      progress += 1;
      progressBar.style.width = `${progress}%`;

      if (progress === 100) {
        clearInterval(intervalId);
        document.body.removeChild(progressContainer);
        player.energy += 30;
        displayPlayerInfo();
        displayGameMessage(`Anda telah pingsan, tidurlah, sekarang energi anda ${player.energy}`);

        // Mengaktifkan kembali elemen-elemen yang dipilih
        let mapImages = document.querySelectorAll("#game-map li img");
        mapImages.forEach(image => image.removeAttribute('onclick', 'disabled'));
     
      }
    }, sleepingTime * 10);

    // Menonaktifkan elemen-elemen yang dipilih saat tidur
    let mapImages = document.querySelectorAll("#game-map li img");
    mapImages.forEach(image => image.setAttribute('onclick', 'return false;'));
  } else {
    alert("Anda tidak kelelahan!");
  }
}

function startSleeping() {
  // Kode sebelumnya
  
  let sleepingTime = 120; // Waktu bekerja dalam detik (1 menit)   
   let bedItem = player.inventoryHouse.find(item => item.name === "Bed");
  if (!bedItem || bedItem.quantity <= 0) {
    alert("Anda tidak bisa Tidur jika tidak ada Tempat tidur");
    return;
  }

  if (player.energy <= 100) {    
    // Kode sebelumnya
    let progressContainer = document.createElement("div");
    progressContainer.classList.add("progress-container");
    progressContainer.style.display = "block"; // Menampilkan progress bar
    document.body.appendChild(progressContainer);


    let progressBar = document.createElement("div");
    progressBar.classList.add("progress-bar");
    progressContainer.appendChild(progressBar);
    
    let progressText = document.createElement("span");
    progressText.textContent = "Sedang Tidur...";
    progressContainer.appendChild(progressText);


    let progress = 0;
    let intervalId = setInterval(function() {
      progress += 1;
      progressBar.style.width = `${progress}%`;

      if (progress === 100) {
        clearInterval(intervalId);
        document.body.removeChild(progressContainer);
        player.energy += 50;
        displayPlayerInfo();
        displayGameMessage(`Anda telah tidur dengan cukup, sekarang energi anda ${player.energy}`);

        // Mengaktifkan kembali elemen-elemen yang dipilih
        let mapImages = document.querySelectorAll("#game-map li img");
        mapImages.forEach(image => image.removeAttribute('onclick', 'disabled'));
     
      }
    }, sleepingTime * 10);

    // Menonaktifkan elemen-elemen yang dipilih saat tidur
    let mapImages = document.querySelectorAll("#game-map li img");
    mapImages.forEach(image => image.setAttribute('onclick', 'return false;'));
  } else {
    alert("Anda tidak kelelahan!");
  }
}



// Fungsi untuk mengatur tampilan game-actions
// Fungsi untuk mengatur tampilan game-actions
function displayGameActions() {
  let gameActions = document.getElementById("game-actions");

}


function toggleInventory() {
      const inventory = document.getElementById("inventory");
      inventory.style.display = inventory.style.display === "none" ? "block" : "none";
    }
    
    function toggleInventoryHouse() {
      const inventory = document.getElementById("inventoryHouse");
      inventory.style.display = inventory.style.display === "none" ? "block" : "none";
    }



// Fungsi untuk menampilkan pesan pada game-messages
function displayGameMessage(message) {
  let gameMessages = document.getElementById("game-messages");
  
  // Buat elemen p
  let messageBox = document.createElement("p");
  messageBox.textContent = message;
  // Tambahkan kelas untuk styling
  messageBox.classList.add("game-message");
  // Tambahkan elemen ke gameMessages
  gameMessages.appendChild(messageBox);

  // Atur timer untuk menghapus pesan setelah 5 detik
  setTimeout(function() {
    gameMessages.removeChild(messageBox);
  }, 5000);

  // Tengahkan pesan dengan CSS
  gameMessages.style.display = "flex";
  gameMessages.style.justifyContent = "center";
  gameMessages.style.alignItems = "center";
}
  

function showNotification(message) {
      const notifContainer = document.getElementById('notifContainer');
      notifContainer.innerText = message;
      notifContainer.style.display = 'block';

      setTimeout(function() {
        notifContainer.style.display = 'none';
      }, 5000); // Menghilangkan notifikasi setelah 15 detik (15000 milidetik)
    }
    
    
    
// Inisialisasi permainan
function initGame() {
  displayPlayerInfo();
  displayGameActions();
  showRumah();
  lowenergy();
  alert("Hai Ini adalah sebuah game life simulator");
  alert("Yang dimana kamu harus menentukan kemana arah hidup karaktermu");
  
  
}

// Memulai permainan
initGame();
displayPlayerInfo();
showRumah();