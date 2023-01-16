import Screw from '../components/Screw'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import Post from '../interfaces/post'
import { Header, PageSelected } from '../components/header'
import Hr from '../components/hr'
import ArticlePreviews from '../components/ArticlePreviews'
import NavPopover from '../components/NavPopover'
import { useState } from 'react'

type Props = {
  allPosts: Post[]
}

export default function Index({ allPosts }: Props) {
  let [show, set_show] = useState(false);
  return (
    <>

      <button className={show ? "close svg_button" : "noshow"} onClick={() => { set_show(false) }}>
        <img src="/images/exit.svg"></img>
      </button>
      <NavPopover show_fn={set_show} show={show} page_selected={PageSelected.Home}></NavPopover>
      <Layout>
        <Head>
          <title>Paul May</title>
        </Head>
        <Header set_show_popover={set_show} page_selected={PageSelected.Home}></Header>
        <div className='container drop_shadow'>
          <div className='screw'>
            <div></div>
            <Screw></Screw>
          </div>
          <div className='cols'>
            <div className='col one'>
              <div className='label splash_bar __y'>Hello, I'm Paul May</div>
              <div className='darker_container content'>
                I’m an Oakland based software engineer employed at Rapid7. In my free time I draw, make games, and do tiny research projects. This site hosts my work portfolio,  blog posts, and a small gallery of curated internet garbage.
              </div>
              <div className='label splash_bar __y'>Contact Me</div>
              <div className='darker_container content'>
                <ul>
                  <li>Email: reverse the following - [moc.liamg@krow.yamwp]</li>
                  <li>Linkedin: <a href="https://www.linkedin.com/in/mobile-bungalow">Paul May</a></li>
                  <li>Github: <a href="https://github.com/mobile-bungalow">mobile-bungalow</a> </li>
                </ul>
              </div>
            </div>
            <div className='vr desktop_only'>
              <div className='point'></div>
              <div style={{ height: "100%" }}></div>
              <div className='point'></div>
            </div>
            <div className='col desktop_only one'>
              <div className='label splash_bar __r'>Recent Posts</div>
              <ArticlePreviews articles={allPosts}></ArticlePreviews>
            </div>
          </div>
          <div className='screw'>
            <Screw></Screw>
            <div style={{ fontSize: "10px", fontFamily: "redhat" }} >Copyright (2023)</div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
    'tags',
  ])

  return {
    props: { allPosts },
  }
}
