import { favoriteSitesData } from "../data/favoriteSites";

export const FavoriteSites = () => {
  console.log(favoriteSitesData);
  return (
    <ul className="site_list">
      {favoriteSitesData.map((site) => {
        return (
          <li className="site_item" key={site.id}>
            <h2 className="site-item_name">{site.name}</h2>
            <a className="site-item_link" href={site.url}>
              Перейти на сайт
            </a>
          </li>
        );
      })}
    </ul>
  );
};
