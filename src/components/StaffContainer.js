const displayed_staff = [
  {name:"Staff Staffson", position:"N/A", image:"staff-no-img.png", id:1},
  {name:"Staff Staffson", position:"N/A", image:"staff-no-img.png", id:2},
  {name:"Staff Staffson", position:"N/A", image:"staff-no-img.png", id:3},
  {name:"Staff Staffson", position:"N/A", image:"staff-no-img.png", id:4},
  {name:"Staff Staffson", position:"N/A", image:"staff-no-img.png", id:5},
  {name:"Staff Staffson", position:"N/A", image:"staff-no-img.png", id:6},
  {name:"Staff Staffson", position:"N/A", image:"staff-no-img.png", id:7},
  {name:"Staff Staffson", position:"N/A", image:"staff-no-img.png", id:8},
  {name:"Staff Staffson", position:"N/A", image:"staff-no-img.png", id:9},
]

// image - 736x733

export default function StaffContainer(){
  const staffCard = displayed_staff.map(item =>
    <div className="public-content">
      <img src={item.image} alt="staff img" className="staff-img"></img>

      <section className="text-contents">
        <h3>{item.name}</h3>
        <span>{item.position}</span>
      </section>

    </div>
    );  

  return(
    <div className="staff-container">
      {staffCard}
    </div>
  )
}