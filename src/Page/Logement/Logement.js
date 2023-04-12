import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/header/header";
import cardItems from "../../datas/logements";
import "../Logement/Logement.css";
import Gallery from "../../components/gallery/gallery";
import Collapse from "../../components/collapse/collapse";
import Error from "../Error/Error";
import Rating from "../../components/rating/rating";
import Footer from "../../components/footer/footer";


export default function Logement() {
  const { id } = useParams();
  const [item, setItem] = useState();

  useEffect(() => {
    const foundItem = cardItems.find((c) => c.id === id);

    setItem(foundItem);
  }, []);
  // si foundItem ne trouve pas l'id alors page 404
  if (!item) {
    return <Error />;
  }

  const listeEquipements = item.equipments.map((e) => <li key={e}>{e}</li>);
  return (
    <>
      <Header />
      <Gallery pictures={item.pictures}></Gallery>
      <div className="content">
        <div className="bloc-left">
          <div className="location">
            <b>{item.title}</b>
            <p>{item.location}</p>
          </div>
          <div className="tags">
            <ul>
              {item.tags.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bloc-right">
          <div className="NbRating" >
          <Rating  rating={item.rating} />
          </div>

          <div className="host">
            <p>{item.host.name}</p>
            <img src={item.host.picture} alt="host" />
          </div>
        </div>
      </div>

      <div className="description">
        <Collapse texte={item.description} title="Description" />
        <Collapse texte={listeEquipements} title="Equipements" />
      </div>
      <Footer />
    </>
  );
}
