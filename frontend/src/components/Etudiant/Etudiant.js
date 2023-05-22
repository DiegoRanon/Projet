import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "../../style/Etudiant.css";
import Card from "../Etudiant/components/Card";
import Profile from "../Etudiant/components/Profile";
import { useHttpClient } from "../../shared/hooks/http-hook";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import Button from "../../shared/components/FormElements/Button";
import Modal from "../../shared/components/UIElements/Modal";
import Map from "../../shared/components/UIElements/Map";
import { useForm } from '../../shared/hooks/form-hook';

function Etudiant({ etudiant }) {
  const { error, sendRequest, clearError } = useHttpClient();
  const [showMap, setShowMap] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const history = useHistory();

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

  const closeMapHandler = () => setShowMap(false);

  const confirmDeleteHandler = async () => {
    setShowConfirmModal(false);
    try {
      await sendRequest(
        `http://localhost:5000/etudiants/${etudiant.id}`,
        "DELETE"
      );
      etudiant.onDelete(etudiant.id);
    } catch (err) {
    }
  };

  const etudiantUpdateSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      await sendRequest(
        `http://localhost:5000/etudiants/${etudiant.id}`,
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
        <Card className="user-item__content">

          <div className="user-item__info">
            <h2>{etudiant.nom}</h2>
            <h3>{"Numéro de DA de l'étudiant: " + etudiant.DA}</h3>
            <h3>{"Nom de l'étudiant: " + etudiant.nom} </h3>
            <h3>{"Courriel de l'étudiant: " + etudiant.courriel} </h3>
            <h3>{"Profil de sortie: " + etudiant.profil} </h3>
          </div>
        </Card>
      </li>
    </React.Fragment>
  );}

export default Etudiant;
