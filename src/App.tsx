import './App.sass'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom'

function Joining() {
  return (
    <article>
      <h1>Joining the following</h1>
      <p>
        Find the server: To join the Barbie following, you will need to first find the Discord server where the community is located. You can do this by asking around, searching online, or by looking for server recommendations from friends or other community members.
      </p>
      <p>
        Request an invitation: Once you have found the server, you will need to request an invitation to join. This is usually done by reaching out to the server owner or one of the moderators and asking to be added to the community.
      </p>
      <p>
        Wait for approval: After you have sent your request, you will need to wait for approval from the server owner or moderators. They will review your request and decide whether or not to allow you to join the community.
      </p>
      <p>
        Accept the invitation: If your request is approved, you will receive an invitation to join the server. To join, you will need to click on the link provided in the invitation and follow the instructions to complete the process.
      </p>
      <p>
        Introduce yourself: Once you have joined the server, you will need to introduce yourself to the community. This is usually done by posting a message in the introductions channel, telling the other members a little bit about yourself and your interests.
      </p>
      <p>
        Participate in the community: After you have introduced yourself, you can start participating in the community by joining conversations, sharing your thoughts and ideas, and getting to know the other members. You can also participate in activities, events, and projects organized by the server owner or the community members.
      </p>
      <p>
        By following these steps, you can join the Barbie following and become an active member of the community.
      </p>
    </article>
  )
}

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
      <Link to="/joining"><button type="button">Join the following</button></Link>
    </article>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/joining" element={<Joining />} />
      </Routes>
    </Router>
  )
}

export default App
