import './info.styles.scss';
import snappy from '../../images/snappy-process.svg';
import price from '../../images/affordable-prices.svg';
import people from '../../images/people-first.svg';

const Info = () => {
    return (
        <section className='info-section'>
            <div className="info-container">
                <h1>We're different</h1>
                <div className="cards">
                    <div className="card">
                        <img src={snappy} alt="" />
                        <h3>Snappy Process</h3>
                        <p>Our application process can be completed in minutes, not hours. Don't get stuck filling in tedious forms.</p>
                    </div>
                    <div className="card">
                        <img src={price} alt="" />
                        <h3>Affordable Prices</h3>
                        <p>We don’t want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible.</p>
                    </div>
                    <div className="card">
                        <img src={people} alt="" />
                        <h3>People First</h3>
                        <p>Our plans aren’t full of conditions and clauses to prevent payouts. We make sure you’re covered when you need it.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default Info;