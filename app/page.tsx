import Image from "next/image";
import { site } from "@/content/site";

export default function Page() {
  return (
    <main className="page">
      <div className="topstrip">
        <div className="topstripInner">
          <span className="muted">{site.topstrip.left}</span>
          <span className="muted">{site.topstrip.right}</span>
        </div>
      </div>

      <header className="header">
        <div className="headerLeft">
          <span className="navItem">{site.nav.left1}</span>
          <span className="navItem">{site.nav.left2}</span>
          <span className="navItem">{site.nav.left3}</span>
        </div>

        <div className="headerCenter">
          <span className="wordmark">{site.wordmark}</span>
        </div>

        <div className="headerRight">
          <span className="navItem">{site.nav.right1}</span>
          <span className="navItem">{site.nav.right2}</span>
          <span className="navItem">{site.nav.right3}</span>
        </div>
      </header>

      <section className="productGrid">
        <aside className="colLeft">
          <div className="block">
            <div className="kicker">{site.left.kicker}</div>
            <h1 className="title">{site.left.title}</h1>
            <p className="body">{site.left.subtitle}</p>
          </div>

          <div className="block">
            <div className="subhead">{site.left.detailsTitle}</div>
            <ul className="list">
              {site.left.details.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </div>

          <div className="block">
            <div className="subhead">{site.left.linksTitle}</div>
            <ul className="list">
              {site.left.links.map((l) => (
                <li key={l.href}>
                  <a className="link" href={l.href} target="_blank" rel="noreferrer">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="block">
            <div className="subhead">{site.left.timelineTitle}</div>
            <div className="timeline">
              {site.left.timeline.map((t) => (
                <div className="timelineRow" key={`${t.date}-${t.title}`}>
                  <span className="timelineDate">{t.date}</span>
                  <span className="timelineText">{t.title}</span>
                </div>
              ))}
            </div>
          </div>
        </aside>

        <section className="colCenter" aria-label="image">
          <div className="imageFrame">
            <Image
              src={site.center.imagePath}
              alt={site.center.imageAlt}
              width={1400}
              height={1800}
              priority
              className="mainImage"
            />
          </div>
          <p className="caption muted">{site.center.caption}</p>
        </section>

        <aside className="colRight">
          <div className="block">
            <div className="price">{site.right.price}</div>
            <div className="tiny muted">{site.right.smallLine}</div>
          </div>

          <div className="block">
            <div className="subhead">{site.right.noteTitle}</div>
            <p className="body">{site.right.noteBody}</p>
          </div>

          <div className="block">
            <div className="subhead">{site.right.giftTitle}</div>
            <p className="body">{site.right.giftBody}</p>
            {site.right.giftHint ? <p className="tiny muted">{site.right.giftHint}</p> : null}
          </div>

          <div className="block">
            <div className="subhead">{site.right.footerTitle}</div>
            <p className="tiny muted">{site.right.footerBody}</p>
          </div>
        </aside>
      </section>

      <footer className="footer">
        <span className="muted">{site.footer}</span>
      </footer>
    </main>
  );
}
