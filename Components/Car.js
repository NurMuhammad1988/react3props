import React from 'react'
// import './Car.css'



function Car(props) {

  return (

    <div className='asosiy'>

      <div className='cars'>

        <h2 style={{ color: "brown" }}>Name: {props.name} </h2>

        <h4>Number: {props.number} </h4>

        {/*<h4>Number: {props.number} izohga olish shunday boladi </h4>*/}


        <h4 className='blue'>Color: {props.color}</h4>


        <strong>Random: {Math.floor(Math.random() * 100)}</strong>

        <p className='pilus'>{10 + 10}</p>

         {}

      </div>

    </div>

  )

}

export default Car;