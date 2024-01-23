import React from 'react'
import './Companies.css';
import prologies from '../../../public/prologis.png';
import tower from '../../../public/tower.png';
import equinix from '../../../public/equinix.png';
import reality from '../../../public/realty.png';
export default function Companies() {
  return (
<section className="companies-wrapper">
    <div className="paddings innerWidth flexCenter companies-container">
        <img src={prologies} alt="c1" />
        <img src={tower} alt="c2" />
        <img src={equinix} alt="c3" />
        <img src={reality} alt="c4" />
    </div>
</section>
  )
}
