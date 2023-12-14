export const PageLink = ({ link, text, itemClass }) => {
  return (
    <li>
      <a href={link} className={itemClass}>
        {text}
      </a>
    </li>
  )
}
