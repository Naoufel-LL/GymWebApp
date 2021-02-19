import '../App.js'
import svg1 from '../images/1.svg'
import svg2 from '../images/2.svg'
import svg3 from '../images/3.svg'
import svg4 from '../images/4.svg'
import Flip from 'react-reveal/Flip'
const Features = () => {
    return ( 
        <div id="features"
        className="Next-header">
            <div className="title">
                <h1>Features</h1>
            </div>
            <Flip right cascade>
            <div className="row">
                <div className="box">
                    <div className="img">
                        <img src={svg1} />
                    </div>
                    <h3>WeightLifting</h3>
                    <p>Lorem Ipsum is simply dummy te
                        xt of the printing and ty
                     </p>
                </div>
                <div className="box">
                    <div className="img">
                        <img src={svg2} />
                    </div>
                    <h3>WeightLifting</h3>
                    <p>Lorem Ipsum is simply dummy te
                        xt of the printing and ty
                        .</p>
                </div>
                <div className="box">
                    <div className="img">
                        <img src={svg3} />
                    </div>
                    <h3>WeightLifting</h3>
                    <p>Lorem Ipsum is simply dummy te
                        xt of the printing and ty
                        </p>
                </div>
                <div className="box">
                    <div className="img">
                        <img src={svg4} />
                    </div>
                    <h3>WeightLifting</h3>
                    <p>Lorem Ipsum is simply dummy te
                        xt of the printing and ty
                            </p>
                </div>
            </div>
            </Flip>
        </div>
     );
}
 
export default Features;