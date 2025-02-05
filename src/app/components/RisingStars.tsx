

import RisingCard from './UI/RisingCard';

import risingData from '../data/rising_data.json'

export default function RisingStars() {


  return (

    <div className="flex justify-between items-center max-w-[var(--maxPage)] p-10 bg-[#10111e]">
      <div>
        <h1 className='mb-9'>Rising Stars</h1>
        <ol className="list-style">
          {risingData.map((item) => <li><RisingCard itemData = {item}/></li>)}
        </ol>
      </div>
    </div>
  )
}