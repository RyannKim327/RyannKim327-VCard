import Footer from './footer'
import Left from './left'
import Right from './right'

const Index = () => {
  document.title = "I am Ryann Kim Sesgundo"
  return (
    <div
      className="main-layout w-100">
      <Left />
      <Right />
      <Footer />
    </div>
  )
}

export default Index