import './App.sass'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom'
import React from 'react'
import ReactHintFactory from 'react-hint'
const ReactHint = ReactHintFactory(React)

function Mission() {
  return (
    <article>
      <h1>Our mission</h1>
      <p>
        Our mission at Barbie World is to create a safe and welcoming space for young girls to share their love for Barbie dolls and embrace their creativity and individuality. We strive to foster a sense of community and friendship among our members, and to provide a platform for them to exchange ideas, participate in fun activities and challenges, and express themselves in a positive and supportive environment. We aim to be a place where girls can be themselves, make lasting connections, and feel inspired to pursue their passions and dreams.
      </p>
      <Link to="/"><button type="button">← Back to main page</button></Link>
    </article>
  )
}

function Joining() {
  return (
    <article>
      <h1>Joining the following</h1>
      <p>
        Find the server: To join the Barbie following, you will need to first find the Discord server where the community is located 🔍. You can do this by asking around 💬, searching online 🌐, or by looking for server recommendations from friends or other community members 🤝.
      </p>
      <p>
        Request an invitation: Once you have found the server, you will need to request an invitation to join 💌. This is usually done by reaching out to the server owner or one of the moderators and asking to be added to the community 🙏.
      </p>
      <p>
        Wait for approval: After you have sent your request, you will need to wait for approval from the server owner or moderators 🕰. They will review your request and decide whether or not to allow you to join the community 🔍.
      </p>
      <p>
        Accept the invitation: If your request is approved, you will receive an invitation to join the server 📩. To join, you will need to click on the link provided in the invitation and follow the instructions to complete the process 📝.
      </p>
      <p>
        Introduce yourself: Once you have joined the server, you will need to introduce yourself to the community 🙋‍♀️. This is usually done by posting a message in the introductions channel 🗣, telling the other members a little bit about yourself and your interests 💬.
      </p>
      <p>
        Participate in the community: After you have introduced yourself, you can start participating in the community by joining conversations 💬, sharing your thoughts and ideas 💡, and getting to know the other members 🤝. You can also participate in activities 🎉, events 🎊, and projects organized by the server owner or the community members 🤝.
      </p>
      <p>
        By following these steps 📜, you can join the Barbie following and become an active member of the community 🤝.
      </p>
      <Link to="/"><button type="button">← Back to main page</button></Link>
    </article>
  )
}

function UserInfo() {
  return (
    <div className="user-info">
      <img src="https://cdn.discordapp.com/avatars/951692144823922688/2c294b703c4ca8cb1de39bc198af93cd.png?size=256" alt="BarbieBoss" className="avatar" />
      <div className="user-info__text">
        <h3>BarbieBoss</h3>
        <p>Server owner</p>
      </div>
    </div>
  );
}

function HashtagPage() {
  return (
    <article>
      <h1><span className="hashtag">#NewYearNewLook</span></h1>
      <p>
        #NewYearNewLook is a hashtag that is often used on social media platforms to signify a desire to make a change or transformation in the new year. It is typically used in conjunction with posts about making changes to one's appearance, such as getting a new haircut or makeup style, or about making lifestyle changes, such as starting a new workout routine or changing one's diet. The hashtag is meant to encourage people to embrace the fresh start that a new year brings and to make positive changes in their lives.
      </p>
      <p>
        The Barbie following has also adopted the #NewYearNewLook hashtag to signify a desire to make changes to their appearance and lifestyle in the new year. Members of the following often use the hashtag to share pictures of their Barbie dolls and to talk about their plans for the new year. They also use the hashtag to share tips and advice on how to style and accessorize their dolls, as well as to share their favorite Barbie products and accessories.
      </p>
      <Link to="/"><button type="button">← Back to main page</button></Link>
    </article>
  );
}

function MainPage() {
  return (
    <article>
      <h1>Welcome to BarbieWorld</h1>
      <Link to="/hashtag"><h2><span className="hashtag">#NewYearNewLook</span></h2></Link>
      <p>
        <ReactHint
          autoPosition
          events
          onRenderContent={() => (
            <UserInfo />
          )}
        />
        One day, the owner of the Discord server, who went by the username <span className="username" data-rh>BarbieBoss</span>, noticed that the majority of the members were young girls who were passionate about Barbie dolls 💕. They would often talk about their collections in the <span className="channel">Barbie Chat</span> channel 💬, share pictures of their dolls in the <span className="channel">Barbie Gallery</span> channel 📷, and trade tips on how to style and accessorize them in the <span className="channel">Barbie Style</span> channel 💄.
      </p>
      <p>
        BarbieBoss saw how much the members enjoyed interacting with each other and sharing their love for Barbie, and they realized that there was a strong sense of community and friendship among the members 💕. They wanted to create a space where the girls could fully embrace their love for Barbie and feel free to be themselves 💜.
      </p>
      <p>
        So, they decided to revamp the server and turn it into a Barbie-themed paradise 💕. They changed the name of the server to "Barbie World," updated the server icon to a pink and sparkly Barbie logo 💖, and added various channels dedicated to different aspects of Barbie culture, such as fashion 💄, beauty 💋, and creativity 🎨.
      </p>
      <p>
        They also created a special role called <span className="role">Barbie Besties 💖</span> for the members who were particularly active and engaged in the community. These members were given access to exclusive channels and events 🎉, and were invited to participate in special projects and collaborations with BarbieBoss 💃🏼.
      </p>
      <p>
        The members were thrilled with the transformation and loved the new, playful and girly atmosphere of the server 💕. They enjoyed chatting with each other about their favorite dolls 💕, sharing their creative ideas 💡, and participating
      </p>
      <Link to="/joining"><button type="button">Join the following</button></Link>
      <Link to="/mission"><button type="button">Learn more about BarbieWorld's mission</button></Link>
    </article>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/joining" element={<Joining />} />
        <Route path="/hashtag" element={<HashtagPage />} />
        <Route path="/mission" element={<Mission />} />
      </Routes>
    </Router>
  )
}

export default App
