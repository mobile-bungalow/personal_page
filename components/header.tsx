import Link from 'next/link'


enum PageSelected {
  Home = "Home",
  Blog = "Blog",
  Gallery = "Gallery",
  Portfolio = "Portfolio",
};

interface HeaderProps {
  page_selected: PageSelected,
  set_show_popover: (show: boolean) => void,
}


const Header = (props: HeaderProps) => {
  return (
    <h2 className="container drop_shadow space_around">
      <Link className="logo" href="/">
        <img src="/images/logo.svg"></img>
      </Link>
      <div className='desktop_only even_spread'>
        <Link className={props.page_selected == 'Home' ? "current_page" : "label"} href="/">
          1.Home
        </Link>
        <Link className={props.page_selected == 'Blog' ? "current_page" : "label"} href="/Blog">
          2.Blog
        </Link>
        <Link className={props.page_selected == 'Portfolio' ? "current_page" : "label"} href="/Portfolio">
          3.Portfolio
        </Link>
        <Link className={props.page_selected == 'Gallery' ? "current_page" : "label"} href="/Gallery">
          4.Gallery
        </Link>
      </div>
      <div className='mobile_only'>
        <button className='svg_button' onClick={() => { props.set_show_popover(true) }}>
          <img src="/images/hamburger.svg"></img>
        </button>
      </div>
    </h2>
  )
}

export { Header, PageSelected }
