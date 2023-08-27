import { Container } from './styles';


export function NewCard({ title, icon: Icon }) {
  return (
    <Container to="/new">
      <div>
        <div className="img">
          <Icon />
        </div>
        <span>{ title }</span>
      </div>
    </Container>
  )
}