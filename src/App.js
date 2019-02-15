import React, { Component } from "react";
import "./App.css";

const App = () => <PersonList />;

const PersonList = () => {
  const people = [
    {
      img: 22,
      name: "john",
      job: "developer"
    },
    {
      img: 34,
      name: "peter",
      job: "peter"
    },
    {
      img: 30,
      name: "bob",
      job: "developer"
    }
  ];
  return (
    <section>
      <Person person={people[0]}>
        y Loremem ipsum, dolor sit amet consectetur adipisicing elit. Nobis ab
        perspiciatis vero quod, excepturi corporis?
      </Person>
      <Person person={people[1]}>
        Loremem ipsum, dolor sit amet consectetur adipisicing elit. Nobis ab
        perspiciatis vero quod, excepturi corporis?
      </Person>
      <Person person={people[2]}>
        Loremem ipsum, dolor sit amet consectetur adipisicing elit. Nobis ab
        perspiciatis vero quod, excepturi corporis?
      </Person>
    </section>
  );
};

const Person = props => {
  const { img, name, job } = props.person;
  const { children } = props;
  const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;
  return (
    <div className="person">
      <img src={url} slt="" />
      <div>
        <h4>{name}</h4>
        <h4>{job}</h4>
        {children}
      </div>
    </div>
  );
};
export default App;
