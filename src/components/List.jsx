const displayed_shows = [
  {title:"Show1", info:"short description of show", isOver:false, id:1},
  {title:"Show2", info:"short description of show", isOver:false, id:2},
  {title:"Show3", info:"short description of show", isOver:false, id:3},
  {title:"Show4", info:"short description of show", isOver:true, id:4},
  {title:"Show5", info:"short description of show", isOver:false, id:5}
]

export default function List(){
  const show_list = displayed_shows.map(show =>
    <li className = "startshows" key={show.id} style={{color: show.isOver ? "red" : "blue", display: show.id >= 5 ? "none" : "list-item"}}>
      <h2>{show.title}</h2>
      <p>{show.info}</p>
    </li>
    );

    return(
      <>
      <ul>{show_list}</ul>
      </>
    )
}
