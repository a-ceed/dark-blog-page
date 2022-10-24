import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link";
import Header from "../components/Header";
import YandexMetrika from "../components/YandexMetrika";
import PostCard from "../components/PostCard";
import fs from 'fs';
import matter from 'gray-matter';
import mainLogo from "../public/favicon.ico";

export default function Home({posts}) {

    const bannerImages = {
        dimensions: {width: 200, height: 121},
        url: mainLogo
    };
    const featImg = bannerImages;
    const nextImages = bannerImages;
    const feature_image = bannerImages;
    const YOUR_YM_ID = "90904465";



    const url = mainLogo;
  return (
    <div className="">
      <Head>
        <title>Блог Тёмного эколога</title>
        <meta name="description" content="Экологический блог Тёмного эколога" />
        <meta name="yandex-verification" content="1b19d3159f8ae8fd" />
        <link rel="icon" href="/favicon.ico" />
          <YandexMetrika
              yid={YOUR_YM_ID}
              clickmap={true}
              trackLinks={true}
              accurateTrackBounce={true}
              webvisor={false}
          />
      </Head>

      <Header />

        <main id="site-main" className="site-main outer">

                <div className="inner posts">
                    <div className="post-feed">
                        {posts.map(post => {
                            //extract slug and frontmatter
                            const {slug, frontmatter} = post
                            //extract frontmatter properties
                            const {title, annotation, category, date, bannerImage, previewImage, tags} = frontmatter
                            const postImage = previewImage ? previewImage : bannerImage;
                            return (

                                // eslint-disable-next-line react/jsx-key
                    <article className="post-card post tag-getting-started">
                        {featImg && (
                            <Link href={"posts/"+slug}>
                                <a className="post-card-image-link" aria-label={title}>
                                    {nextImages ? (
                                        <div className="post-card-image">
                                            <Image
                                                src={"https://temniyecolog.ru/"+postImage}
                                                alt={title}
                                                sizes="(max-width: 640px) 320px, (max-width: 1000px) 500px, 680px"
                                                layout="fill"
                                                objectFit="cover"
                                                quality="90"
                                            />
                                        </div>
                                    ) : (
                                        feature_image && <img className="post-card-image" src={feature_image} alt={title} />
                                    )}
                                </a>
                            </Link>
                        )}

                        <div className="post-card-content">
                            <Link href={"posts/"+slug}>
                                <a className="post-card-content-link">
                                    <header className="post-card-header">
                                        {tags && <div className="post-card-primary-tag">{tags}</div>}
                                        <h2 className="post-card-title">{title}</h2>
                                    </header>
                                    <section className="post-card-excerpt">
                                        {/* post.excerpt *is* an excerpt and does not need to be truncated any further */}
                                        <p>{annotation}</p>
                                    </section>
                                </a>
                            </Link>


                        </div>
                    </article>

                    )})}
                    </div>
                </div>

        </main>

      <footer className="">

      </footer>
    </div>
  )
}
//Generating the Static Props for the Blog Page
export async function getStaticProps(){
    // get list of files from the posts folder
    const readfiles = fs.readdirSync('posts');

    const files = readfiles.reverse();
    console.log("массивы", files);

    // get frontmatter & slug from each post
    const posts = files.map((fileName) => {
        const slug = fileName.replace('.md', '');
        const readFile = fs.readFileSync(`posts/${fileName}`, 'utf-8');
        const { data: frontmatter } = matter(readFile);

        return {

            slug,
            frontmatter,
        };

    });

    // Return the pages static props
    return {
        props: {
            posts,
        },

    };
}
