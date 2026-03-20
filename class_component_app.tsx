import {Component} from 'react';

export default class App extends Component {
  render() {
    const isLoading = true;
    if (isLoading) return <p>로딩중입니다.</p>

    return (
      <ul>
        <li>
          <a href="https://www.google.com">
            <p>구글로 가요</p>
          </a>
        </li>
      </ul>
    )
  }
}
