import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../style/Etudiant.css";
import Card from "../Etudiant/components/Card";
import Profile from "../Etudiant/components/Profile";
import { useHttpClient } from "../../shared/hooks/http-hook";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import Button from "../../shared/components/FormElements/Button";
import Modal from "../../shared/components/UIElements/Modal";
import Map from "../../shared/components/UIElements/Map";

function Etudiant({ etudiant }) {
  const { error, sendRequest, clearError } = useHttpClient();
  const [showMap, setShowMap] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const openMapHandler = () => setShowMap(true);
  const closeMapHandler = () => setShowMap(false);

  const showDeleteWarningHandler = () => {
    setShowConfirmModal(true);
  };

  const cancelDeleteHandler = () => {
    setShowConfirmModal(false);
  };

  const confirmDeleteHandler = async () => {
    setShowConfirmModal(false);
    try {
      await sendRequest(
        `http://localhost:5000/api/places/${etudiant.id}`,
        "DELETE"
      );
      etudiant.onDelete(etudiant.id);
    } catch (err) {}
  };
  return (
    <React.Fragment>
      <li className="user-item">
        <ErrorModal error={error} onClear={clearError} />
        <Modal
          show={showMap}
          onCancel={closeMapHandler}
          header={etudiant.courriel}
          contentClass="place-item__modal-content"
          footerClass="place-item__modal-actions"
          footer={<Button onClick={closeMapHandler}>CLOSE</Button>}
        >
          <div className="map-container">
            <Map center={etudiant.DA} zoom={16} />
          </div>
        </Modal>
        <Modal
          show={showConfirmModal}
          onCancel={cancelDeleteHandler}
          header="Are you sure?"
          footerClass="place-item__modal-actions"
          footer={
            <React.Fragment>
              <Button inverse onClick={cancelDeleteHandler}>
                Annuler
              </Button>
              <Button danger onClick={confirmDeleteHandler}>
                Supprimer
              </Button>
            </React.Fragment>
          }
        >
          <p>
            Do you want to proceed and delete this place? Please note that it
            can't be undone thereafter.
          </p>
        </Modal>
        <Card className="user-item__content">
          <div className="user-item__image">
            <Profile image={etudiant.profilSortie} alt={etudiant.nom} />
          </div>

          <div className="user-item__info">
            <h2>{etudiant.nom}</h2>
            <h3>{"Numéro de DA de l'étudiant: " + etudiant.DA}</h3>
            <h3>{"Nom de l'étudiant: " + etudiant.nom} </h3>
            <h3>{"Courriel de l'étudiant: " + etudiant.courriel} </h3>
          </div>
          <div className="place-item__actions">
            <Button inverse onClick={openMapHandler}>
              Assigner à un stage
            </Button>
            <Button to={`/etudiants/${etudiant.id}`}>Modifier</Button>

            <Button danger onClick={showDeleteWarningHandler}>
              Supprimer
            </Button>
          </div>
        </Card>
      </li>
    </React.Fragment>
  );
}

export default Etudiant;
