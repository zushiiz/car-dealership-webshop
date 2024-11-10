const displayed_cars = [
  {title:"Galaxy Destroyer", info:"short description of car", image:"placeholder.jpg", price:500, id:1},
  {title:"Star Devourer", info:"short description of car", image:"placeholder2.jpg", price:500, id:2},
  {title:"World Ender", info:"short description of car", image:"placeholder3.jpg", price:500, id:3},
  {title:"Asteroid Demolisher", info:"short description of car", image:"placeholder4.jpg", price:500, id:4},
  {title:"Glorp", info:"Glorp", image:"glorp.jpg", price:500, id:5}
]

const car_details = [
  {id:1, extInfo:"more info", engine:"engine", horsePower:"1000"},
  {id:2, extInfo:"more info", engine:"engine", horsePower:"500"},
  {id:3, extInfo:"more info", engine:"engine", horsePower:"500"},
  {id:4, extInfo:"more info", engine:"engine", horsePower:"500"},
  {id:5, extInfo:"more info", engine:"engine", horsePower:"0"}
]

export default function CarContainer(){
  const carInfo = displayed_cars.map((item, index) => {
    const isSpecial = (index % 3 === 0);

    console.log(item.image);
    
    return (
    <div className={`container${isSpecial ? "-special" : ""}`}
    style={{
      backgroundImage: isSpecial ? `url(${item.image})` : "none",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
    key={item.id}
    >
      <section className="public-content">

        <img src={item.image} alt="this is car" className="car-image"></img>

        <section className="text-contents">
          <h3 className="car-name">{item.title}</h3>
          <span>{item.price} Dabloons</span>
          <p className="car-info">{item.info}</p>
          <div className="more-button">
            <button onClick={() => Popup(displayed_cars, car_details, item.id)}>
              More
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

function Popup(list, list2, id){
  const screen = document.body;
  const detailsList = list[id-1];
  const detailsList2 = list2[id-1];

  const popup = document.createElement("div");
  popup.id= "popup";
  popup.classList.add("popup-cover");

  const popupBox = document.createElement("div");
  popupBox.classList.add("popup-style");

  const img = document.createElement("img");
  img.src = detailsList.image;
  popupBox.appendChild(img);

  const left = document.createElement("section");
  popupBox.appendChild(left);
  const right = document.createElement("section");
  popupBox.appendChild(right);
  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("button-container");

  const name = document.createElement("h4");
  name.innerText = detailsList.title;
  left.appendChild(name);
  
  const info = document.createElement("p");
  info.innerText = detailsList2.extInfo;
  left.appendChild(info);

  const eng = document.createElement("span");
  eng.innerText = detailsList2.engine;
  right.appendChild(eng);

  const hp = document.createElement("span");
  hp.innerText = detailsList2.horsePower;
  right.appendChild(hp);

  const price = document.createElement("span");
  price.innerText = `${detailsList.price} Dabloons`;
  right.appendChild(price);

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
