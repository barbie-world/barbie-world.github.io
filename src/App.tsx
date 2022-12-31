import './App.sass'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom'

function MainPage() {
  return (
    <article>
      <h1>Welcome to BarbieWorld</h1>
      <h2><span className="hashtag">#NewYearNewLook</span></h2>
      <p>
        One day, the owner of the Discord server, who went by the username "BarbieBoss," noticed that the majority of the members were young girls who were passionate about Barbie dolls 💕. They would often talk about their collections in the "Barbie Chat" channel 💬, share pictures of their dolls in the "Barbie Gallery" channel 📷, and trade tips on how to style and accessorize them in the "Barbie Style" channel 💄.
      </p>
      <p>
        BarbieBoss saw how much the members enjoyed interacting with each other and sharing their love for Barbie, and they realized that there was a strong sense of community and friendship among the members 💕. They wanted to create a space where the girls could fully embrace their love for Barbie and feel free to be themselves 💜.
      </p>
      <p>
        So, they decided to revamp the server and turn it into a Barbie-themed paradise 💕. They changed the name of the server to "Barbie World," updated the server icon to a pink and sparkly Barbie logo 💖, and added various channels dedicated to different aspects of Barbie culture, such as fashion 💄, beauty 💋, and creativity 🎨.
      </p>
      <p>
        They also created a special role called "Barbie Besties" 💖 for the members who were particularly active and engaged in the community. These members were given access to exclusive channels and events 🎉, and were invited to participate in special projects and collaborations with BarbieBoss 💃🏼.
      </p>
      <p>
        The members were thrilled with the transformation and loved the new, playful and girly atmosphere of the server 💕. They enjoyed chatting with each other about their favorite dolls 💕, sharing their creative ideas 💡, and participating
      </p>
      <button type="button">Join the following</button>
    </article>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </Router>
  )
}

export default App
