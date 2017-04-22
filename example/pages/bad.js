import Link from 'next/link'
import Page from '../decorators/Page'

const IncompatibleComponent = Page(() => <div>incompatible component</div>)

const Bad = props => (
  <div>
    <h1>bad</h1>
    <div><Link href='/'><a>home</a></Link> | <Link href='/bad'><a>bad</a></Link></div>
    <IncompatibleComponent />
  </div>
)

export default Page(Bad)
