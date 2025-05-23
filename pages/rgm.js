import fs from "fs";
import matter from "gray-matter";
import md from 'markdown-it';
import Link from "next/link";
import Image from "next/image";
//import PData from "./parsedData.txt"


// The page for each post
export default function Rgm({frontmatter, content, dataArray}) {

    return <main id="site-main" className="site-main outer">
        <div className="inner">
            <article className="post-full post tag-getting-started featured">
                <header className="post-full-header">
                    <section className="post-full-tags">
                        <Link href="/tag/getting-started">
                            <a>fff</a>
                        </Link>
                    </section>

                    <h1 className="post-full-title">fff</h1>
                    <p className="post-full-custom-excerpt">fff</p>
                    <div className="post-full-byline">
                        <section className="post-full-byline-content">
                            <ul className="author-list">
                                <li className="author-list-item">
                                    <a className="author-avatar">
                                        <Image src={"https://temniyecolog.ru/_next/static/media/dark8.5416d8b1.png"}
                                               alt="Экология Тёмного эколога" layout="responsive" quality="25"
                                               width="100" height="100"/>
                                    </a>
                                </li>
                            </ul>
                            <section className="post-full-byline-meta">
                                <h4 className="author-name">fff</h4>
                                <div className="byline-meta-content">
                                    <time className="byline-meta-date">fff</time>
                                </div>
                            </section>
                        </section>
                    </div>

                </header>
            </article>


            <div>
                {dataArray0.map((item, index) => (
                    <div key={index}>
                        <p><strong>Date:</strong> {item.date}</p>
                        <p><strong>Link:</strong> <a href={item.link}>{item.link}</a></p>
                        {item.alarm && <p><strong>Alarm:</strong> {item.alarm.toString()}</p>}
                        {item.pdk.length > 0 && (
                            <div>
                                <p><strong>PDK:</strong></p>
                                <ul>
                                    {item.pdk.map((text, i) => (
                                        <li key={i}>{text}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                ))}
            </div>


            <div>{content}</div>
            {/*<div className="imgcontainer"><img src={"https://temniyecolog.ru/"+bannerImage}/></div>*/}

            <section className="post-full-content">
                {/*<div className="post-content load-external-scripts" dangerouslySetInnerHTML={{ __html: md().render(content) }} />*/}
                {/*Ссылки телеграм*/}
                <div className="wrapper-telegram"
                     style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <div className="wrapper-align-telegram" style={{display: 'flex'}}>
                        <div className="block-telegram"
                             style={{marginRight: '15px', marginBottom: '15px', maxHeight: '81px', maxWidth: '251px'}}>
                            <a className="author-telegram" href="https://t.me/darkecologist" target="_blank"
                               rel="noopener noreferrer">
                                <img alt="Экологический блог в телеграме Тёмного эколога"
                                     src="/ecologic-blog.png"
                                     decoding="async"
                                     data-nimg="intrinsic"
                                     width={251}
                                     height={81}>
                                </img>
                            </a>
                        </div>
                        <div style={{maxHeight: '81px', maxWidth: '316px'}}>
                            <a className="author-telegram" href="https://t.me/+cW-J3353tF03YzEy" target="_blank"
                               rel="noopener noreferrer">
                                <img alt="Экологический чат в телеграме Тёмного эколога"
                                     src="/ecologic-blog-podpole.png"
                                     decoding="async"
                                     data-nimg="intrinsic"
                                     width={316}
                                     height={81}>
                                </img>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </main>
}


//Generate the static props for the page
export async function getStaticProps() {
    const fileName = fs.readFileSync(`pages/parsedData.txt`, 'utf-8');
    const {data: frontmatter, content} = matter(fileName);
    const dataArray0 = {{
        "link": "https://www.sevmeteo.ru/monitoring/air/17207/",
        "date": "30/04/2025",
        "alarm": false,
        "posts": [],
        "pdk": []
    },{
        "link": "https://www.sevmeteo.ru/monitoring/air/17198/",
        "date": "29/04/2025",
        "alarm": true,
        "posts": [],
        "pdk": [
            "По данным ФГБУ «Северное УГМС» за период с 08.00 28 апреля до 08.00 29 апреля 2025 г. в городе Череповец на посту № 1 зарегистрировано превышение установленного норматива для сероводорода – в 1,9 раз, на посту № 5 – в 1,6-1,9 раза."
        ]
    },{
        "link": "https://www.sevmeteo.ru/monitoring/air/17189/",
        "date": "28/04/2025",
        "alarm": true,
        "posts": [],
        "pdk": [
            "По данным ФГБУ «Северное УГМС» за период с 08.00 25 апреля до 08.00 28 апреля 2025 г. в городе Череповец на посту № 1 зарегистрировано превышение установленного норматива для сероводорода – в 1,1-9,3 раза, на посту № 2 – в 4,3 раза, на посту № 5 – в 1,1 раза, на посту № 6 – в 1,8 раза, а также для взвешенных частиц РМ 2,5 – в 2,5 раза и РМ10 – в 1,3 раза."
        ]
    },{
        "link": "https://www.sevmeteo.ru/monitoring/air/17174/",
        "date": "25/04/2025",
        "alarm": true,
        "posts": [],
        "pdk": [
            "По данным ФГБУ «Северное УГМС» за период с 08.00 24 апреля до 08.00 25 апреля 2025 г. в городе Череповец на посту № 1 зарегистрировано превышение установленного норматива для сероводорода – в 1,4 раза, на посту № 5 – в 1,3 раза."
        ]
    },{
        "link": "https://www.sevmeteo.ru/monitoring/air/17164/",
        "date": "24/04/2025",
        "alarm": true,
        "posts": [],
        "pdk": [
            "По данным ФГБУ «Северное УГМС» за период с 08.00 23 апреля до 08.00 24 апреля 2025 г. в городе Череповец на посту № 1 зарегистрировано превышение установленного норматива для сероводорода – в 4,3 раза, на посту № 5 – в 1,8 раза."
        ]
    }}

    // Разделение содержимого файла на отдельные объекты JSON
    const items = fileName;

    //console.log(items);
    //const dataArray = JSON.parse(items);

    // return {
    //     props: {
    //         dataArray0: dataArray0,
    //     },
    // };


    // dataArray теперь содержит массив объектов, который можно использовать далее
    return {
        props: {
            frontmatter,
            content,
            dataArray0
        },
    };
}
