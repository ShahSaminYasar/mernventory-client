import React from 'react';
import OverViewPageContainer from '../../Components/Container/overViewContainer/OverViewPageContainer';
import img1 from '../../assets/OverViewImg/clearing-supplier-management-hurdles-with-added-visibility-and-compliance.jpg'
import img2 from '../../assets/OverViewImg/m-2022-june-p-maersk-3pl-gartner-720x405.jpg'
import img3 from '../../assets/OverViewImg/reimagine-supply-chain-efficiencies-for-supplier-visibility-and-management-sytia_1024x576.jpg'
import img4 from '../../assets/OverViewImg/reimagining-end-to-end-solutions-to-emerge-during-a-crisis-wallmart_1024x576.jpg'


const Overviewpage = () => {
    return (
        <div>
            <OverViewPageContainer
                img={img1}
                h1={'More visibility to clear supplier compliance hurdles'}
                p={'As a company grows, sourcing becomes a make or break area in its path to success. Monitoring, evaluating and assessing suppliers from multiple sources can weigh on their overall goals. Heres how we helped a global lifestyle brand their supply chain processes to monitor and help keep suppliers activities under control and aid in global expansion ambitions.'}
                rowReverse={false}>
            </OverViewPageContainer>

            <OverViewPageContainer
                img={img2}
                h1={'Leading the way to future-ready supply chains'}
                p={'A.P. Moller-Maersk was recognized as a Leader in 2023 Gartner® Magic Quadrant™ for Third-party Logistics, Worldwide for the second time in a row.For more details on why we think A. P. Moller-Maersk was named a Leader yet again and what it means for your business, read our latest piece.'}
                rowReverse={true}>
            </OverViewPageContainer>

            <OverViewPageContainer
                img={img3}
                h1={'Revamping a customer’s supply chain plan for immediate positive results'}
                p={'A leading online retailer was facing management issues in their supply chain. They were spending an increasing amount of time coordinating suppliers and managing their logistics activities. Working closely with the customer, Maersk’s team of experts evaluated the customer’s logistics process to spot the critical areas of concern and churn out positive changes within a short period.'}
            >
            </OverViewPageContainer>

            <OverViewPageContainer
                img={img4}
                h1={'Timely deliveries of essential goods with our comprehensive logistics capabilities'}
                p={'A leading online retailer was facing management issues in their supply chain. They were spending an increasing amount of time coordinating suppliers and managing their logistics activities. Working closely with the customer, Maersk’s team of experts evaluated the customer’s logistics process to spot the critical areas of concern and churn out positive changes within a short period.'}
                rowReverse={true}>
            </OverViewPageContainer>


        </div >
    );
};

export default Overviewpage;