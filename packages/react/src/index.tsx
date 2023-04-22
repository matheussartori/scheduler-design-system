import { styled } from './styles'

const Button = styled('button', {
  fontFamily: '$default',
  backgroundColor: '$green500',
  borderRadius: '$md',
  height: '$4'
})

export function App (): JSX.Element {
  return (
    <Button>Hello World</Button>
  )
}
