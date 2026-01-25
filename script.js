const teamData = [
  {name:"MAESA ADIYANSAH", role:"ADMIN", img:"team1.jpg"},
  {name:"RIKKI KURNIAWAN", role:"PIC RUKO", img:"team2.jpg"},
  {name:"RIKI ABEI P", role:"PIC OJOL", img:"team3.jpg"},
  {name:"ANDIKA", role:"DRIVER", img:"team4.jpg"},
  {name:"RAMADHAN YAHYA", role:"DRIVER", img:"team4.jpg"},
  {name:"TAUFAN NEGORO", role:"CUTTING DUS", img:"team4.jpg"},
  {name:"ELAN SANJAYA", role:"PACKER", img:"team4.jpg"},
  {name:"SYARIF HIDAYAT", role:"PACKER", img:"team4.jpg"},
  {name:"DIMAS WIJAYA", role:"PACKER", img:"team4.jpg"},
  {name:"FEBI ARYANTO", role:"PACKER", img:"team4.jpg"},
  {name:"RAHMAT DIKI", role:"PACKER", img:"team4.jpg"},
  {name:"NDARU GAESANG", role:"PICKER", img:"team4.jpg"},
  {name:"RIZKY HARYANTO", role:"PICKER", img:"team4.jpg"}
];

const galleryImages = [
  {src:"img/camping1.jpg", category:"liburan"},
  {src:"img/camping2.jpg", category:"liburan"},
  {src:"img/camping3.jpg", category:"liburan"},
  {src:"img/dcadat1.jpg", category:"event"},
  {src:"img/dcadat2.jpg", category:"event"},
  {src:"img/dckotak1.jpg", category:"event"},
  {src:"img/dckotak2.jpg", category:"event"},
  {src:"img/dcschool1.jpg", category:"event"},
  {src:"img/dcschool2.jpg", category:"event"},
  {src:"img/dctentara1.jpg", category:"event"},
  {src:"img/dctentara2.jpg", category:"event"},
  {src:"img/gacoan1.jpg", category:"kenangan"},
  {src:"img/gacoan2.jpg", category:"kenangan"},
  {src:"img/hutsas1.jpg", category:"event"},
  {src:"img/hutsas2.jpg", category:"event"},
  {src:"img/lomba1.jpg", category:"event"},
  {src:"img/lomba2.jpg", category:"event"},
  {src:"img/perpisahaniwan1.jpg", category:"kenangan"},
  {src:"img/perpisahaniwan2.jpg", category:"kenangan"},
  {src:"img/perpisahaniwan3.jpg", category:"kenangan"},
  {src:"img/ultahdoni1.jpg", category:"kenangan"},
  {src:"img/ultahdoni2.jpg", category:"kenangan"},
  {src:"img/ultahelan1.jpg", category:"kenangan"},
  {src:"img/ultahelan2.jpg", category:"kenangan"},
  {src:"img/villa1.jpg", category:"liburan"},
  {src:"img/villa2.jpg", category:"liburan"},
  {src:"img/villa3.jpg", category:"liburan"},
  {src:"img/villa4.jpg", category:"liburan"},
  {src:"img/villa5.jpg", category:"liburan"},
];

const teamGrid = document.getElementById("teamGrid");
const galleryGrid = document.getElementById("galleryGrid");

teamData.forEach(t => {
  teamGrid.innerHTML += `
    <div class="team-card">
      <img src="${t.img}" loading="lazy">
      <h3>${t.name}</h3>
      <p>${t.role}</p>
    </div>`;
});

galleryImages.forEach(img => {
  galleryGrid.innerHTML += `<img src="${img}" loading="lazy">`;
});

// AI Personalization
let username = localStorage.getItem("visitorName");
if(!username){
  username = prompt("Siapa nama kamu?");
  localStorage.setItem("visitorName",username);
}
document.getElementById("aiText").innerText = `Welcome, ${username} 👋`;

// Dynamic Dark Mode 2.0
const toggle = document.getElementById("darkToggle");
toggle.onclick = () => {
  document.body.classList.toggle("light");
  localStorage.setItem("theme",
    document.body.classList.contains("light") ? "light" : "dark"
  );
};

if(localStorage.getItem("theme") === "light"){
  document.body.classList.add("light");
}

function renderGallery(filter = "all") {
  galleryGrid.innerHTML = "";

  galleryImages.forEach(img => {
    if (filter === "all" || img.category === filter) {
      const image = document.createElement("img");
      image.src = img.src;
      image.loading = "lazy";
      image.style.animation = "fadeIn .5s ease";
      galleryGrid.appendChild(image);
    }
  });
}

renderGallery();

document.querySelectorAll(".filter-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelector(".filter-btn.active").classList.remove("active");
    btn.classList.add("active");
    renderGallery(btn.dataset.filter);
  });
});

