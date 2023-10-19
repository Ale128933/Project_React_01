import './AppHola.css'
import './TwitterFollowCard'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
  {
    userName: 'kikobeats',
    name: 'Alejandro Valdes',
    isFollowing: true
  },
  {
    userName: 'midudev',
    name: 'Miguel Angel Durán',
    isFollowing: false
  },
  {
    userName: 'elonmusk',
    name: 'Elon Musk',
    isFollowing: false
  },
  {
    userName: 'vxnder',
    name: 'Van Der Xander',
    isFollowing: true
  }
]

export function App () {
  return (
    <section className='AppHola'>
      {
        users.map(({userName, name, isFollowing}) => (
          <TwitterFollowCard
          key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}
          >
            {name}
          </TwitterFollowCard>
        ))
      }
    </section>
  )
} 