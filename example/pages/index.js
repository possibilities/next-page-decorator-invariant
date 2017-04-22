import Link from 'next/link'
import Page from '../decorators/Page'

const Index = props => (
  <div>
    <h1>home</h1>
    <div><Link href='/'><a>home</a></Link> | <Link href='/bad'><a>bad</a></Link></div>
  </div>
)

export default Page(Index)
