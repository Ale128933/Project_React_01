import { useState } from "react"
//1:44:42
export function TwitterFollowCard ({children, userName, initialIsFollowing}) {

  //***---Conditional Render
  const [isFollowing, setIsFolowing] = useState(initialIsFollowing)
  const handleClick = () => {
    setIsFolowing(!isFollowing)
  }

  const text = isFollowing ? 'Siguiendo' : 'Seguir'
  const buttonClassName = isFollowing 
    ? 'tw-followCard-button is-following' 
    : 'tw-followCard-button'

  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img 
          className='tw-followCard-avatar'
          alt="el avatar del usuario" 
          src={`https://unavatar.io/twitter/${userName}`}/>
        <div className='tw-followCard-info'>
          <strong>{children}</strong>
          <span className='tw-followCard-infoUserName'>@{userName}</span>
        </div>
      </header>

      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          <span className='tw-followCard-text'>{text}</span>
          <span className={'tw-followCard-stopFollowing'}>Dejar de seguir</span>
        </button>
      </aside>
    </article>
  )
}