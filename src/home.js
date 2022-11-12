import React from 'react';
import { Landing } from './components/section/landing';
import { Token } from './components/section/token';
import { Team } from './components/section/team';
import { Footer } from './components/section/footer';


export function Home() {

    return (
      <div className="container">
        <Landing />
        <Token />
        <Team />
        <Footer />
      </div>
    );
  }