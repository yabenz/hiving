import { ArrowBigUp } from 'lucide-react'

import './Card.css'

export default function Card({ itemData }) {

    return (

        <div className="card">
            <h3>{itemData.subreddit}</h3>
            <div className="card-basic">
                <b>{itemData.post_heading}</b>
                <div className='flex-end gap-3 text-purple-400'>
                    <div className='flex inline-block text-#fdd'>Comments: {itemData.comments_count}</div>
                    <div className='flex inline-block text-#fdd'><ArrowBigUp />{itemData.upvotes}</div>
                </div>
            </div>

        </div>
    )
}