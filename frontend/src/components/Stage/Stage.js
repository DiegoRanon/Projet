import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../../style/Cours.css"
import Card from "./components/Card";
import { useHttpClient } from "../../shared/hooks/http-hook";
import { useForm } from '../../shared/hooks/form-hook';
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import Modal from "../../shared/components/UIElements/Modal";
import Button from "../../shared/components/FormElements/Button";
import Map from "../../shared/components/UIElements/Map";

function Stage({ stage }) {

  const { error, sendRequest, clearError } = useHttpClient();
  const [showMap, setShowMap] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const [formState, inputHandler, setFormData] = useForm(
    {
      title: {
        value: '',
        isValid: false
      },
      description: {
        value: '',
        isValid: false
      }
    },
    false
  );

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
        `http://localhost:5000/stages/${stage.id}`,
        "DELETE"
      );
      stage.onDelete(stage.id);
    } catch (err) {
    }
  };

  const stageUpdateSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      await sendRequest(
        `http://localhost:5000/stages/${stage.id}`,
        "PATCH",
        JSON.stringify({
          titre: formState.inputs.title.value,
          description: formState.inputs.description.value,
        }),
        {
          "Content-Type": "application/json",
        }
      );
    } catch (err) {}
  };
  return (
    <React.Fragment>

    <li className="stage-item">
     <ErrorModal error={error} onClear={clearError} />
     <Modal
          show={showMap}
          onCancel={closeMapHandler}
          header={stage.courriel}
          contentClass="place-item__modal-content"
          footerClass="place-item__modal-actions"
          footer={<Button onClick={closeMapHandler}>CLOSE</Button>}
        >
          <div className="map-container">
            <Map center={stage.nom} zoom={16} />
          </div>
        </Modal>

      <Card className="stage-item__content">
          <div>
            <h2>{"Nom du recruteur: " + stage.nom}</h2>
            <h3>{"Courriel du recruteur: " + stage.courriel}</h3>
            <h3>{"numero de téléphone du recruteur: " + stage.numeroTel}</h3>
            <h3>{"Nom de l'entreprise: " + stage.nomEntreprise}</h3>
            <h3>{"Adresse de l'entreprise: " + stage.adresseEntreprise}</h3>
            <h3>{"Type de stage: " + stage.typeStage}</h3>
            <h3>{"Nombre de postes disponibles: " + stage.nombreDePostesDispo}</h3>
            <h3>{"Description du stage: " + stage.descriptionStage}</h3>
          </div>
          <div className="place-item__actions">
            <Button to={`/stages/${stage.id}`}>Modifier</Button>

          </div>
      </Card>


    </li>
    </React.Fragment>
  );
}

export default Stage;
