import React, { Component } from 'react';
import Photo from '../Info/Photo';
import Name from './Name';
import Nickname from './Nickname';
import Info from './Info';
import Contacts from './Contacts/Contacts';


class MainInf extends Component {
  render() {
    return (
      <div className="MainInf">
        <Photo />
        <Name name='Alexander Radionov'/>
        <Nickname nickname='KOHTPOJIEP'/>
        <Info info='Just a student'/>
        <Contacts icon="university" text="@BSTU"/>
        <Contacts icon="map-marker" text="Belarus, Brest"/>
        <Contacts icon="envelope-o" text="alex.alex.radionov@gmail.com"/>
        <Contacts icon="link" text="twitter.com"/>
      </div>
    );
  }
}

export default MainInf;