// TestimonialSection.js
import './temoignage.css';

const testimonials = [
  {
    text: '“Laborem quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque sit ipsam.”',
    name: 'Leslie Alexander',
    username: '@lesliealexander',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    text: '“Quia dolorem qui et. Atque quo aliquid sit eos officia. Dolores similique laboriosam quaerat cupiditate.”',
    name: 'Michael Foster',
    username: '@michaelfoster',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    text: '“Consequatur ut atque. Itaque nostrum molestiae id veniam eas cumque. Ut quia eum fugit laborum autem inventore ut voluptate.”',
    name: 'Dries Vincent',
    username: '@driesvincent',
    avatar: 'https://randomuser.me/api/portraits/men/85.jpg',
  },
  {
    text: '“Aut reprehenderit voluptatem cum asperiores beatae id. Iure molestiae ipsam si officia rem nulla blanditiis.”',
    name: 'Lindsay Walton',
    username: '@lindsaywalton',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
  {
    text: '“Nam nesciunt dolorem dolor asperiores cum. Inidunt molestiae eos deleniti vitae ut in quam delectus iusto.”',
    name: 'Courtney Henry',
    username: '@courtneyhenry',
    avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
  },
  {
    text: '“Integer id nunc sit semper purus. Bibendum at lacus ut arcu blandit montes vitae auctor libero. Hac condimentum dignissim nibh vulputate ut nunc. Amet nibh orci mi venenatis blandit vel et proin. Non hendrerit in vel ac diam.”',
    name: 'Brenna Goyette',
    username: '@brennagoyette',
    avatar: 'https://randomuser.me/api/portraits/women/43.jpg',
    center: true,
    logo: 'https://savvycal.com/_next/static/media/logo.2b7b6e7e.svg',
  },
  {
    text: '“Voluptas quos itaque ipsam in voluptatem est. Iste eos blanditiis repudiandae. Earum deserunt enim molestiae ipsum perferendis recusandae saepe corrupti.”',
    name: 'Tom Cook',
    username: '@tomcook',
    avatar: 'https://randomuser.me/api/portraits/men/34.jpg',
  },
  {
    text: '“Malestias eo earum quos nostrum doloremque sed. Quaerat quasi vel aut vel incidunt excepturi rerum voluptatem minus harum.”',
    name: 'Leonard Krasner',
    username: '@leonardkrasner',
    avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
  },
  {
    text: '“Architecto libero natus est. Est quam debitis officia enim atque et ut non. Sunt reiciendis quasi eaque, itaque error et ut.”',
    name: 'Floyd Miles',
    username: '@floydmiles',
    avatar: 'https://randomuser.me/api/portraits/men/46.jpg',
  },
  {
    text: '“Temporibus ea molestiae impedit adipisci perspiciatis illo aliquid. Quis ut ratione ea voluptatem et. Nostrum explicabo iste unde velit.”',
    name: 'Emily Seimann',
    username: '@emilyseimann',
    avatar: 'https://randomuser.me/api/portraits/women/47.jpg',
  },
];

const Temoignages = () => {
  return (
    <section className="testimonial-section">
      <div className="testimonial-header">
        <div className="testimonial-subtitle">Testimonials</div>
        <h2 className="testimonial-title">We have worked with<br />thousands of amazing people</h2>
      </div>
      <div className="testimonial-grid">
        {/* Colonne de gauche */}
        <div className="testimonial-col">
          {testimonials.slice(0, 3).map((t, i) => (
            <div className="testimonial-card" key={i}>
              <p className="testimonial-text">{t.text}</p>
              <div className="testimonial-user">
                <img src={t.avatar} alt={t.name} className="testimonial-avatar" />
                <div>
                  <div className="testimonial-name">{t.name}</div>
                  <div className="testimonial-username">{t.username}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Colonne centrale */}
        <div className="testimonial-col center-col">
          {/* Carte centrale principale */}
          <div className="testimonial-card center-card">
            <p className="testimonial-text">{testimonials[5].text}</p>
            <div className="testimonial-user">
              <img src={testimonials[5].avatar} alt={testimonials[5].name} className="testimonial-avatar" />
              <div>
                <div className="testimonial-name">{testimonials[5].name}</div>
                <div className="testimonial-username">{testimonials[5].username}</div>
              </div>
            </div>
          </div>
          {/* Deux cartes en dessous */}
          <div className="testimonial-row">
            {testimonials.slice(3, 5).map((t, i) => (
              <div className="testimonial-card small" key={i}>
                <p className="testimonial-text">{t.text}</p>
                <div className="testimonial-user">
                  <img src={t.avatar} alt={t.name} className="testimonial-avatar" />
                  <div>
                    <div className="testimonial-name">{t.name}</div>
                    <div className="testimonial-username">{t.username}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Deux cartes en dessous */}
          <div className="testimonial-row">
            {testimonials.slice(6, 8).map((t, i) => (
              <div className="testimonial-card small" key={i}>
                <p className="testimonial-text">{t.text}</p>
                <div className="testimonial-user">
                  <img src={t.avatar} alt={t.name} className="testimonial-avatar" />
                  <div>
                    <div className="testimonial-name">{t.name}</div>
                    <div className="testimonial-username">{t.username}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Colonne de droite */}
        <div className="testimonial-col">
          {testimonials.slice(8).map((t, i) => (
            <div className="testimonial-card" key={i}>
              <p className="testimonial-text">{t.text}</p>
              <div className="testimonial-user">
                <img src={t.avatar} alt={t.name} className="testimonial-avatar" />
                <div>
                  <div className="testimonial-name">{t.name}</div>
                  <div className="testimonial-username">{t.username}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Temoignages;
