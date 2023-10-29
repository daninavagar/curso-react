import { TwitterFollowCard } from './TwitterFollowCard'
import { userInfoCard } from './interfaces'

const user:userInfoCard = {
    userName: 'navarro__99__',
    name: 'Daniel Navarro García',
    isFollowing: true
}

export function App() {
    return (
        <TwitterFollowCard
            {...user}
             />
    )
}