import { FollowCardType } from "../interfaces/types"
export function TwitterFollowCard({userName, name, isFollowing}: FollowCardType) {


  const text = isFollowing ? 'Siguiendo' : 'Seguir';
  const buttonClassName = isFollowing 
    ? 'tw-followCard-button is-following' 
    : 'tw-followCard-button';
  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar" 
          src='https://unavatar.io/twitter/kikobeats'
          alt="Imagen Perfil" />
          <div className="tw-followCard-info">
            <strong>{name}</strong>
            <span className="tw-followCard-infoUsername">@{userName}</span>
          </div>
      </header>
      <aside className={buttonClassName}>
        { text }
      </aside>
    </article>
  )
}