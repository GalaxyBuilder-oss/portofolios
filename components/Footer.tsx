// components/Footer.js

const Footer = () => {
    return (
        <footer className="text-center bg-dark text-light py-3 mt-5">
            <div>
                <p className="mb-1">GalaxyBuilder-Oss © {new Date().getFullYear()}</p>
                <p className="small">Built with Next.js and Bootstrap</p>
            </div>
            <div>
                <div className="btn-group btn-group-sm" role="group" aria-label="Footer buttons">
                    <a href="#" className="btn btn-outline-light">Privacy Policy</a>
                    <a href="#" className="btn btn-outline-light">Terms of Service</a>
                    <a href="/contact" className="btn btn-outline-light">Contact Us</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;