import Custom_btn from "../../../custom_btn/custom_btn"
import './Services.css'

function Services () {
    return (
        <section className="services">
            <div className="services-text">
                <h4>SERVICES</h4>
                <h2>Enjoy Excerptional <br /> Ultrasound <br /> Services</h2>
                <p>Providing accurate, comfortable, and professional imaging solutions for your peace of mind.</p>
                <div>
                    <Custom_btn text='View More'/>
                </div>
            </div>
            
            <div className="colored-container">
            {/* Top purpleish part with border-radius */}
                <div className="top-section">
                    <div></div>
                    <div></div>
                    <div></div>
                    {/* You can add content here, like a title or icon */}
                </div>
            
            {/* Bottom white part which can contain nested content */}
                <div className="bottom-section">
                    {/* You can put service options or other components here */}
                </div>
            </div>
        </section>
    )
} export default Services