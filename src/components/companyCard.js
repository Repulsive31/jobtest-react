import React from 'react'
import companyData from './companyData'

const CompanyCard = ({companyId}) => {
    const{companyName, companyDesc, verifiedStatus, image1, image2, image3} = companyData[companyId]
  return (
    <div class="companyContainer">
        <h3>{companyName}</h3>
        <p>{companyDesc}</p>
        <h4>{verifiedStatus}</h4>
        <img src={image1} alt= 'null'/>
        <img src={image2} alt= 'null'/>
        <img src={image3} alt= 'null'/>
    </div>
  )
}

export default CompanyCard