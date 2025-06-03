const Footer = () => {

    return(
        <footer className="mt-5">

            <div className="container d-flex align-items-center justify-content-between text-light">
                <div className="">
                    © {new Date().getFullYear()}
                </div>

                <div>
                    <a href="https://github.com/LuizJunior007"  className="text-light me-3" target="_blank">
                        <i className="bi bi-github"></i>
                    </a>

                    <a href="https://www.linkedin.com/in/luiz-junior-503969227/" className="text-light" target="_blank">
                        <i className="bi bi-linkedin"></i>
                    </a>
                </div>
            </div>
        
        </footer>
    );

}

export default Footer;