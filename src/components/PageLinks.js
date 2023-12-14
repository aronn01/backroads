import { PageLink } from './PageLink'
import { pageLinks } from './data'

export const PageLinks = ({ parentClass, itemClass }) => {
  return (
    <ul className={parentClass} id="nav-links">
      {pageLinks.map((link) => {
        return <PageLink key={link.id} {...link} itemClass={itemClass} />
        // <li key={link.id}>
        //   <a href="link.href" className={itemClass}>
        //     {link.text}
        //   </a>
        // </li>
      })}
    </ul>
  )
}
