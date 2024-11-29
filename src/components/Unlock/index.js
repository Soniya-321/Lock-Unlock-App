// Write your code here
import {useState} from 'react'
import {Main, Button, LockContainer, Img, ParaText} from './styledComponents'

const Unlock = () => {
  const [locked, setLock] = useState(false)
  const updateLock = () => {
    setLock(prevState => !prevState)
  }
  return (
    <Main>
      {locked ? (
        <LockContainer>
          <Img
            src="https://assets.ccbp.in/frontend/hooks/unlock-img.png"
            alt="unlock"
          />
          <ParaText>Your Device is Unlocked</ParaText>
        </LockContainer>
      ) : (
        <LockContainer>
          <Img
            src="https://assets.ccbp.in/frontend/hooks/lock-img.png"
            alt="lock"
          />
          <ParaText>Your Device is Locked</ParaText>
        </LockContainer>
      )}
      {locked ? (
        <Button onClick={updateLock}>Lock</Button>
      ) : (
        <Button onClick={updateLock}>Unlock</Button>
      )}
    </Main>
  )
}

export default Unlock
