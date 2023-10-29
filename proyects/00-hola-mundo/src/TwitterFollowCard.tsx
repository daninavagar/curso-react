import './App.css'
import { userInfoCard } from './interfaces'

export function TwitterFollowCard({ userName, name, isFollowing }: userInfoCard) {
    const imageSrc = `https://unavatar.io/${userName}`
    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img 
                    className='tw-followCard-avatar'
                    src={imageSrc}
                    alt="avatar de navarro__99__" />
                <div className='tw-followCard-info'>
                    <strong>{name}</strong>
                    <span className='tw-followCard-infoUserName'>@{userName}</span>
                </div>
            </header>

            <aside>
                <button className='tw-followCard-button'>{ isFollowing ? 'Dejar de seguir' : 'Seguir'}</button>
            </aside>
        </article>
    )
}