import Link from "next/link";

function Footer (props){


    return (
        <footer className="site-footer outer">
            <div className="site-footer-content inner">
                <section className="copyright">
                    <a href="https://temniyecolog.ru">Блог Темного эколога</a>
                </section>

                <nav className="site-footer-nav">
                    <Link href="https://pikabu.ru/@darkecologist">
                        <a>На Пикабу</a>
                    </Link>

                        <a href="https://t.me/darkecologist" target="_blank" rel="noopener noreferrer">
                           В Телеграме
                        </a>


                    <a href="https://vk.com/darkecologist" target="_blank" rel="noopener noreferrer">
                        Вконтакте
                    </a>
                </nav>
            </div>
        </footer>
    )

}

export default Footer
