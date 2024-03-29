import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AddCharacterForm from "../components/ui/AddCharacterForm";
import CharacterCard from "../components/ui/CharacterCard";
import API from "../components/utils/API";

const CampaignDetail = (props) => {
  const [campaign, setCampaign] = useState({
    name: "",
    userId: "",
    character: [],
    encounters:[]
  });

  const [characterFormState, setCharacterFormState] = useState({
    name: "",
    player: "",
    weaponSkill: "",
    ballisticSkill: "",
    strength: "",
    toughness: "",
    agility: "",
    intellegence: "",
    willPower: "",
    fellowship: "",
    attacks: "",
    wounds: "",
    strengthBonus: "",
    toughnessBonus: "",
    movement: "",
    magic: "",
    insanityPoints: "",
    fatePoints: "",
    userId: props.profile.id
  });

  //TODO: set cncounter form state

  const { id } = useParams();

  useEffect(() => {
    API.getOneCampaign(id).then((campaignData) => {
      if (campaignData) {
        setCampaign({
          name: campaignData.name,
          character: campaignData.Characters,
          encounter: campaignData.encounters,
          userId: campaignData.UserId,
        });
      }
    });
  }, []);

  const handleCharacterInputChange = (event) => {
    const { name, value } = event.target;
    setCharacterFormState({
      ...characterFormState,
      [name]: value,
    });
  };

  const handleCharacterFormSubmit = (e) => {
    e.preventDefault();
    API.createCharacter(props.profile.token, {
      ...characterFormState,
      campaignId: id,
    }).then((data) => {
      API.getOneCampaign(id).then((campaignData) => {
        if (campaignData) {
          setCampaign({
            name: campaignData.name,
            character: campaignData.Characters,
            userId: campaignData.UserId,
          });
        }
      });
      setCharacterFormState({
        name: "",
        player: "",
        weaponSkill: "",
        ballisticSkill: "",
        strength: "",
        toughness: "",
        agility: "",
        intellegence: "",
        willPower: "",
        fellowship: "",
        attacks: "",
        wounds: "",
        strengthBonus: "",
        toughnessBonus: "",
        movement: "",
        magic: "",
        insanityPoints: "",
        fatePoints: "",
      });
    });
  };

  return (
    <div className="CampaignDetail">
      <h1>{campaign.name}</h1>
      <AddCharacterForm
        handleCharacterInputChange={handleCharacterInputChange}
        handleCharacterFormSubmit={handleCharacterFormSubmit}
        characterFormState={characterFormState}
      />
      <div className="CharacterDetail">
        {/* {campaign.character.map((characterObj) =><CharacterCard name={characterObj.name} ></CharacterCard>)} */}
      </div>
    </div>
  );
};

export default CampaignDetail;
