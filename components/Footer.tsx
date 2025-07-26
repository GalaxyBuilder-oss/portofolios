// components/Footer.js

const Footer = () => {
    const copyrightYear = () : string | undefined => {
        const thisYear = new Date().getFullYear();
        if (thisYear === 2025) return JSON.stringify(thisYear);
        return `2025 ― ${thisYear}`
    }
    return (
        <footer className="text-center bg-dark text-light py-3 mt-5">
            <div>
                <p className="mb-1">GalaxyBuilder-Oss © {copyrightYear()}</p>
                <p className="small">Built with Next.js and Bootstrap</p>
            </div>
            <div>
                <div className="btn-group btn-group-sm" role="group" aria-label="Footer buttons">
                    <a href="/policy" className="btn btn-outline-light">Kebijakan Privasi</a>
                    <a href="/tos" className="btn btn-outline-light">Syarat Kebijakan Pengguna</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;