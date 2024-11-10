const displayed_socials = [
  {title:"Social", sLink:"link.com"},
  {title:"Social", sLink:"link.com"},
  {title:"Social", sLink:"link.com"}
]

export default function Footer(){
  const socials = displayed_socials.map(item => 
    <li>
      <a href={item.sLink}>{item.title}</a>
    </li>
    );

  return (
    <footer>
      <ul>
        {socials}
      </ul>

      <section>
        <span>Mail</span>
        <input></input>
      </section>
    </footer>
  );
}