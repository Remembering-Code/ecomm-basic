import { Link } from "react-router-dom";

//TODO: Come back to this component for color styling and deciding if we're even going to keep any of these columns/links.

const NavBottom = (props) => {


    return (
        <div className="footer-container flex flex-col">
            <Link to={"#"}><p className="text-center p-4">Back to Top</p></Link> {/* replace the link-to Value */}

            <div className="footer-links-container flex justify-center gap-4">
                <div className="footer-links-col-1 flex flex-col">
                    <h4>Column Header Name</h4>
                    <Link to={"#"}><p>link1</p></Link>
                    <Link to={"#"}><p>link2</p></Link>
                    <Link to={"#"}><p>link3</p></Link>
                    <Link to={"#"}><p>link4</p></Link>
                    <Link to={"#"}><p>link5</p></Link>
                    <Link to={"#"}><p>link6</p></Link>
                    <Link to={"#"}><p>link7</p></Link>
                    <Link to={"#"}><p>link8</p></Link>
                    <Link to={"#"}><p>link9</p></Link>
                </div>

                <div className="footer-links-col-2 flex flex-col">
                    <h4>Column Header Name</h4>
                    <Link to={"#"}><p>link1</p></Link>
                    <Link to={"#"}><p>link2</p></Link>
                    <Link to={"#"}><p>link3</p></Link>
                    <Link to={"#"}><p>link4</p></Link>
                    <Link to={"#"}><p>link5</p></Link>
                    <Link to={"#"}><p>link6</p></Link>
                    <Link to={"#"}><p>link7</p></Link>
                    <Link to={"#"}><p>link8</p></Link>
                    <Link to={"#"}><p>link9</p></Link>
                </div>

                <div className="footer-links-col-3 flex flex-col">
                    <h4>Column Header Name</h4>
                    <Link to={"#"}><p>link1</p></Link>
                    <Link to={"#"}><p>link2</p></Link>
                    <Link to={"#"}><p>link3</p></Link>
                    <Link to={"#"}><p>link4</p></Link>
                    <Link to={"#"}><p>link5</p></Link>
                    <Link to={"#"}><p>link6</p></Link>
                    <Link to={"#"}><p>link7</p></Link>
                    <Link to={"#"}><p>link8</p></Link>
                    <Link to={"#"}><p>link9</p></Link>
                </div>

                <div className="footer-links-col-4 flex flex-col">
                    <h4>Column Header Name</h4>
                    <Link to={"#"}><p>link1</p></Link>
                    <Link to={"#"}><p>link2</p></Link>
                    <Link to={"#"}><p>link3</p></Link>
                    <Link to={"#"}><p>link4</p></Link>
                    <Link to={"#"}><p>link5</p></Link>
                    <Link to={"#"}><p>link6</p></Link>
                    <Link to={"#"}><p>link7</p></Link>
                    <Link to={"#"}><p>link8</p></Link>
                    <Link to={"#"}><p>link9</p></Link>
                </div>
            </div>

            <div className="locality-select-container flex justify-center p-4 gap-2">
                <img src="#" alt="AmazonLogo" />

                <div className="locality-select">
                    <select name="LanguageSelect" id="">
                        <option value="english">English</option>
                    </select>
                    <button className="RegionSelect">United States</button>
                </div>
            </div>
        </div>
    )
}

export default NavBottom;