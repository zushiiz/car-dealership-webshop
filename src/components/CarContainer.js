const displayed_cars = [
  {title:"GalaxyDestroyer", model:"F20", year:"2006", value:500, info:"short description of car", id:1},
  {title:"StarDevourer", model:"F20", year:"2006", value:500, info:"short description of car", id:2},
  {title:"WorldEnder", model:"F20", year:"2006", value:500, info:"short description of car", id:3},
  {title:"AsteroidDemolisher", model:"F20", year:"2006", value:500, info:"short description of car", id:4},
  {title:"Glorp", model:"F20", year:"2006", value:500, info:"Glorp", id:5}
]

const car_images = [
  {id:1, sImg:"carNormal.jpg", image:"carSmall.png", banner:"placeholder.jpg"},
  {id:2, sImg:"carNormal.jpg", image:"carSmall.png", banner:"carBanner.png"},
  {id:3, sImg:"carNormal.jpg", image:"carSmall.png", banner:"carBanner.png"},
  {id:4, sImg:"carNormal.jpg", image:"carSmall.png", banner:"carBanner.png"},
  {id:5, sImg:"carNormal.jpg", image:"carSmall.png", banner:"carBanner.png"}
]
/*
normal image - 1269x719
small image - 800x400
banner image - 1920x600
*/
const car_details = [
  {engine:"2.0L I4 Engine - 150hp", trans:"Manual", milage:"25,000 km", fuel:"Milk", id:1},
  {engine:"2.0L I4 Engine - 150hp", trans:"Manual", milage:"25,000 km", fuel:"Milk", id:2},
  {engine:"2.0L I4 Engine - 150hp", trans:"Manual", milage:"25,000 km", fuel:"Milk", id:3},
  {engine:"2.0L I4 Engine - 150hp", trans:"Manual", milage:"25,000 km", fuel:"Milk", id:4},
  {engine:"2.0L I4 Engine - 150hp", trans:"Manual", milage:"25,000 km", fuel:"Milk", id:5}
]

export default function CarContainer(){
  const carInfo = displayed_cars.map((item, index) => {
    const isSpecial = (index % 3 === 0);
    const carImg = car_images[item.id-1];

    console.log(car_images[item.id]);
    
    return (
    <div className={`container${isSpecial ? "-special" : ""}`}
    style={{
      backgroundImage: isSpecial ? `url(${carImg.banner})` : "none",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
    key={item.id}
    >
      <section className="public-content">

        <picture className="car-image">
          <source media="(min-width:600px)" srcSet={carImg.image} />
          <img src={carImg.sImg} alt="this is car" />
        </picture>

        <section className="text-contents">
          <h3 className="car-name">{item.year} {item.title} {item.model}</h3>
          <span>{item.value} Dabloons</span>
          <p className="car-info">{item.info}</p>
          <div className="details-button">
            <button onClick={() => Popup(displayed_cars, car_details, car_images, item.id)}>
              Details
            </button>
          </div>
        </section>
      </section>
    </div>
    );
  });      

  return(
    <div className="car-container">
      {carInfo}
    </div>
  )
}

function Popup(list, list2, list3, id){
  const screen = document.body;
  const detailsList = list[id-1];
  const detailsList2 = list2[id-1];
  const imgList = list3[id-1];

  const popup = document.createElement("div");
  popup.id = "popup";
  popup.classList.add("popup-cover");
  popup.onclick = function () {
    removePopup();
  };

  const popupBox = document.createElement("div");
  popupBox.classList.add("popup-style");

  const img = document.createElement("img");
  img.src = imgList.image;
  popupBox.appendChild(img);

  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("button-container");

  const name = document.createElement("h4");
  name.innerText = `${detailsList.year} ${detailsList.title} ${detailsList.model}`;
  popupBox.appendChild(name);

  const leftList = document.createElement("ul");
  popupBox.appendChild(leftList);
  const rightList = document.createElement("ul");
  popupBox.appendChild(rightList);

  const listKeys = Object.keys(detailsList);
  for (let i = 0; i < 4; i++){
    const upperCaseKey = listKeys[i].charAt(0).toUpperCase() + listKeys[i].slice(1);
    const e = document.createElement("li");
    e.innerHTML = `${upperCaseKey}: ${detailsList[listKeys[i]]}`;
    leftList.appendChild(e);
  }
  const infoText = document.createElement("li");
  infoText.innerHTML = detailsList.info;
  leftList.appendChild(infoText);
  
  const listKeys2 = Object.keys(detailsList2);
  for (let i = 0; i < 4; i++){
    const upperCaseKey = listKeys2[i].charAt(0).toUpperCase() + listKeys2[i].slice(1);
    const e = document.createElement("li");
    e.innerHTML = `${upperCaseKey}: ${detailsList2[listKeys2[i]]}`;
    rightList.appendChild(e);
  }

  const backButton = document.createElement("button");
  backButton.innerText = "Back"
  backButton.onclick = function () {
    removePopup();
  };

  buttonContainer.appendChild(backButton);
  popupBox.appendChild(buttonContainer);
  popup.appendChild(popupBox);
  screen.appendChild(popup);

}

function removePopup(){
  const popup = document.getElementById("popup");
  if (popup){
    popup.remove();    
  }

}
