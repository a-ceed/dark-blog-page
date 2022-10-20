import Link from "next/link";

function Footer (props){

    const copyright = "Пикабу";
    return (
        <footer className="site-footer outer">
            <div className="site-footer-content inner">
                <section className="copyright">
                    <a href="http://ya.ru">Блог Темный эколог</a>
                </section>

                <nav className="site-footer-nav">
                    <Link href="http://ya.ru">
                        <a>{copyright}</a>
                    </Link>

                        <a href="http://ya.ru" target="_blank" rel="noopener noreferrer">
                            Телеграм
                        </a>


                    <a href="https://www.jamify.org" target="_blank" rel="noopener noreferrer">
                        Вконтакте
                    </a>
                </nav>
            </div>
        </footer>
    )

}

export default Footer
