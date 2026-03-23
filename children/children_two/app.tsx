import P from './module/P';

export default function App() {
  const texts = ['hello', 'world'].map((text, index) =>
    <P key={index} children={text}></P>)

  return <div children={texts} />
}
