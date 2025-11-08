import Image from "next/image";

const highlights = [
  {
    title: "Шапка сообщества",
    description:
      "Волны северного сияния, встроенный логотип и CTA-кнопки. Оптимизировано под 1590×400 px.",
    gradient: "from-sky-400 via-cyan-500 to-indigo-600"
  },
  {
    title: "Аватар",
    description:
      "Минималистичный логомарк в круге с акцентом на глубину и свечение. 800×800 px.",
    gradient: "from-indigo-500 via-blue-600 to-slate-900"
  },
  {
    title: "Карты постов",
    description:
      "Три контента: афиша, обзор, цитата. Читабельные шрифты, контрастные CTA, модульная сетка.",
    gradient: "from-cyan-500 via-sky-500 to-purple-500"
  }
];

const palette = [
  { hex: "#0B1F3A", role: "Основной фон" },
  { hex: "#1A4B8C", role: "Акцент заголовков" },
  { hex: "#2FC4F1", role: "Световой акцент" },
  { hex: "#59F4CF", role: "CTA и элементы" },
  { hex: "#FFFFFF", role: "Текст и контент" }
];

const typography = [
  { name: "Rubik Bold", usage: "Заголовки, CTA" },
  { name: "Rubik Medium", usage: "Подзаголовки" },
  { name: "Rubik Regular", usage: "Основной текст" }
];

export default function Home() {
  return (
    <main className="page">
      <section className="hero">
        <div className="hero__backdrop">
          <div className="hero__blur" />
          <div className="hero__grid" />
        </div>
        <header className="hero__header">
          <div className="badge">Aurora Collective</div>
          <h1>
            Визуальный стиль <span>ВКонтакте</span> для современных креативных
            команд
          </h1>
          <p>
            Премиальный набор графики: шапка, аватар и универсальные карточки
            для контента, вдохновленные северным сиянием и атмосферой digital
            community.
          </p>
          <div className="hero__actions">
            <button className="hero__cta">Скачать комплект</button>
            <button className="hero__cta hero__cta--ghost">
              Посмотреть мудборд
            </button>
          </div>
        </header>
        <div className="hero__preview">
          <div className="device device--wide">
            <div className="device__toolbar">
              <span />
              <span />
              <span />
            </div>
            <div className="cover">
              <div className="cover__overlay" />
              <div className="cover__glow cover__glow--left" />
              <div className="cover__glow cover__glow--right" />
              <div className="cover__content">
                <div className="cover__title">AURORA COLLECTIVE</div>
                <div className="cover__subtitle">
                  Сообщество визуальных экспериментов и digital-арт сессий
                </div>
                <div className="cover__cta">Присоединиться</div>
              </div>
              <div className="cover__orbits">
                <div className="orbit orbit--sm" />
                <div className="orbit orbit--md" />
                <div className="orbit orbit--lg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Концепция визуала</h2>
        <div className="grid grid--concept">
          {highlights.map((item) => (
            <article key={item.title} className="card">
              <div className={`card__cover bg-gradient ${item.gradient}`} />
              <div className="card__body">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--accent">
        <div className="section__header">
          <h2>Превью дизайнерских модулей</h2>
          <p>
            Единая эстетика за счёт градиентов, геометрии и неонового света.
            Каждый блок адаптирован под форматы VK.
          </p>
        </div>
        <div className="mockups">
          <div className="mockups__col">
            <div className="mockup mockup--avatar">
              <div className="mockup__glow" />
              <div className="mockup__ring" />
              <span>AC</span>
            </div>
            <div className="mockup mockup--story">
              <div className="story__header">Aurora Sessions</div>
              <div className="story__body">
                <div className="story__badge">LIVE</div>
                <div className="story__title">Digital-джем с гостями</div>
                <div className="story__time">20:00 • Суббота</div>
              </div>
            </div>
          </div>
          <div className="mockups__col">
            <div className="mockup mockup--post">
              <div className="post__image">
                <div className="post__glow" />
                <div className="post__label">Новый визуальный паттерн</div>
              </div>
              <div className="post__content">
                <div className="post__tag">Guides</div>
                <h3>Как построить фирменную сетку для контента</h3>
                <p>
                  Пошаговый план, шаблоны и цветовые решения, которые повышают
                  вовлеченность аудитории сообщества.
                </p>
                <button>Скачать макет</button>
              </div>
            </div>
          </div>
          <div className="mockups__col">
            <div className="mockup mockup--carousel">
              <div className="carousel__slide carousel__slide--active">
                <div className="carousel__tag">Event</div>
                <h4>Glow Meetup</h4>
                <p>Офлайн-встреча резидентов сообщества</p>
                <span>12 апреля • Москва</span>
              </div>
              <div className="carousel__slide">
                <div className="carousel__tag">Drop</div>
                <h4>Font Pack</h4>
                <p>Набор авторских шрифтов Aurora</p>
              </div>
              <div className="carousel__slide">
                <div className="carousel__tag">Collab</div>
                <h4>Neon Lab</h4>
                <p>Коллаборация с VR-художниками</p>
              </div>
            </div>
            <div className="mockup mockup--quote">
              <p>
                “Мы создали визуал, который объединяет эстетику северного
                сияния и структурность digital-дизайна. Он моментально выделяет
                сообщество в ленте.”
              </p>
              <span>— Creative Lead, Aurora Collective</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section__split">
          <div>
            <h2>Цветовая палитра</h2>
            <div className="palette">
              {palette.map((tone) => (
                <div key={tone.hex} className="swatch">
                  <div className="swatch__color" style={{ background: tone.hex }} />
                  <div className="swatch__meta">
                    <span>{tone.hex}</span>
                    <small>{tone.role}</small>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2>Типографика</h2>
            <ul className="typography">
              {typography.map((item) => (
                <li key={item.name}>
                  <strong>{item.name}</strong>
                  <span>{item.usage}</span>
                </li>
              ))}
            </ul>
            <div className="quote-card">
              <p>Уверенный тон и чистая подача для премиального визуального бренда.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--footer">
        <div className="footer__cta">
          <h2>Готовы обновить визуал вашего сообщества?</h2>
          <p>
            Получите готовые файлы PSD/Figma, брендгайд и контент-шаблоны в одном
            архиве. Настройте визуал за 15 минут.
          </p>
          <div className="hero__actions">
            <button className="hero__cta">Получить материалы</button>
            <button className="hero__cta hero__cta--ghost">Написать нам</button>
          </div>
        </div>
        <div className="footer__meta">
          <span>© {new Date().getFullYear()} Aurora Collective</span>
          <span>VK: vk.com/aurora.collective</span>
        </div>
      </section>
    </main>
  );
}
