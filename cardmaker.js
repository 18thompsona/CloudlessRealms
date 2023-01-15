"use strict";

//Required Fields
let cardClass;              //Card class - mage, item, something
let title;                  //Name of the card - Holy light etc
let description;            //Description of cards effects

//Optional Fields
let cost;                //Cost to buy card
let element1;               //Main Element for spells/arts
let element2;               //Sub Element for spells/arts
   
const usecase = [];         //Icon describers - range 10, AOE radius, scaling? etc
const usecasttext = [];     //Icon Text




function getCardDetails()
{
    cardClass = document.getElementsByName("cardclass");
    title = document.getElementsByName("title");
    description = document.getElementsByName("descriptiontext");
    cost = document.getElementsByName("cost");
    element1 = document.getElementsByName("");
    element2 = document.getElementsByName("");
    us = document.getElementsByName("");
    cardClass = document.getElementsByName("");
    cardClass = document.getElementsByName("");
    for(let i = 0; i <= 5; i++)
    {
        usecase[i] = document.getElementsByName("usecase" + i);
        usecasetext[i] = document.getElementsByName("usecasetext" + i);
    }
}