import { favoriteSitesData } from "../data/favoriteSites";

export const FavoriteSites = () => {
  console.log(favoriteSitesData);
  return (
    <ul className="site__list">
      {favoriteSitesData.map((site) => {
        return (
          <li className="site__item" key={site.id}>
            <h2 className="site-item__name">{site.name}</h2>
            <a className="site-item__link" href={site.url}>
              Перейти на сайт
            </a>
          </li>
        );
      })}
    </ul>
  );
};
